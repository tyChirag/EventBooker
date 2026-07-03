import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 border-b-2 border-black'>
      <Link to='/'>Home</Link>
      <input type="text" placeholder='Search events...' />
      <Link to='/add-events'>Add Events</Link>
    </div>
  )
}

export default Navbar
