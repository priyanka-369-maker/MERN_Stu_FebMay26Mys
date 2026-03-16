console.log("Node JS architecture demo");
console.log("1. Script started");

//SetTimeOut
setTimeout(()=>{
    console.log("3. timer callback finished after waiting");
},1000);
console.log("2. Script continued without waiting for timer callback");