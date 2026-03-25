//Introduction to the NodeJS File System (fs) built-in module
const fs = require("fs");
const fsPromises = require("fs/promises");
//callback
console.log("Type of fs.readfile: ", typeof fs.readFile);
console.log("Type of fs.writefile: ", typeof fs.writeFile);
//fs/Promises
console.log("Type of fsPromises.readfile: ", typeof fsPromises.readFile);
console.log("Type of fsPromises.writefile: ", typeof fsPromises.writeFile);