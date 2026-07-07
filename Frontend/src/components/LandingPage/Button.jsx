import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { CustomEase, CustomWiggle } from 'gsap/all'
import { Timeline } from 'gsap/gsap-core.js'
import React from 'react'
import { Link } from 'react-router-dom'
const Button = () => {
  // const tl=gsap.timeline()
  // useGSAP(()=>{

  // })
  return (
    <motion.div initial={{opacity:0}} animate={{x:[0,200,-200,0],y:[0,-200,200,0],opacity:1}} transition={{duration:2}} className='but p-7 text-4xl font-black border rounded-2xl hover:scale-120 transition duration-300 hover:text-emerald-400 shadow-2xl shadow-blue-300'>
      <Link  to='/home' >Get Tickets</Link>
    </motion.div>
  )
}

export default Button
