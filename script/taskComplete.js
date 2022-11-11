/// adding task to local storage and transfering it to 'completed' tab


function CompleteTask(thisClass) {



    console.log(thisClass)
    // console.log(this.classList)
    let completeMarkClass = thisClass[1];
    console.log("klasa 1" + completeMarkClass)
    let valueNumber = completeMarkClass.slice(5);
    console.log("value po slice" + valueNumber)
    
    
    let task = localStorage.getItem("z"+valueNumber)
    // console.log(task)
    if (localStorage.getItem("complCounter")!=null){
        localStorage.removeItem("complCounter")
    }else{
        let complCounter = 0
    localStorage.setItem("complCounter", complCounter)


    for(let i = 0; i<= complCounter; i++){
        if (localStorage.getItem("c"+i)==null){
            localStorage.setItem("c"+i, task)
        }
    }

    }

    


    ///// DEL func
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
///////
    
    
    
    
}

// localStorage.setItem("anytask", "a no są i co");

// localStorage.clear();
