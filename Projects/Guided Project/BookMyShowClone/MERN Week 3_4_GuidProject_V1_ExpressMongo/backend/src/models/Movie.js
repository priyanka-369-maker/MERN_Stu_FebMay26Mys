const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"],
        trim:true,
        index:true,
    },
    genre:{
        type:string,
        required:[true,"Genre is required"],
        trim:true,
        enum:[
            "Action","comedy","Drama","Horror","sci-fi","Romance","Thriller",
        ],
    },
    rating:{
        type:Number,
        required:true,
        min:[1,"Rating must be at least 1"],
        max:[5,"rating must be at most 5"],
        index:true,
    },
    duration:{
        type:Number,
        required:[true,"Duration is required"],
    },
    releaseDate:{
        type:Date,
        required:[true,"Release date is required"],
        index:true,
    },
    poster:{
        type:String,
        default:"",

    },
    language:{
        type:String,
        required:[false,"Language is required"],
        index:true,
    },
    isActive:{
        type:Boolean,
        default:true,
        
    },
},{
        timestamps:true,
    }
);
//compound index
movieSchema.index({ genre:1, rating:-1});
//Text index
movieSchema.index({title:"text"});
//Virtual field
movieSchema.virtual("isReleased").get(function(){
    return this.releaseDate <= new Date();

});
module.exports = mongoose.model("Movie",movieSchema);
