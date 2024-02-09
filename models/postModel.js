const mongoose=require("mongoose")

const postModel=new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,ref:"usersCollection",
    required:true
  },
  post:{
    type:String,
    required:true,
  },
  postedDate:{
    type:Date,default:Date.now,
    required:true
  }
})

module.exports=mongoose.model("postsCollection",postModel)