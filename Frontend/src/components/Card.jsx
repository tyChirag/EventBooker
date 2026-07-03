import React from 'react'
import { getEventDetails } from '../Services/eventServices'
import { Link, useNavigate } from 'react-router-dom'

const Card = ({id,name,photo="",description,rating,location,price,date}) => {

  return (
    <div className='flex flex-col bg-amber-500 '>
      <h3>{name}</h3>
      <img src={`http://localhost:3001${photo}`} alt={name} />
      <p>{description}</p>
      <p>Location: {location}</p>
      <p>Rating: {rating}</p>
      <p>Date: {date}</p>
      <p>Price: {price}</p>
      <Link to={`/event/${id}`}>More Info</Link>
    </div>
  )
}

export default Card
