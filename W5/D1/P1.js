// Introduction to node.js
const runtimeName = "Node.js";
//console.log("Introduction to Node.js");
//console.log(`${runtimeName} runs javascript outside the browser`);
const commonUses = [" used for server-side app", "automation scrits can be created"];
//array desctructing
//console.log(commonUses[0]);
//console.log(commonUses[1]);
commonUses.forEach((commonUse,index) =>{
    console.log(`${index+1}.${commonUse}`);
});
