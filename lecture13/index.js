const express=require('express');
const {v4:uuidv4}=require ('uuid')
const path =require('path');
const app=express()
const PORT=4000

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

let TODOS=[
    // {task:"this is task 1",
    //     completed:false
    // }
]

app.post("/add-todo",(req,res)=>{
    console.log(req.body)
    const task=req.body.task
    TODOS.push({task:task,completed:false,id:uuidv4()})
    res.status(201).json({TODOS})
})

app.delete("/todo/:id", (req,res)=>{
    const id = req.params.id;
    console.log(id)
    TODOS = TODOS.filter((todo)=>{
        return todo.id != id;
    })
    res.status(200).json({TODOS})
})

app.put("/todo/:id", (req, res)=>{
    const id = req.params.id;
    TODOS = TODOS.map((todo)=>{
        if(todo.id == id){
            return {
                ...todo,
                completed:!(todo.completed)
            }
        }
        return todo;
    })
    res.status(200).json({TODOS})
})

app.delete("/clear-complete",(req,res)=>{
    TODOS = TODOS.filter((todo)=>{
        return todo.completed==false;
    })
    res.status(200).json({TODOS});
})

app.get("/todo/filter", (req,res)=>{
    const filter = req.query.filter;
    if(filter == "active"){
        const filteredTodos = TODOS.filter((todo)=>{
            return todo.completed == false
        })
        return res.status(200).json({TODOS:filteredTodos})
    }
    if(filter == "completed"){
        const filteredTodos = TODOS.filter((todo)=>{
            return todo.completed == true
        })
        return res.status(200).json({TODOS:filteredTodos})
    }
    res.status(200).json({TODOS})
})

app.get("/all-todos",(req,res)=>{
    res.status(200).json({TODOS})
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})