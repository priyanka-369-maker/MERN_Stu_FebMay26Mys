//Inspecting request details in an HTTP server

const http = require("http");
const server = http.createServer(function(req,res){
    //writehead() sets the response status code and headers
    res.writeHead(200,{"Content-Type":"text/plain"});
    //end() send the response body and  closes the response
    //req.method tells the http method,GET & POST
    res.end("Method:"+req.method+"\nURL:"+req.url);
});
server.listen(3001,function(){
    console.log("Server is running at http://localhost:3001");
});