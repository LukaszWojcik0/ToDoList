let button = document.querySelector(".inputArea>img");
let counter = 0;

button.addEventListener("click", function () {
  let task = document.querySelector("#txtinp").value;

  if (task.length > 1) {
    const taskElement = document.createElement("li");
    taskElement.classList.add("list_task");
    taskElement.value = counter;
    taskElement.innerText = task;

    const parent = document.querySelector(".listToDo");
    parent.appendChild(taskElement);

    const deleteMark = document.createElement("img");
    deleteMark.classList.add("task_delete");
    deleteMark.src = "img/list/cross-mark-black.png";
    taskElement.appendChild(deleteMark);

    const confirmMark = document.createElement("img");
    confirmMark.classList.add("task_confirm");

    ++counter;
    document.querySelector(".inputArea").style.display = "none";
  } else {
    alert("Nazwa zadania musi być dłuższa niż 1 znak");
  }
});
