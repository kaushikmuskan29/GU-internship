const express=require("express")
const app=express()
const PORT=3000
require("dotenv").config()
const path = require("path")

app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
 
// routes 

const userRouter = require("./routes/user.routes")
const connectToDB = require("./db/connection")
app.use("/user", userRouter)



app.listen(PORT,async ()=>{
    await connectToDB();
    console.log(`http://localhost:${PORT}`)
})