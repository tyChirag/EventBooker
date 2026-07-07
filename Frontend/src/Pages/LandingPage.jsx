import React from 'react'
import Video from '../Components/LandingPage/Video'
import Button from '../Components/LandingPage/Button'
import TopText from '../Components/LandingPage/TopText'
import Navbar from '../Components/Navbar'

const LandingPage = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
         <Video/>
      </div>
      <div className='relative '>
           <Navbar/>
      </div>
   
      <div className=' flex absolute text-center top-[30vh] left-[10vw] w-[80%] '>
        <TopText/>
      </div>
      <div className='h-screen w-screen relative flex justify-center items-center text-4xl text-white font-mono'>
        <Button/>
      </div>
     
      
    </div>
  )
}

export default LandingPage
