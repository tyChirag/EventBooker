import React, { useState } from 'react'
import { addEvent } from '../../Services/eventServices'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [poster, setPoster] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    
    if (!name || !date || !time || !location) {
      alert('Please fill in all required fields')
      return
    }

    setLoading(true)
    try {
      const res = await addEvent(name, date, time, price, poster, description, location)
      console.log(res)
      navigate('/home')
    } catch (error) {
      console.error('Error adding event:', error)
      alert('Failed to add event')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen w-screen flex items-center justify-center bg-gray-50 py-12 px-4'>
      <form 
        className='w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6' 
        encType="multipart/form-data" 
        onSubmit={submitHandler}
      >
        <h1 className='text-2xl font-bold text-gray-800 mb-6'>Create Event</h1>

        <div className='space-y-2'>
          <label htmlFor="event" className='block text-sm font-medium text-gray-700'>
            Event Name <span className='text-red-500'>*</span>
          </label>
          <input 
            placeholder='Event Name...' 
            type="text" 
            id='event' 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor="date" className='block text-sm font-medium text-gray-700'>
            Date <span className='text-red-500'>*</span>
          </label>
          <input 
            type="date" 
            id='date' 
            value={date} 
            onChange={(e) => setDate(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor="time" className='block text-sm font-medium text-gray-700'>
            Time <span className='text-red-500'>*</span>
          </label>
          <input 
            placeholder='Time...' 
            type="time" 
            id='time' 
            value={time} 
            onChange={(e) => setTime(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor="loc" className='block text-sm font-medium text-gray-700'>
            Location <span className='text-red-500'>*</span>
          </label>
          <input 
            placeholder='Location...' 
            type="text" 
            id='loc' 
            value={location} 
            onChange={(e) => setLocation(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor="des" className='block text-sm font-medium text-gray-700'>
            Description
          </label>
          <textarea 
            placeholder='What is this...' 
            id='des' 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
            rows='3'
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor="price" className='block text-sm font-medium text-gray-700'>
            Price
          </label>
          <input 
            placeholder='Price...' 
            type='number' 
            id='price' 
            value={price} 
            onChange={(e) => setPrice(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            step='0.01'
            min='0'
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor="img" className='block text-sm font-medium text-gray-700'>
            Poster
          </label>
          <input 
            type="file" 
            id='img' 
            onChange={(e) => setPoster(e.target.files[0])}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            accept='image/*'
          />
        </div>

        <button 
          type='submit'
          disabled={loading}
          className='w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-md transition-colors'
        >
          {loading ? 'Creating...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default Form