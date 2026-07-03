import Navbar from '../components/navbar'
import Card from '../components/card'
import { getEvents } from '../Services/eventServices'
import { useState } from 'react'
import { useEffect } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
const HomePage = () => {
  const [items,setItems]=useState([])
  useEffect(()=>{
    const getInfo=async()=>{
    const res=await getEvents();
    console.log("res",res)
    setItems(res);
    console.log("what is inside after destructuring",items)
  }
  getInfo();
  },[])
    useGSAP(()=>{
gsap.from('.event-card',{
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.5,
      ease: 'power3.out',
    })
  },[items])
  return (
    <div>
      <Navbar/>
      HomePage
      <div className='flex bg-amber-300 gap-4'>
      {
        items.map((item,index)=>{
          console.log("item",item);
         return(<div key={item._id} className={`event-card event-card-${index} `}  ><Card id={item._id} name={item.movieName} photo={item.photoUrl} description={item.description} rating={item.rating} location={item.price} price={item.price} date={item.date}/></div> )
        })
       
      }
      </div>
      <div className='box h-52 w-52 bg-red-600'>
        BOX
      </div>
    </div>
  )
}

export default HomePage
