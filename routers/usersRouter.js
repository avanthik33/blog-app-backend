const express=require("express")
const usersModel=require("../models/usersModel")
const router=express.Router()

router.post("/signup",async(req,res)=>{
  let data=req.body
  let modelObj1=new usersModel(data)
  await modelObj1.save()
  res.json({status:"success"})
})

module.exports=router