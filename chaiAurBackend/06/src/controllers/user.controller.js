import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.models.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import jwt from "jsonwebtoken"
import { Subscription } from "../models/subscription.model.js"
import mongoose from "mongoose"

const generateAccessAndRefreshToken = async (userId) => {
    try{
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})

        return {accessToken, refreshToken}

    } catch(error) {
        throw new ApiError(
            500,
            "Something went wrong while generating refresh and access token"
        )
    }
}

const registerUser = asyncHandler( async (req,res) => {
    //step1: get user details from frontend
    //step2: validation - check that details are not empty
    //step3: check if user already exists: username, email
    //step4: check for images & avatar
    //step5: upload them to cloudinary, avatar
    //step6: create user object - create entry in db
    //step7: remove password and refresh token field from response(as the response need to be returned to user)
    //step8: check for user creation
    //step9: return res (response)

    const { username, email, fullname, password } = req.body;    //destructuring req.body
    console.log("username: ", username);

    // if(fullname === "") throw new ApiError(400, "fullname is required") //if-block will be needed for each entry-> so this disrupts the cleanness of code
    // better approach rather than if-block for entries will be:
    if(
        [fullname, email, username, password].some((field) => 
            field?.trim() === "" )
    ) {
        throw new ApiError(
            400,
            "All fields are needed"
        )
    }
    //step3:
    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    if(existedUser) throw new ApiError(
        409,
        "User with email or username already exists"
    )

    //step4:
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = "";
    if(req.files && req.files.coverImage[0] && req.files.coverImage[0].path)
            coverImageLocalPath = req.files.coverImage[0].path;

    if(!avatarLocalPath)    throw new ApiError(400,"Avatar file is required")
    
    //step5:
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if(!avatar) throw new ApiError(400, "Avatar file is required")

    //step6:
    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverimage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    //step7:
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )   //  'select' keyword is used to select fields that are required, 
        // by default all fields are selected so we use "-" and name the fields that are not needed(e.g. password, refreshToken here).
    
    //step8:
    if(!createdUser)    throw new ApiError(
        500,
        "Server Error!! Something went wrong in registering user!"
    )
    
    return res.status(201).json(
        new ApiResponse(
            200,
            createdUser,
            "User created Successfully"
        )
    )
})

const loginUser = asyncHandler( async (req,res) => {
    //step1: req body -> data
    //step2: check whether username & email exist or not(if these fields are send by req.body upon login)
    //step3: find the user
    //step4: password check
    //step5: gennerate access and refresh token
    //step6: send cookie

    //step1:
    const { username, email, password } = req.body;

    //step2:
    if(!username && !email) throw new ApiError(
        400,
        "username or email is required"
    )

    //step3:
    const user = User.findOne({
        $or: [{username}, {email}]
    })
    if(!user)   throw new ApiError(
        404,
        "user does not exists"
    )

    //step4:
    const isPasswordValid = await user.isPasswordCorrect(password)
    if(!isPasswordValid)    throw new ApiError(
        401,
        "Invalid credentials"
    )

    //step5:
    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)

    //step6:
    const loggedInUser = User.findById(user._id).
    select("-password -refreshToken")

    const options = {   // usually cookies are modifiable from frontend but after setting 'httpOnly' & 'secure', cookies can only be modifiable from server side. 
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200,
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged In Successsfully"
        )
    )
})

const logoutUser = asyncHandler( async (req,res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(
        new ApiResponse(
            200,
            {},
            "user successfully logged out"
        )
    )
})

const refreshAccessToken = asyncHandler( async (req, res) => {

    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken
    if(!incomingRefreshToken)   throw new ApiError(
        301,
        "Unauthorized request"
    )

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.ACCESS_TOKEN_SECRET
        )
    
        const user = await User.findById(decodedToken?._id)
        if(!user)   throw new ApiError(
            401,
            "Invalid Refresh Token"
        )
    
        if(incomingRefreshToken !== user?.refreshToken)    throw new ApiError(
            401,
            "Refresh Token is expired or used"
        )
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessAndRefreshToken(user._id)
    
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200,
                {accessToken, refreshToken: newRefreshToken},
                "Access Token Refreshed Succesfully"
            )
        )
    } catch (error) {
        throw new ApiError(
            500,
            "Server Error: "+error?.message
        )
    }
})

const changeCurrentPassword = asyncHandler( async (req, res) => {
    const {oldPassword, newPassword} = req.body

    const user = await User.findById(req.user?._id)
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

    if(!isPasswordCorrect) throw new ApiError(
        400,
        "Password Incorrect"
    )

    user.password = newPassword;
    await user.save({validateBeforeSave: false})

    return res
    .status(200)
    .json( new ApiResponse(
        200,
        {},
        "Password changed successfully"
    ))
})

