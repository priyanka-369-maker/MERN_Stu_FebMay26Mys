//Process.nextTick,Promise microtask & Timer

console.log("1.Start of Script");
//Process.nextTick schedules a callback to run soon after the current syncronous code completes.
process.nextTick(function(){
    console.log("3.process.nextTick callback executed.");
});
//Promise microtask runs after nextTick in NodeJs
Promise.resolve().then(function(){
    console.log("4.Promise microtask executed.");
});
//callback timer runs later
setTimeout(() => {
    console.log("5. Timer callback executed.");
},0);
console.log("2.End of script");