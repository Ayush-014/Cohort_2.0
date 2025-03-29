const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}

export {asyncHandler}

//this is a higher-order function
// const asyncHandler = (fnx) => async (req,res,next) => {
//     try {
//         await fnx(req,res,next)
//     } catch(err) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }