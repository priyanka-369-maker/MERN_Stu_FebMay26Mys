//Removing EventEmitter listeners
const EventEmitter= require("events");
const jobEmitter = new EventEmitter();
function showJobProgress(Status){
    console.log("Job Status: ",status);
}
//add listener
jobEmitter.on("progress",showJobProgress);
//Emit the event
jobEmitter.emit("progress","50% completed");
//Remove listener
jobEmitter.off("progress",showJobProgress);
//Emit the event
jobEmitter.emit("progress","100% completed");