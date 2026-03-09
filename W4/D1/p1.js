// try catch basics
const error = document.getElementById("error");

try{
    console.log("Trying to access undefined variable");
    error.textContent = "Trying to access undefined variable";
    
    console.log(notDefined);
}
catch(err){
    console.log("Error caught", err.name, "-", err.message);
}

console.log("Program execution continues");

//json parsing error
 let jsonText = "{ json }";
 try{
    let data = JSON.parse(jsonText);
    console.log(data);
 }
 catch(err){
    console.log("json parse error:",err.message);
 }

 try{
    let num = 10;
    num();
 }
 catch(err){
    console.log("Caught error:",err.name);
 }