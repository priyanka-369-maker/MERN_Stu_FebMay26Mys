
//virtual fields in mongoose
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: String,
    lastName: String,
    email: String
},{
    //this allows virtuals to appear when converting documents to JSON or objects
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
});
//A virtual field is not stored on MongoDB //It is computed dynamically from existing stored fields
userSchema.virtual("fullname").get(function(){
    return this.firstname + " " + this.lastName;
});

const User = mongoose.model("VirtualUser", userSchema);

// Create Mongoose document
const user = new User({
    firstname: "Priya",
    lastName: "Shivaram",
    email: "p@p.com"
});

console.log("Hello,", user.fullname);
console.log("Object output includes virtual", user.toObject());