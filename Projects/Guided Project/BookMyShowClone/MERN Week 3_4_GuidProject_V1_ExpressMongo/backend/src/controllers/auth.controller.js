const authService = require("../services/auth.service");

//Register
exports.register = async (req,res,next)=>{
    try{
        const result =  await authService.registerUser(req.body);
        res.status(201).json({
            success:true,
            message:"User register OTP sent",
            data:result
        });
    }
    catch(error){
        next(error);
    }
};

//verify otp
exports.verifyOTP = async (req,res,next)=>{
    try{
        await authService.verifyOTP(req.body.email,req.body.otp);
        res.status(200).json({
            success:true,
            message:"OTP verified succesfully"
        });
    }
    catch(error){
        next(error);
    }
};

//Login
exports.login = async(req,res,next)=>{
    try{
        const result = await authService.loginUser(req.body);
        res.status(200).json({
            success:true,
            message:"Login successfully",
            data:result
        });
    }
    catch(error){
        next(error);
    }
};