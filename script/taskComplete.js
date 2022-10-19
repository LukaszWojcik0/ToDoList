/// adding task to local storage and transfering it to 'completed' tab
let complCounter = 0

function CompleteTask() {



    if (localStorage.getItem("complCounter")!=null){
        localStorage.removeItem("complCounter")
    }
    console.log(this.classList)
    let completeMarkClass = this.classList[1];
    let valueNumber = completeMarkClass.slice(5);
    let childLi = document.querySelector(".orderClass" + valueNumber);
    
    let task = localStorage.getItem("z"+valueNumber)
    // console.log(task)


    localStorage.setItem("complCounter", complCounter)


    for(let i = 0; i<= complCounter; i++){
        if (localStorage.getItem("c"+i)==null){
            localStorage.setItem("c"+i, task)
        }
    }

    
}

// localStorage.setItem("anytask", "a no są i co");

// localStorage.clear();
