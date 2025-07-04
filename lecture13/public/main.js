const btnConatiner = document.getElementById("btn-container")
const container = document.getElementById("container")
const clearBtn = document.getElementById("clear")

clearBtn.addEventListener("click", async ()=>{
    let res = await axios.delete("http://localhost:4000/clear-complete")
    rendertodos(res.data.TODOS)
})

container.addEventListener("click", async (e)=>{
    console.log(e.target)
    if(e.target.id == "delete"){
        const id = e.target.parentElement.id;
        const res = await axios.delete(`http://localhost:4000/todo/${id}`)
        rendertodos(res.data.TODOS)
        return;
    }
    if(e.target.id == "complete"){
        const id = e.target.parentElement.id;
        const res = await axios.put(`http://localhost:4000/todo/${id}`)
        rendertodos(res.data.TODOS)
        return;
    }
})

async function filtertodos(filter){
    let res = await axios.get("http://localhost:4000/todo/filter", {
        params:{
            filter : filter}
    });
    rendertodos(res.data.TODOS)
}

btnConatiner.addEventListener("click", (e) =>{
    if(e.target.id == "active" || e.target.id == "all" || e.target.id == "completed"){
        for(let btn of btnConatiner.children){
            btn.classList.remove("bg-green-500")
            btn.classList.remove("text-white")
        };
        e.target.classList.add("bg-green-500");
        e.target.classList.add("text-white");
    }
    if(e.target.id == "active"){
        filtertodos("active")
    }
    else if(e.target.id == "completed"){
        filtertodos("completed")
    }
    else if(e.target.id == "all"){
        filtertodos("all")
    }
})

const form=document.getElementById("toDo")
form.addEventListener("submit", async (e) =>{
    e.preventDefault()
    const tasktext=e.target.children[0].value
    if(tasktext.trim().length == 0){
        alert("please enter a valid task")
    }
    let response = await axios.post("http://localhost:4000/add-todo", {task:tasktext})
    e.target.children[0].value=""
    rendertodos(response.data.TODOS)
})


function rendertodos(todos){
    container.innerHTML=""
    for(let todo of todos){
        let div=document.createElement("div")
        div.className="flex w-[70%] flex-grow border border-gray-300 justify-between border p-2 rounded-md mx-auto mt-2 "
        div.innerHTML=`${todo.task} <div id= ${todo.id} class="flex gap-2">
        <button id="complete" class="bg-green-500 border text-white px-3 py-1 rounded ">${todo.completed?"Undo":"Complete"}</button>
        <button id="delete"class="bg-red-500 border text-white px-3 py-1 rounded ">Delete</button>
         </div>`
        container.appendChild(div)

    }
}
async function getalltodos(){
    let response = await axios.get("http://localhost:4000/all-todos")
    rendertodos(response.data.TODOS)
}

getalltodos()