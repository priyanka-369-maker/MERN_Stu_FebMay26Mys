//Understanding path module and JSON module
const path = require("path");
//JSON is loaded as a normal JS Object in CommonJS
const appConfig = require("./support/app-config.json");
console.log("__dirname",__dirname);
console.log("__filename",__filename);
console.log("Application name: ",appConfig.appName);
console.log("Environment: ",appConfig.environment);
//join(",") is to remove square braces on output
console.log("Features: ",appConfig.features.join(", "));