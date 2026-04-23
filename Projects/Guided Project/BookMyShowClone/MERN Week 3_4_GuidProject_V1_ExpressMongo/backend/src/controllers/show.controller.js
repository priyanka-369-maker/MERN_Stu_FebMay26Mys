const showService = require("../services/show.service");
//Create Show: Admin
exports.createShow = async (req,res,next)=>{
    try{
        const show = await showService.createShow(req.body);
        res.staus(201).json({
            success:true,
            meassage:"Show created succesfully",
            data:show,
        });
        }
        catch(error){
            next(error);
        }
    };
        //Get shows
        exports.getShows = async (req,res,next)=>{
    try{
        const shows = await showService.getShows(req.query);
        res.staus(200).json({
            success:true,
            meassage:"Shows fetched succesfully",
            data:shows,
        });
        }
        catch(error){
            next(error);
        }
};
//Get single show
        exports.getShowById = async (req,res,next)=>{
    try{
        const show = await showService.getShowById(req.params.id);
        res.staus(200).json({
            success:true,
            meassage:"Shows fetched succesfully",
            data:show,
        });
        }
        catch(error){
            next(error);
        }
};
//Update shows-admin
        exports.updateShow = async (req,res,next)=>{
    try{
        const show = await showService.updateShow(req.params.id,req.body);
        res.staus(200).json({
            success:true,
            meassage:"Show updated succesfully",
            data:show,
        });
        }
        catch(error){
            next(error);
        }
};
//delete show-admin
        exports.deleteShow = async (req,res,next)=>{
    try{
        await showService.deleteShow(req.params.id);
        res.staus(200).json({
            success:true,
            meassage:"Show deleted succesfully",
            
        });
        }
        catch(error){
            next(error);
        }
};
