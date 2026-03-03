//Immediately Invoked Function Expression(IIFE)
// w/o parameter
(function(){
    console.log("Basic IIFE executed Immediately");
})();
// with parameter
(function(appName, version){
    console.log("App:",appName,"version: ", version);
})("NodeJs","V22.22.0");
//with return value
const result = (function(){
    const a= 10, b = 20;
    return a+b;
})();
console.log("Sum is: ",result);
