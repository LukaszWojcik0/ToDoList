function DelteTask() {
  //   let parent = document.querySelector(".orderClass" + this.classList[1]);
  let deleteMarkClass = this.classList[1];
  console.log(deleteMarkClass);
  let valueNumber = deleteMarkClass.slice(4);
  console.log(valueNumber);
  let childLi = document.querySelector(".orderClass" + valueNumber);
  console.log(childLi);
  let parent = document.querySelector(".listToDo");
  //   valueNumber.removeChild(document.querySelector("." + this.classList[1]));
  parent.removeChild(childLi);
  localStorage.removeItem("z" + valueNumber);
  let counter = localStorage.getItem("counter");
  console.log(counter);
  counter = counter - 1;  
  console.log(counter);
  localStorage.removeItem("counter");
  localStorage.setItem("counter", counter);


  for (i = 0; i<= counter; i++){
    if (document.querySelector(".orderClass" + i) == null){
      console.log( i + " null")
      
      for (j=i; j<= counter;j++){
        document.querySelector(".orderClass" + (j+1)).value = j
        document.querySelector(".orderClass" + (j+1)).classList.add(("orderClass" + j))
        document.querySelector(".orderClass" + (j+1)).classList.remove(("orderClass" + (j+1)))
      }
    }else{
      console.log(document.querySelector(".orderClass" + i))
      console.log(i + " istnieje")
    }
  }

}
