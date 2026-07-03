import React from 'react'
import { useState } from 'react'
import { addEvent } from '../Services/eventServices'

const AddEvents = () => {
  const [eventName,setEventName]=useState('')
   const [date,setDate]=useState('')
   const[location,setLocation]=useState('')
   const[rating,setRating]=useState('')
   const[photo,setPhoto]=useState('') 
   const[description,setDescription]=useState('');
   const[price,setPrice]=useState('');
  const submitHandler=async(e)=>{
    e.preventDefault();
   
    console.log(photo)
    const res=await addEvent(eventName,date,location,rating,photo,description,price);
    console.log(res)
  }
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <form className='flex flex-col flex-wrap h-9/10 justify-center items-center border-2 border-orange-400 gap-3 p-8 w-5/10' onSubmit={submitHandler} encType="multipart/form-data">
       <h1 className='font-black underline text-2xl'>Enter Event Details</h1>
        <label  htmlFor="events">Enter Event's Name</label>
        <input type="text" name='eventName' id='events' onChange={(e)=>setEventName(e.target.value)} value={eventName} placeholder='Enter Event Name' />
        <label htmlFor="date">Enter Date</label>
        <input type="date" name='date' id="date" placeholder='Enter Event Date' onChange={(e)=>setDate(e.target.value)} value={date}/>
        <label htmlFor="loc">Enter Location</label>
        <input type="text" name='location' id='loc' onChange={(e)=>setLocation(e.target.value)} placeholder='Enter Location' value={location} />
        <label htmlFor="rating">Ratings</label>
        <input type="number" name='ratings' id='rating'onChange={(e)=>setRating(e.target.value)} placeholder='Enter Ratings' value={rating} />
        <label htmlFor="photo">Photo</label>
        <input type="file" id='photo' name='photo' className='border-none' onChange={(e)=>setPhoto(e.target.files[0])} />
        <input type="text" name='price' id='price' onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Price' value={price}  />
        <label htmlFor="des">Enter Description</label>
        <textarea name="description" id="des" className='border-2 border-black' onChange={(e)=>{setDescription(e.target.value)}}placeholder='Enter Description'></textarea>
        <button className='p-2 font-black rounded-lg text-white bg-blue-400'>Submit Event Details</button>
      </form>
    </div>
  )
}

export default AddEvents