const getCurrentUser = asyncHandler( async (req,res) => {
    if(!req.user)   throw new ApiError(
        401,
        "Permission Denied"
    )

    return res
    .status(200)
    .json( new ApiResponse(
        200,
        req.user,
        "current user fetched successfully"
    ))
})

const updateAccountDetails = asyncHandler( async (req,res) => {
    const {fullname, email} = req.body
    if(!fullname && !email) throw new ApiError(
        400,
        "All fields are required"
    )

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                fullname,
                email
            }
        },
        {
            new: true
        }    
    ).select("-password -refreshToken")

    return res
    .status(200)
    .json( new ApiResponse(
        200,
        user,
        "Account details updated successfully"
    ))
})

const updateUserAvatar = asyncHandler( async (req,res) => {
    const avatarLocalPath = req.files?.path
    if(!avatarLocalPath)    throw new ApiError(
        400,
        "Avatar file is missing"
    )

    const avatar = await uploadOnCloudinary(avatarLocalPath)

    if(!avatar.url) throw new ApiError(
        400,
        "Error while uploading on avatar"
    )

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                avatar: avatar.url
            }
        },
        {new:true}
    ).select("-password -refreshtoken")

    return res
    .status(200)
    .json( new ApiResponse(
        200,
        user,
        "Avatar updated successfully"
    ))
})

const updateUserCoverImage = asyncHandler( async (req,res) => {
    const CoverImageLocalPath = req.files?.path
    if(!CoverImageLocalPath)    throw new ApiError(
        400,
        "Cover-Image file is missing"
    )

    const CoverImage = await uploadOnCloudinary(CoverImageLocalPath)

    if(!CoverImage.url) throw new ApiError(
        400,
        "Error while uploading on avatar"
    )

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                coverImage: CoverImage.url
            }
        },
        {new:true}
    ).select("-password -refreshtoken")

    return res
    .status(200)
    .json( new ApiResponse(
        200,
        user,
        "Cover-Image updated successfully"
    ))
})

const getUserChannnelProfile = asyncHandler( async (req,res) => {
    const { username } = req.params
    if(!username?.trim())   throw new ApiError(
        400,
        "username is missing"
    )

    const channel = await User.aggregate([
        {
            $match: {
                username: username?.toLowerCase()
            }
        },
        {
            $lookup: {
                form: "subscriptions",
                localField: "_id",
                foreignField: "channel",
                as: "subscribers"
            }
        },
        {
            $lookup: {
                from: "subscriptions",
                localField: "_id",
                foreignField: "subscribers",
                as: "subscribedTo"
            }   
        },
        {
            $addFields: {
                subscribersCount: {
                    $size: "$subscribers"
                },
                channelSubscribedToCount: {
                    $size: "$subscribedTo"
                },
                isSubscribed: {
                    $cond: {
                        if: {$in: [req.user?._id, "$sunscribers.subscriber"]},
                        then: true,
                        else: false
                    }
                }
            }
        },
        {
            $project: {
                fullname: 1,
                username: 1,
                subscribersCount: 1,
                channelSubscribedToCount: 1,
                isSubscribed: 1,
                avatar: 1,
                coverImage: 1,
                email: 1
            }
        }
    ])

    if(!channel?.length)    throw new ApiError(
        404,
        "channel does not exists"
    )

    return res
    .status(200)
    .json( new ApiResponse(
        200,
        channel[0],
        "user channel fetched successfully"
    ))
})

const getWatchHistory = asyncHandler( async (req,res) => {
    const user = await User.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(req.user._id)
            }
        },
        {
            $lookup: {
                from: "videos",
                localField: "watchHistory",
                foreignField: "_id",
                as: "watchHistory",
                pipeline: [
                    {
                        $lookup: {
                            from: "users",
                            localField: "owner",
                            foreignField: "_id",
                            as: "owner",
                            pipeline: [
                                {
                                    $project: {
                                        fullname: 1,
                                        username: 1,
                                        avatar: 1
                                    }
                                }
                            ]
                        }
                    },
                    {
                        $addFields: {
                            owner: {
                                $first: "owner"
                            }
                        }
                    }
                ]
            }
        }
    ])

    return res
    .status(200)
    .json( new ApiResponse(
        200,
        user[0].watchHistory,
        "watch history fetched successfully"
    ))
})

export {
    registerUser,
    loginUser,
    logoutUser,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage,
    getUserChannnelProfile,
    getWatchHistory
}