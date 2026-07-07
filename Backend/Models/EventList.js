const mongoose=require('mongoose');
const eventSchema = mongoose.Schema({
movieName:{type:String,required:true},
date:{type:String,required:true},
price:{type:Number,required:true},
description:{type:String,required:true},
rating:{type:Number,required:true},
time:{type:String,required:true},
photoUrl:String,
location:String
})

module.exports=mongoose.model("Events",eventSchema);