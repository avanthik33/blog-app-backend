const express=require("express")
const postModel=require("../models/postModel")
const router=express.Router()

router.post("/addpost",async(req,res)=>{
  let data=req.body
  let postModelObj=new postModel(data) 
  await postModelObj.save()
  res.json({status:"success"})
})

module.exports=router