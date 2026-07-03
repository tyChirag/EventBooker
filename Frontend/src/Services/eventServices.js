export const addEvent=async (eventName,date,location,rating,photo,description,price)=>{
   const formData=new FormData()
        formData.append('movieName', eventName)
        formData.append('date', date)
        formData.append('location', location)
        formData.append('rating', rating)
        formData.append('price', price)
        formData.append('description', description)
        formData.append('photo', photo) 
const response=await fetch('http://localhost:3001/add-Event',{
  method:'POST',
  body:formData,
})
console.log(response);
 const result= await response.json();
 return result;
}
export const getEvents=async()=>{
  const response=await fetch('http://localhost:3001/',{
    method:'GET',
  headers:{"Content-Type":"application/json"},});
  const result=await response.json();
  console.log("This is result",result)
  console.log("Result list",result.list[0]);
  return result.list;
}
export const getEventDetails=async (id)=>{
const response=await fetch(`http://localhost:3001/view-details/${id}`,{
  method:'POST'
});
const result=await response.json();
return result;
}