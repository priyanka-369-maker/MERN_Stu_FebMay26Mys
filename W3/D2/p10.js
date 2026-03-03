//Callback function
// Is a function which is passed as an argument to another function.
function greetUser(name, Callback){
    console.log("Hello,", name);
    Callback();
}
greetUser("Priya", function(){
    console.log("Callback function executed");
});