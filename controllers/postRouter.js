const express=require("express")
const postModel=require("../model/postModel")
const router=express.Router()

router.post("/post",async(req,res)=>{
    
    let data=req.body
    let post=new postModel(data)
    let result=await post.save()
    res.json(
        {status:"success"}
    )
})
module.exports=router
