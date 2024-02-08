const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const addpatientRoute=require("./controllers/AddpatientRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Taniya12:TAN12122001@cluster0.vfq897t.mongodb.net/diabetesDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/patient",addpatientRoute)

app.listen(3001)