export const addEvent=async (name,date,time,price,photo,description,location,rating=0)=>{
  const formData=new FormData()
        formData.append('movieName', name)
        formData.append('date', date)
        formData.append('location', location)
        formData.append('rating', rating)
        formData.append('price', price)
        formData.append('description', description)
        formData.append('photo', photo) 
        formData.append('time',time)
  const response= await fetch('http://localhost:3000/add-event',{
    method:'POST',
    body:formData
  })
  return await response.json();
}

export const getEvents=async()=>{
  console.log("I am in get events")
  const response=await fetch('http://localhost:3000/',{
    method:'GET',
  })
  return response.json();
}

export const getDetails=async(id)=>{
const response=await fetch(`http://localhost:3000/view-details/${id}`,{
  method:"GET",
})
console.log("IN getDetails")
const result= await response.json();
return result
}