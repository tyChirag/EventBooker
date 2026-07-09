import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video
        autoPlay
        muted
        loop
        playsInline
        className='h-full w-full object-cover scale-105'  // slight scale = cinematic feel
        src="https://videos.pexels.com/video-files/8263459/8263459-uhd_2160_4096_25fps.mp4"
      />
    </div>
  )
}

export default Video