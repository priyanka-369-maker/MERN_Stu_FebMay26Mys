//Basics of NodeJS modules
const moduleTitle = "NodeJS module basics";
function describeModule(){
    console.log("This file is its own module");
    console.log("Title:",moduleTitle);
    console.log("local values stay inside this file unless exported");
}
describeModule(); //invoking the function

