import React from 'react'
import { motion } from 'framer-motion'

const TopText = () => {
  return (
    <div className='flex flex-col items-center gap-4'>

      {/* Eyebrow label */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className='text-xs tracking-[.3em] uppercase font-medium px-4 py-1.5 rounded-full border border-white/20 text-white/60'
      >
        Now Booking
      </motion.span>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
        className='text-5xl md:text-7xl lg:text-8xl font-black font-serif text-white leading-none tracking-tight'
        style={{ textShadow: '0 0 80px rgba(0,0,0,0.8)' }}
      >
        Where Cinema
        <br />
        <span style={{ color: '#c9a96e' }}>Comes Alive</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className='text-base md:text-lg text-white/50 max-w-md leading-relaxed'
      >
        Book tickets for the latest movies, live events, and exclusive premieres — all in one place.
      </motion.p>

    </div>
  )
}

export default TopText