//grtElementById
// console.log("document object:", document);
//console.log("page title:", document.title);

//const heading = document.getElementById("mainHeading");
//console.log("heading text:", heading.textContent);

//getElementByClassName
const info =document.getElementsByClassName("info");
const run = document.getElementById("run");


//getelementbytagname
const spanTag = document.getElementsByTagName("span");
run.addEventListener("click",function(){
    for(let i=0; i<info.length; i++){
        console.log(info[i].textContent);
        info[i].computedStyleMap.color = "blue";
    }
    for(let i=0; i<spanTag.length; i++){
        spanTag[i].style.backgroundColor ="lightgreen";
    }
    //Query selector: returns the first elements matching a css selector    

const mainFirstHeading = document.querySelector(".mainHeading");
mainFirstHeading.style.color = "red";
});
//Query selector all:returns all element matching the selector
const task = document.querySelectorAll(".task");
//task.style.color = "purple";
task.forEach(function(task){
task.style.color = "purple";
})

