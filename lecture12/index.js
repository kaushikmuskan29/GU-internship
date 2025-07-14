const express = require("express");
const app = express();
const path = require("path");
const PORT = 4000;

app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.use(()=>{
//   console.log("generic middleware"); // req will stuck here
// })

app.use((req,res,next)=>{
  console.log("generic middleware");
  next() // i am telling req that it go forward(down)
})

app.use("/user",(req,res,next)=>{
  console.log("path specific middleware for '/user'");
  next()
})

app.get("/contact",(req,res)=>{
  console.log("api hit");
  res.redirect("/contact.html")
})

app.get("/user",(req,res)=>{
  // res.send("welcome to user")
  return res.json({name:"shubham"})
  res.json({name:"shubham"}) // this will not work as function returned
})

app.post("/user",(req,res)=>{
  console.log("form submitted");
  console.log(req.body);
  res.send("form submited successfully");
})

app.get("/",(req,res)=>{
  res.send("server is running");;
})

app.get("/test",(req,res)=>{
  console.log(req.query);
  // res.status(201).send("ok")
  res.status(201).json({
    data:req.query
  })
})

app.listen(PORT,()=>{
  console.log(`server is live on http://localhost:${PORT}`);
})