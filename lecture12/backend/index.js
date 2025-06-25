const express = require("express")
const app = express()
const path = require("path")
const PORT = 4000

app.use(express.static(path.join(__dirname,"public")))

app.use(express.urlencoded({extended:true}))

app.use(express.json())

// app.use (()=>{
//     console.log("generic middleware")
// })

app.use ((req,res,next)=>{
    console.log("generic middleware")
    next() // i am telling request that it go forward
})

app.get("/test", (req,res)=>{
    console.log(req.query)
    // res.status(201).send("ok")
    res.status(201).json({
        data:req.query
    })
})

app.use ("/user",(req,res,next)=>{
    console.log("path specific middleware for '/user'")
    next() 
})

app.get("/", (req, res)=>{
    res.send("server is running")
})

app.get("/user", (req, res)=>{
    // res.send("sahil bewkooof")
    return res.json("sahil bewkooof")
     res.json("sahil bewkooof") //this will not work as function returned
})


app.get("/contact", (req, res)=>{
    console.log("api hit")
    res.redirect("/contact.html")
})

// app.get("/user", (req, res)=>{
//     // res.send("hieeeeeeeeeeeee")
//     res.json("hieeeeeeeeeeeee")
// })
app.post("/user", (req,res)=>{
    console.log("Form submitted")
    console.log(req.body)
    res.send("Form submitted successfully!")
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})