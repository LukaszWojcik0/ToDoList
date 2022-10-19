let taskLabel = document.querySelector("#listIcon");
let completedLabel = document.querySelector("#completedIcon")


taskLabel.addEventListener("click",function(){
    taskLabel.src =  ("img/top icons/list/listActive_lightmode.png")
    completedLabel.src = ("img/top icons/done/doneNotactive_lightmode.png") 
    document.querySelector("#mainbox_list").style.display= "flex";
    document.querySelector("#mainbox_completed").style.display= "none";
    document.querySelector("#mainbox_icons_completedbox").style
    document.querySelector("#mainbox_icons_iconbox").style
})

completedLabel.addEventListener("click",function(){
    taskLabel.src = ("img/top icons/list/listNotactive_lightmode.png") 
    completedLabel.src = ("img/top icons/done/doneActive_lightmode.png")
    document.querySelector("#mainbox_list").style.display= "none";
    document.querySelector("#mainbox_completed").style.display= "flex";

})