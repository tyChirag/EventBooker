import React, { useState } from 'react'
import Video from '../Components/LandingPage/Video'
import Button from '../Components/LandingPage/Button'
import TopText from '../Components/LandingPage/TopText'
import Navbar from '../Components/LandingPage/Navbar'

const LandingPage = () => {
  const [theme, setTheme] = useState('black')

  return (
    <div className='relative w-screen h-screen overflow-hidden'>

      {/* Video background */}
      <div className='absolute inset-0 z-0'>
        <Video />
      </div>

      {/* Dark cinematic overlay — gradient from top and bottom */}
      <div className='absolute inset-0 z-10'
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.85) 100%)'
        }}
      />

      {/* Navbar */}
      <div className='absolute top-0 left-0 right-0 z-30'>
        <Navbar theme={theme} setTheme={setTheme} />
      </div>

      {/* Center content */}
      <div className='absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4'>
        <TopText />
        <div className='mt-10'>
          <Button />
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce'>
        <p className='text-xs tracking-widest uppercase text-white/50'>Scroll to explore</p>
        <div className='w-px h-8 bg-gradient-to-b from-white/50 to-transparent'></div>
      </div>

    </div>
  )
}

export default LandingPage