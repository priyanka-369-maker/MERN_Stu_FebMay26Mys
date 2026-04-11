//Indexing for performance improvement
const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    email:{type:String, index:true},
    username:{type:String, unique:true},
    role: String,
    createdAt: Date
});
// Compound index
//query filter by role and sort by createdAt
employeeSchema.index({role:1,createdat:-1});
const Employee = mongoose.model("IndexedEmployee",employeeSchema);
console.log("Compound index: ");
console.log("{role:1,createdAt:-1}");
