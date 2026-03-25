// Reading  and writing files asynchronously with callbacks
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname,"async-note.txt");
//to write to a file
fs.writeFile(filePath,"This is written asynchronously using writeFile().",
    function(writeError){
        if(writeError){
            console.log("Write error: ", writeError.message);
            return;
        }
        console.log("File written synchronously.");
    }
);
fs.appendFile(filePath,"This is written asynchronously using writeFile().",
    function(writeError){
        if(writeError){
            console.log("Write error: ", writeError.message);
            return;
        }
        console.log("File content appended.");
    }
);
const content = fs.readFile(filePath,"utf-8",function(readError,content){
    if(readError){
    console.log("read error: ",readError.message);
    return;
}
   console.log(content);
}
);
console.log("Script continues while file operation are in progress.");

