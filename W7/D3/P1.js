// Handling Synchronous errors
const express = require("express");
const app = express();
app.get("/",function(req,res){
    res.send("Visit /check?id=10 0r /check without id");
});
app.get("/check",function(req,res,next){
    try{//Synchronous validation check
        if(!req.query.id){
            throw new error ("Query parameter 'id' is required");

        }
        res.json({
            sucess:true,
            id:req.query.id
        });
    }
    catch(error){
        //Forward the error to centralized error middleware
        next(error);
    }
});
//centralized error handling middleware
app.use(function(error,req,res,next){
    res.status(400).json({
        success:false,
        Message:error.message
    });
});
app.listen(4000, function () {
    console.log("Express server running at http://localhost:4000");
});
