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
    let userObj=new usersModel(data)
     userObj.save()
  })
  res.json({status:"success"})
})


//signin
router.post("/signin",async(req,res)=>{
  let email=req.body.email
  let userPassword=req.body.password
  let data=await usersModel.findOne({email:email})
  if(!data){
    return(
      res.json({status:"no user"})
    )
  }
  let dbPassword=data.password
  let match=await bcrypt.compare(userPassword,dbPassword)
  if(!match){
    return(
      res.json({status:"password is not correct"})
    )
  }
  res.json(data)
})

module.exports=router