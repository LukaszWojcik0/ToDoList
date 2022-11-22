if (localStorage.getItem("c0") == null) {
    console.log("brak zakońcocznych zadań w localstorage");
}else {
    console.log("są zakończone zadania w localstorage");
    for (let i = 0; i < complCounter; i++){
        //li element
        const complElement = document.createElement("li");
        complElement.classList.add("list_compl");
        complElement.classList.add("orderClass" + i);
        complElement.value = i;

        let parent = document.querySelector(".listDone")
        parent.appendChild(complElement);

        //
        const complElement_content = document.createElement("div");
        complElement_content.classList.add("taskContent");
        complElement_content.innerText = localStorage.getItem("c"+[i]);

        const elementParent = document.querySelector(
            ".orderClass" + [i]
          );
          elementParent.appendChild(complElement_content);


    }
}