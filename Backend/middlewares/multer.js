const multer=require('multer');
const randomString=(length)=>{
const characters='abcdefghijklmnopqrstuvwxyz';
let result='';
for (let i=0;i<length;i++){
  const randomIndex=Math.floor(Math.random()*characters.length);
  result+=characters[randomIndex];  
}
return result;
}
const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'uploads/')
  }, 
  filename:(req,file,cb)=>{
    cb(null,randomString(10)+'-'+file.originalname)
  }
})

const fileFilter=(req,file,cb)=>{
  if (file.mimetype==='image/png' || file.mimetype==='image/jpg' || file.mimetype==='image/jpeg'){
    cb(null,true)
  }
  else{
    cb(null,false)
  }
}

const multerOptions={storage:storage,fileFilter:fileFilter}
const uploads=multer(multerOptions);

module.exports=uploads;