const express=require("express")
const postModel=require("../models/postModel")
const router=express.Router()

router.post("/addpost",async(req,res)=>{
  let data=req.body
  let postModelObj=new postModel(data) 
  await postModelObj.save()
  res.json({status:"success"})
})


router.post("/viewall",async(req,res)=>{
  let data=await postModel.find()
  .populate("userId","name mobileNo email -_id")
  .exec()

  res.json(data)
})

module.exports=router