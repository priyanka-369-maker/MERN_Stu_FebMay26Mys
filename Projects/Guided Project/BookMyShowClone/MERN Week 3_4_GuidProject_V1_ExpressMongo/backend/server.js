//Load environment variables
require("dotenv").config();
const app = require("./app");
const connectDB = require("./src/config/db");
//Connect to database
connectDB();
//Port configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port`,PORT);
});