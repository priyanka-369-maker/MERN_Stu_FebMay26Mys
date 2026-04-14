// Combined example of virtual, index, filter,select,sort ,lean
const mongoose = require("mongoose");
async function demo() {
    try{
        await mongoose.connect("mongodb://localhost:27017/abcmern");
         console.log("MongoDB connected successfully");

        // const productSchema = new mongoose.Schema({
        //     name:String,
        //     price:Number,
        //     category:String,
        //     description:String,
        //     stock:Number,
        //     tag:String
        // });

        const userSchema = new mongoose.Schema({
            firstName:String,
            lastName:String,
            email:{type:String,index:true},
            username:{type:String,unique:true},
            role:String,
            createdAt:Date,
            tag:String
        },
        {
            toJSON:{virtuals:true},
            toObject:{virtuals:true}
        });

        // Compound index
        //Query filter by role and sort by createdAt
        userSchema.index({role:1,createdAt:-1});

        // A virtual field is not stored on MongoDB
        //It is computed dynamically from existing stored fields
        userSchema.virtual("fullname").get(function(){
           return this.firstName + " " + this.lastName;
        });
        const User = mongoose.models.PerformanceUser || mongoose.model("PerformanceUser",userSchema);
        await User.deleteMany({tag:"demo-example"});
        await User.deleteMany({tag:"demo-example1"});
        await User.create([
            {
                firstName: "roopa",
                lastName: "Shivaram",
                email: "r@r.com",
                username: "rs123",
                role: "user",
                createdAt: new Date("2026-04-11"),
                tag: "demo-example"
            },
            {
                firstName: "Priya",
                lastName: "Shivaram",
                email: "p@s.com",
                username: "ps123",
                role: "admin",
                createdAt: new Date("2026-04-9"),
                tag: "demo-example"
            },
            {
                firstName: "arpitha",
                lastName: "gowda",
                email: "a@g.com",
                username: "ag123",
                role: "user",
                createdAt: new Date("2026-04-02"),
                tag: "demo-example"
            }
        ]);

        // filter, select, sort, lean
        const users = await User.find({tag:"demo-example"})
                        .select("firstName email role createdAt")
                        .sort({createdAt:-1})
                        .limit(2)
                        .lean();
        console.log("Optimized user query result: ",users);
        const oneUser = await User.findOne({email:"p@s.com",tag:"demo-example"});
        console.log("Vitrual fullname: ",oneUser.fullname);

        await mongoose.connection.close();
        console.log("connection closed");
    }
    catch(error){
        console.log(" Demo error:",error.message);
    }
}
demo();