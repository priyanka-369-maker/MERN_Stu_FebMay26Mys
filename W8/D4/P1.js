// Date fundamentals
const mongoose = require("mongoose");
const { type } = require("node:os");
async function main() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/datedb");
        console.log("Connected to Mongodb");

        const Schema = new mongoose.Schema({
            name:String,
            createdAt:{
                type:Date,
                default:Date.now
            }
        });
        const Model = mongoose.model('DateFund',Schema);
        await Model.deleteMany();
        const doc = await Model.create({
            name:"Test"
        });
        console.log("Document:",doc);
    }
    catch(err){
       console.error("Error:",err.message);
    }
    finally{
            await mongoose.disconnect();
            console.log("DB disconnected.");
    }
}
main();