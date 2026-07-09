import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
const Navbar = ({theme,setTheme}) => {
    useGSAP(()=>{
        gsap.from(".box",{
            y:-100,
            yoyo:true,
            opacity:0, 
      stagger:{
        each:0.3,
        from:'random',
      },
      duration:1.5,
      ease:"back.out",
        })
    },[])
  return (
    <motion.div  initial={{opacity:0}} animate={{opacity:1}} transition={{staggerChildren: 0.1,duration:2.5}}  className='  font-extrabold p-3'>
      <motion.div initial={{opacity:0}} animate={{opacity:2} } transition={{duration:2}} className='nav font-mono flex justify-between flex-wrap m-4 gap-5 border p-5 rounded-4xl hover:border-2 hover:border-emerald-500  shadow-[30%] text-shadow-lg shadow-blue-300'>

         <motion.div animate={{x:[-200,0],scale:[0,1.2,1],color:'orange'} } transition={{duration:1.5}} className='text-5xl uppercase font-serif'>CineX</motion.div> 
        <Link to='/home' className='box  uppercase text-3xl p-2 hover:text-emerald-400 hover:underline'> <i className="fa-regular fa-house"></i>Home</Link>
        <Link to='/addEvents' className='box text-3xl uppercase p-2 hover:text-emerald-400 hover:underline'> <i className="fa-solid fa-bullhorn"></i>Add Event</Link> 
        <Link to='/about' className='box text-3xl uppercase p-2 hover:text-emerald-400 hover:underline'> <i className="fa-solid fa-info"></i>About Us</Link>
        <Link to='/contact' className='box text-3xl uppercase p-2 hover:text-emerald-400 hover:underline'> <i className="fa-solid fa-phone"></i>Contact</Link>
        <motion.button onTap={{scale:0.8}} animate={{}} transition={{duration:1}}
         className='border-2 rounded-full p-3 hover:scale-90' onClick={()=>{
          if (theme=='black')
            setTheme('white')
          else
            setTheme('black')
        }}>{(theme=='white'?<i className="fa-regular fa-sun "></i>:<i className="fa-solid fa-moon"></i>)}</motion.button>
      </motion.div>
    </motion.div>
  )
}

export default Navbar
