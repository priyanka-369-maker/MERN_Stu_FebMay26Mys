//Introduction to callback function
function greetUser(name,callback){
    console.log("Hello ,"+name);
    //The callback fuction is executed only after the execution of the current fuction
    callback();
}
function showCompletionMessage(){
    console.log("The greeting task is complete.");
}
greetUser("Priya",showCompletionMessage);
