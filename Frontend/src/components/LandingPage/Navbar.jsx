import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Navbar = () => {
  useGSAP(() => {
    gsap.from('.nav-link', {
      y: -40,
      opacity: 0,
      stagger: { each: 0.15, from: 'start' },
      duration: 1,
      ease: 'power3.out',
      delay: 0.5
    })
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex justify-between items-center px-8 py-6'
    >
      {/* Logo */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className='text-3xl font-black tracking-widest uppercase font-serif'
        style={{ color: '#c9a96e' }}
      >
        Cine<span className='text-white'>X</span>
      </motion.div>

      {/* Nav links */}
      <div className='hidden md:flex items-center gap-8'>
        {[
          { to: '/home', label: 'Home', icon: 'fa-regular fa-house' },
          { to: '/addEvents', label: 'Add Event', icon: 'fa-solid fa-bullhorn' },
          { to: '/about', label: 'About', icon: 'fa-solid fa-info' },
          { to: '/contact', label: 'Contact', icon: 'fa-solid fa-phone' },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className='nav-link group flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-300 relative'
          >
            <i className={`${item.icon} text-[#c9a96e] text-xs`}></i>
            {item.label}
            {/* underline animation on hover */}
            <span className='absolute -bottom-1 left-0 w-0 h-px bg-[#c9a96e] group-hover:w-full transition-all duration-300'></span>
          </Link>
        ))}
      </div>

      {/* Right CTA */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <Link
          to='/home'
          className='hidden md:block text-xs tracking-widest uppercase font-semibold px-5 py-2.5 rounded-full border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black transition-all duration-300'
        >
          Book Now
        </Link>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar