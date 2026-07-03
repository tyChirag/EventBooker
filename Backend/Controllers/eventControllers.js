const Events = require("../Models/EventList");
exports.homePage=async (req,res,next)=>{
  console.log("I am in the homePage")
  const list=await Events.find()
  console.log("list",list)
  res.json({list})
}
exports.addEvent=(req,res,next)=>{
  console.log(req.body)
  console.log("THis is file detials",req.file);
    const formattedDate = new Date(req.body.date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  photo = req.file ? `/uploads/${req.file.filename}` : null
  const{movieName,date,location,rating,description,price}=req.body;
  const newEvent=new Events({
    movieName,
    date:formattedDate,
    location,
    rating,
    photoUrl:photo,
    description,
    price
  })
  newEvent.save()
  .then((result)=>{
  res.json({result})
 
})
}
exports.viewDetails=async (req,res,next)=>{
  console.log("I am in details page")
const id=req.params.eventId;
console.log("This is id")
const details= await Events.findById(id);
console.log(details)
res.json(details);

}