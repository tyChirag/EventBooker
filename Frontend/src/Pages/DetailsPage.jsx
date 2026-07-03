import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getEventDetails } from '../Services/eventServices';
import { useState } from 'react';

const DetailsPage = () => {
  const {id}=useParams()
  const[obj,setObj]=useState({});
   useEffect(()=>{
  const viewDetails=async ()=>{
  const res=await getEventDetails(id);
  console.log(res);
  setObj(res);
  console.log("I am in the detailsPage",obj,res);
  }
  viewDetails();
   },[])
  return (
    <div>
     <h2>{obj.movieName}</h2> 
      <img src={`http://localhost:3001${obj.photoUrl}`} alt={obj.movieName} />
      <p>{obj.date}</p>
      <p>{obj.price}</p>
      <p>{obj.description}</p>
      <p>{obj.rating}</p>
      <p>{obj.location}</p>
      <button>Book</button>
    </div>
  )
}

export default DetailsPage
