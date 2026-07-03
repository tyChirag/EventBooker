//External Modules
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors')
const path=require('path')
//Local Modules
const eventRoutes = require('./Routes/eventRoutes');
const rootDir=require('./utils/appUtils')

require('dotenv').config();
app=express()
app.use(cors())
app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
})

app.use(express.static(path.join(rootDir,'uploads')))

app.use('/uploads',express.static(path.join(rootDir,'uploads')))

app.use(express.urlencoded());
app.use(express.json());
app.use(eventRoutes)


mongoose.connect(process.env.DB_PATH).then(()=>{
  app.listen(process.env.PORT,()=>{
  console.log(`this is working on http://localhost:${process.env.PORT}`)
})
})
.catch((err)=>{
  console.log("there was an error in server",err)
})


