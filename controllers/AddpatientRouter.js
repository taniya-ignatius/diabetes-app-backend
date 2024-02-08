const express=require("express")
const router=express.Router()

const addpatientModel=require("../model/AddModel")
router.post("/add",async(req,res)=>{
    let data=req.body
    let school=new addpatientModel(data)
    let result=await school.save()
    res.json({
        status:"success"
    })
})


module.exports=router