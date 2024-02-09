const express=require("express")
const usersModel=require("../models/usersModel")
const router=express.Router()
const bcrypt=require("bcryptjs")

const hashFunction=async(password)=>{
  const salt=await bcrypt.genSalt(10)
  return bcrypt.hash(password,salt)
}

//signup
router.post("/signup",async(req,res)=>{
  let {data} = {"data":req.body}
  let password=data.password
  hashFunction(password).then((hashedPassword)=>{
    data.password=hashedPassword
    console.log(data)
    let userObj=new usersModel(data)
     userObj.save()
  })
  res.json({status:"success"})
})


//signin


module.exports=router