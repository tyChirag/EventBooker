import React, { useEffect, useState } from 'react'
import Slider from '../Components/HomePage/slider'
import Card from '../Components/HomePage/Card'
import { getEvents } from '../Services/eventServices'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Navbar from '../Components/HomePage/Navbar'
const HomePage = ({theme,setTheme}) => {
  console.log(theme)
  useGSAP(()=>{
    gsap.from('.div',{
      opacity:0,
      duration:1,
      ease:'power1.inOut',
      stagger:{
        each:0.3,
        from:'random',
      },
    })
  },[])

  const [events, setEvents] =useState([]);
  useEffect(() => {
    getEvents().then((data)=>{
      setEvents(data.list);
    })
  },[])
  return (
    <div className={`${(theme=='black'?'black':'white')} div`}>
      <Navbar setTheme={setTheme} theme={theme} /> 
      <Slider/>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      {events.map((event)=>{
        return <Card key={event._id} event={event}/>
      })}
    </div></div>
  )
}

export default HomePage
