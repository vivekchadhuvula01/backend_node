
const asyncHandler = (requestHandler) => {
    return (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next))  
        .catch((err) => {next(err)})
    }
}

 //  => asyncHandler is a utility function and higher order function accepst a function and executes in aerrorHandling method using Javascript Promises and also Using Trycatch method 

/*
const asyncHandler = (fn) => async  (req,res,next) => {
    try {
        await fn(req,res,next);
        
    } catch (error) {
        res.status(error.code ||500).json({
            success:false,
            message:error.messagep
        })
    }
}
*/

export {asyncHandler}
