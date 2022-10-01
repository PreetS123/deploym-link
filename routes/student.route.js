const {Router} = require("express");
const StudentRouter = Router()
const  Student  = require("../models/Student.model");


StudentRouter.get("/", async(req,res)=>{
    try {
         const student = await Student.find();
         
         return res.status(200).send(student)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
});
// StudentRouter.get("/get/:id", async(req,res)=>{
//     try {
//          const student = await Student.findById(req.params.id).lean().exec();
         
//          return res.status(200).send(student)
//     }
//     catch(err){
//         return res.status(500).send({message:err.message})
//     }
// });

StudentRouter.post('/',async(req,res)=>{
    try {
        const student = await Student.create(req.body);
    
        return res.status(200).send(student)
     }
     catch(err){
          return res.status(500).send({message:err.message})
     }
})

StudentRouter.get('/search/:name',async(req,res)=>{

    try {
      const student = await Student.find(
              {
                  "$or":[
                      {"name":{$regex:req.params.name}}
                  ]
              }
          );
        
          return res.status(200).send(student)
     }
     catch(err){
          return res.status(500).send({message:err.message})
     }
})


StudentRouter.get('/sort/asc',async(req,res)=>{
    try {
        const student = await Student.find().sort({age:1})
    
        return res.status(200).send(student)
     }
     catch(err){
          return res.status(500).send({message:err.message})
     }
})


StudentRouter.get('/gender/:gender',async(req,res)=>{
    try {
        const student = await Student.find({gender: req.params.gender});
    
        return res.status(200).send(student)
     }
     catch(err){
          return res.status(500).send({message:err.message})
     }
})
StudentRouter.delete('/delete/:id',async(req,res)=>{
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
    
        return res.status(200).send(student)
     }
     catch(err){
          return res.status(500).send({message:err.message})
     }
})


module.exports = StudentRouter