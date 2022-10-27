let taskLabel = document.querySelector("#listIcon");
let completedLabel = document.querySelector("#completedIcon")


taskLabel.addEventListener("click",function(){
    taskLabel.src =  ("img/top icons/list/listActive_lightmode.png")
    completedLabel.src = ("img/top icons/done/doneNotactive_lightmode.png") 
    document.querySelector("#mainbox_list").style.display= "flex";
    document.querySelector("#mainbox_completed").style.display= "none";
    document.querySelector("#mainbox_icons_completedbox").style.backgroundColor = "#e6e6e6";
    document.querySelector("#mainbox_icons_iconbox").style.backgroundColor = "#f8f8f8";
    document.querySelector("#mainbox_icons_iconbox").style.borderBottom = "0px solid #c5c5c5";
    document.querySelector("#mainbox_icons_completedbox").style.borderBottom = "2px solid #c5c5c5";
    document.querySelector("#mainbox_icons_iconbox").style.borderRight = "0px solid #c5c5c5";
    document.querySelector("#mainbox_icons_completedbox").style.borderLeft = "2px solid #c5c5c5";
})

completedLabel.addEventListener("click",function(){
    taskLabel.src = ("img/top icons/list/listNotactive_lightmode.png") 
    completedLabel.src = ("img/top icons/done/doneActive_lightmode.png")
    document.querySelector("#mainbox_list").style.display= "none";
    document.querySelector("#mainbox_completed").style.display= "flex";
    document.querySelector("#mainbox_icons_completedbox").style.backgroundColor = "#f8f8f8";
    document.querySelector("#mainbox_icons_iconbox").style.backgroundColor = "#e6e6e6";;
    document.querySelector("#mainbox_icons_iconbox").style.borderBottom = "2px solid #c5c5c5";
    document.querySelector("#mainbox_icons_completedbox").style.borderBottom = "0px solid #c5c5c5";
    document.querySelector("#mainbox_icons_iconbox").style.borderRight = "2px solid #c5c5c5";
    document.querySelector("#mainbox_icons_completedbox").style.borderLeft = "0px solid #c5c5c5";

})