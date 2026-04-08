//Middleware for req log
function loggerMiddleWare(req,res,next){
    console.log(`${req.method}${req.originalUrl}`);
    next();
}
module.exports = loggerMiddleWare;
//Task: write the log to a file along with timestamp with both req & res