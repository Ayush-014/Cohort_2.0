import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.models.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"

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

export {
    registerUser,
}