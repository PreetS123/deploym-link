const express= require('express');
const cors=require('cors');

const connection= require('./configs/db');
 const authController= require('./routes/auth.route');
  const studentController= require('./routes/student.route');
  const testController= require('./routes/Test')
//   const authentication= require('./middleware/authentication');
const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());

app.use('/auth',authController)
//  app.use(authentication)
 app.use('/student',studentController)
 app.use('/test',testController)

app.get("/",(req,res)=>{
    console.log(req.session)
    return res.send("hello world")
})
const PORT = process.env.PORT || 8080
app.listen(PORT,async()=>{
    try {
        await connection
        console.log("connection success")
    }
    catch{
        console.log("feild connection")
    }
    console.log("Server strated on http://localhost:8080")
})
