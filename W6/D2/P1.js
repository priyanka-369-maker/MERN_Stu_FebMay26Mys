//understanding the event loop
console.log("1. synchronous task started");
//setTimeout schedules a callback for later.
setTimeout(() =>{
    console.log("3. Timer callback executed.");
},0);
console.log("2.Synchronous task finished.");