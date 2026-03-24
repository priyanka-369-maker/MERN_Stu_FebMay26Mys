// How Js handles asynchronous tasks in NodeJs
function fetchReport(callback){
    console.log("Fectching report data...");
    setTimeout(() =>{
        const report = "Monthly report is ready";
        callback(report);
},1000);
}
fetchReport(function(reportMessage){
    console.log(reportMessage);
});
console.log("Application continues to execute further");
