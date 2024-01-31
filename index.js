const form = document.querySelector("form");
const inputText = document.querySelector("#inputText");

form.addEventListener("submit",(e)=>{
     e.preventDefault();
    if(inputText.value == ""){
       const p = document.querySelector("p");
       p.innerHTML= "Invaild Please Enter Something"
       setTimeout(() => {
          p.innerHTML = ""
       }, 2000);
    }
    else{
         const todo =  document.querySelector(".todo-list");
         const li = document.createElement("li");
         const span = document.createElement("span");
         span.innerHTML = inputText.value;
         const button = document.createElement("button");
         button.innerHTML = "✓";
         button.classList.add("done");
         li.append(span,button);
         todo.append(li);
    
        const completedTask = document.querySelector(".completed-tasks");
        const li2 = document.createElement("li");
        let span2 = document.createElement("span");
        let button2 = document.createElement("button");
        button2.classList.add("remove")
            li.addEventListener("click",(e)=>{
                if(e.target === button){
                 span2.innerHTML = span.innerHTML; 
                 button2.innerHTML = "x"
                 li2.append(span2,button2);
                 completedTask.append(li2);
                 li.innerHTML = "";
                }
            });

            li2.addEventListener("click",(e)=>{
                  li2.innerHTML = ""
            })
            inputText.value = '';

    }
})

