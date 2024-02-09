const mongoose=require("mongoose")
const userSchema=new mongoose.Schema(
    {
        name:String,
        age:String,
        mobileno:String,
        adddress:String,
        pincode:String,
        email:String,
        password:String

    }
)
module.exports=mongoose.model("user",userSchema)