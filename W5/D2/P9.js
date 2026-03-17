//Promise states: pending, fullfilled, rejected
const fullfilledPromise = new Promise(function(resolve){
    console.log("fullfilledPromise is pending");
    setTimeout(function(){
        resolve("fulfilledPromise is fulfilled.");
    },1000);
});
const rejectedPromise = new Promise(function(resolve,reject){
    console.log("rejectedPromise is pending.");
    setTimeout(function(){
        reject("rejectedPromise is rejected.");
    },1500);
});
fullfilledPromise.then(function(message){
    console.log(message);
});
rejectedPromise.catch(function(message){
    console.log(message);
});