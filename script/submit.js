//// Adding task to list

let button = document.querySelector(".inputArea>img");
let counter = 0;

function taskSubmit() {
  let task = document.querySelector("#txtinp").value;

  if (task.length > 1) {
    // li element
    const taskElement = document.createElement("li");
    taskElement.classList.add("list_task");
    taskElement.classList.add("orderClass" + counter);
    taskElement.value = counter;

    const parent = document.querySelector(".listToDo");
    parent.appendChild(taskElement);

    // content of the task
    const taskElement_content = document.createElement("div");
    taskElement_content.classList.add("taskContent");
    taskElement_content.innerText = task;

    const elementParent = document.querySelector(".orderClass" + counter);
    elementParent.appendChild(taskElement_content);

    // icons delete and confirm
    const deleteMark = document.createElement("img");
    deleteMark.classList.add("task_delete");
    deleteMark.src = "img/list/cross-mark-black.png";
    taskElement.appendChild(deleteMark);

    const confirmMark = document.createElement("img");
    confirmMark.classList.add("task_confirm");
    confirmMark.src = "img/list/check-mark-black.png";
    taskElement.appendChild(confirmMark);

    ++counter;

    document.querySelector(".inputArea").style.display = "none";

    const deleteIcons = document.querySelectorAll(".task_delete");

    deleteIcons.forEach((icon) => {
      icon.addEventListener("mouseover", function () {
        icon.src = "img/list/cross-mark-red.png";
      });
      icon.addEventListener("mouseout", function () {
        icon.src = "img/list/cross-mark-black.png";
      });
    });

    const completeIcons = document.querySelectorAll(".task_confirm");

    completeIcons.forEach((icon) => {
      icon.addEventListener("mouseover", function () {
        icon.src = "img/list/check-mark-green.png";
      });
      icon.addEventListener("mouseout", function () {
        icon.src = "img/list/check-mark-black.png";
      });
    });
  } else {
    alert("Nazwa zadania musi być dłuższa niż 1 znak");
  }
}

button.addEventListener("click", taskSubmit);

const addTask = document.querySelector("#mainbox_list > img");
addTask.addEventListener("click", function () {
  window.addEventListener("keydown", function (e) {
    if (
      e.key === "Enter" &&
      document.querySelector(".inputArea").style.display == "flex"
    ) {
      taskSubmit();
    }
  });
});
