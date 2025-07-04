// const express=require("express")
import { conectDb } from "./database/connectDb.js";
import express from "express";
const app=express()
const PORT=3000
require('dotenv').config()

app.use(express.json())

app.get("/hello", ()=>{
    console.log("Hello World")
 })

app.get("/", (req,res)=>{
    res.send("Hello")
 })

app.listen(PORT,async ()=>{
    conectDb();
    console.log(`http://localhost:${PORT}`)
})