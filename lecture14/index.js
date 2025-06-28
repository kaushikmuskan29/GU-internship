const express=require('express');
const path =require('path');
const app=express()
const PORT=4000
require('dotenv').config()
const mongoose = require('mongoose')

app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("DB connected");
}).catch((error)=>{
    console.log(error)
})

app.get("/users", async (req,res)=>{
    try{
        let users = await User.find();
        res.status(200).json({users})
    } catch(error){
        console.log(error)
        res.status(400).json({message:error.message})
    }
})

app.get("/update/:id", async (req,res)=>{
    try{
        const id = req.params.id
        await User.updateOne({id:id, name:"Muskan Kaushik"}) // find a user by _id and update the name to muskan kaushik 
        res.status(400).json({message:"User updated Successfully"})
    }catch(error){

    }
})
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        trim : true,
        unique:true
    },
    age:{
        type:Number,
        min:0,
        max:125
    },
    available:{
        type:Boolean,
        default:false
    },
    arr:[
        {
            type:String
        }
    ]
})

const User = mongoose.model("User", userSchema)
app.get("/create", async(req,res)=>{
    try{
    let newUser = await User.create({
        name : "muskan",
        email: "muskan@gmail.com",
        arr : ["hi", "hello"]
    })
    console.log(newUser)
    res.json({newUser})
    } catch(error){
        res.status(400).json({message:error.message});
        console.log(error)
    }
})

// console.log(process.env.DATABASE_URL)

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})