const mongoose=require("mongoose")
const patientSchema=new mongoose.Schema(
    {
        name:String,
        age:String,
        disease:String,
        bloodgroup:String,
        sugarlevel:String
    }
)
module.exports=mongoose.model("diabetes",patientSchema)