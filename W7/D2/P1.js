// Routing nested routes
// "/" base url
// "/api/users"
const express = require("express");
const app = express();
//"/api/users" /create /delete  /update /:id
// Router objects help organize route Groups
const apiRouter = express.Router();
apiRouter.get("/users",function(req,res){
    res.json({
        route:"/api/users",
        message:"users route inside api router"
    });
});
apiRouter.get("/orders",function(req,res){
    res.json({
        route:"/api/orders",
        message:"users route inside api router"
    });
});
//mount the router under the/api base path
app.use("/api",apiRouter);
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});
//****new router *****
// products router (handles /api/products/...)

const productRouter = express.Router();
// /api/products   ->create product
productRouter.post("/",(req,res) => {
res.json({
    route:"/api/products",
    message:"Create products",
});
});
// /api/products:id   ->delete product
productRouter.delete("/:id",(req,res) => {
res.json({
    route:`/api/products/${req.params.id}`,
    message:"Delete products",
});
});
//mount products router under /api/products
apiRouter.use("/products",productRouter);
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});


