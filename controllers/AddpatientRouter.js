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
router.get("/view",async(req,res)=>{
    let data=await addpatientModel.find()
    res.json(data)
})
router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await addpatientModel.find(input)
    res.json(data)
})
module.exports=router