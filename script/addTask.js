function setElement() {}

function getTask() {
  let task = document.querySelector("#txtinp").value;
}

// function addTask(taskTitle) {}

// showing inputArea
let buttonAdd = document.querySelector("#addButton");

buttonAdd.addEventListener("click", function () {
  document.querySelector(".inputArea").style = "display: flex";
});

let confbutt = document.querySelector("#confbutt");

confbutt.addEventListener("click", function () {
  document.querySelector(".inputArea").style = "display: none";
  getTask();
  document.querySelector("#txtinp").value = "";
});
