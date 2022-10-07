let taskLabel = document.querySelector("#listIcon");
let completedLabel = document.querySelector("#completedIcon")


taskLabel.addEventListener("click",function(){
    taskLabel.src =  ("img/top icons/list/listActive_lightmode.png")
    completedLabel.src = ("img/top icons/done/doneNotactive_lightmode.png") 


})

completedLabel.addEventListener("click",function(){
    taskLabel.src = ("img/top icons/list/listNotactive_lightmode.png") 
    completedLabel.src = ("img/top icons/done/doneActive_lightmode.png")


})