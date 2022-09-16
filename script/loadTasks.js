if (localStorage.getItem("z0") == null) {
  console.log("brak zadań w localstorage");
} else {
  console.log("są zadania w localstorage");
  for (let i = 0; i < counter; i++) {
    // li element
    const taskElement = document.createElement("li");
    taskElement.classList.add("list_task");
    taskElement.classList.add("orderClass" + (counter - counter + i));
    taskElement.value = counter - counter + i;

    const parent = document.querySelector(".listToDo");
    parent.appendChild(taskElement);

    // content of the task
    const taskElement_content = document.createElement("div");
    taskElement_content.classList.add("taskContent");
    taskElement_content.innerText = localStorage.getItem("z" + [i]);

    ///nic

    const elementParent = document.querySelector(
      ".orderClass" + (counter - counter + i)
    );
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

    ///nic
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
  }
}
