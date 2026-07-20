import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Button = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.8 }}
      className='flex items-center gap-4'
    >
      {/* Primary CTA */}
      <Link to='/home'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className='px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase text-black transition-all duration-300'
          style={{
            background: 'linear-gradient(135deg, #c9a96e, #a07840)',
            boxShadow: '0 0 40px rgba(201,169,110,0.3)'
          }}
        >
          Get Tickets
        </motion.button>
      </Link>

      {/* Secondary CTA */}
      <Link to='/home'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className='px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase text-white border border-white/30 hover:border-white/60 transition-all duration-300 backdrop-blur-sm'
        >
          Explore Events
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Button