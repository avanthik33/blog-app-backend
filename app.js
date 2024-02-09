const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const usersRouter=require("./routers/usersRouter")
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://avanthik:avanthik@cluster0.yuxak7x.mongodb.net/blogDb?retryWrites=true&w=majority",{useNewUrlParser:true})


app.use("/user",usersRouter)


app.listen(3000,()=>{
  console.log("server is running")
})