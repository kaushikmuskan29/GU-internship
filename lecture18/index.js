import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/connectDb.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(express.json()); // allows us to parse incoming requests:req.body


app.get("/",(req,res)=>{
    res.send("hello expres222s")
})

app.use("/api/auth",authRoutes);


app.listen(PORT,()=>{
    connectDb();
    console.log(`server running on ${PORT}`)
})