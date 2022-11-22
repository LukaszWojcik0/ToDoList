function delFunc() {
    let childLi = document.querySelector(".orderClass" + valueNumber);
    let parent = document.querySelector(".listToDo");
    parent.removeChild(childLi);
    localStorage.removeItem("z" + valueNumber); 
    let Oldcounter = localStorage.getItem("counter");
    counter = Oldcounter - 1;
    localStorage.removeItem("counter");
    localStorage.setItem("counter", counter);
    
    for (let i = parseFloat(valueNumber); i <= parseFloat(counter); i++) {
        console.log("poczatek zmian");
        console.log(localStorage.getItem("z" + (i + 1)));
        if (localStorage.getItem("z" + (i + 1)) != null) {
            let tempStorage = localStorage.getItem("z" + (i + 1));
            localStorage.setItem("z" + i, tempStorage);
            console.log("zmiana z" + i + " na z" + (i + 1));
      localStorage.removeItem("z" + (i + 1));
    }
    
    
  for (i = 0; i <= counter; i++) {
    if (document.querySelector(".orderClass" + i) == null) {
      console.log(i + " null");

      for (j = i; j <= counter; j++) {
        
        document.querySelector(".orderClass" + (j + 1)).value = j;
        document
          .querySelector(".orderClass" + (j + 1))
          .classList.add("orderClass" + j);
        document
          .querySelector(".orderClass" + (j + 1))
          .classList.remove("orderClass" + (j + 1));
          
          document.querySelector(".del-"+(j+1)).classList.add("del-"+j)
          document.querySelector(".del-"+(j+1)).classList.remove("del-"+(j+1))
          
          document.querySelector(".conf-"+(j+1)).classList.add("conf-"+j)
          document.querySelector(".conf-"+(j+1)).classList.remove("conf-"+(j+1))
        }
    } else {
        console.log(document.querySelector(".orderClass" + i));
        console.log(i + " istnieje");
    }
}

let listparrent = document.querySelector(".listToDo");
listparrent.innerHTML = "";
LoadTasks();

}
}