import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.models.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"

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
    if(!username || !email) throw new ApiError(
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

export {
    registerUser,
    loginUser,
    logoutUser
}