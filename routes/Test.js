const {Router} = require("express");
const Test = require("../models/Test.models");
const TestRoutes = Router()



TestRoutes.get("/", async(req,res)=>{

    try {
         const test = await Test.find();
         console.log(test)
         return res.status(200).send(test)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})



TestRoutes.get("/get/:studentId", async(req,res)=>{
    console.log(req.params.studentId)

    try {
         const test = await Test.find({studentId:req.params.studentId});
         console.log(test)
         return res.status(200).send(test)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})


TestRoutes.post('/',async(req,res)=>{
    try {
        const test = await Test.create(req.body);
    
        return res.status(200).send(test)
     }
     catch(err){
          return res.status(500).send({message:err.message})
     }
})

TestRoutes.delete("/delete/:id" , async(req,res)=>{
    try {
        const test = await Test.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(200).send(test)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})


module.exports = TestRoutes