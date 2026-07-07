import { useGSAP } from '@gsap/react';
import { easeOut } from 'framer-motion';
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText';
import React from 'react'

const TopText = () => {
  gsap.registerPlugin(SplitText);
  useGSAP(() => {
  SplitText.create('.top', {
      type: 'chars, words',
      wordsClass:'words',
      onSplit(self){
 gsap.from(self.words, {
      yPercent:'random([-200,200])',
      xPercent:'random([-100,100])',
      rotation:'random(-30,30)',
      autoAlpha:0,
      ease:'back.out',
      stagger: {
        repeat:2,
        yoyo:true,
        each:0.05,
        from:'random'
      }
    })
      }
    })
  
  }, [])
  return (
    <div className='top text-4xl text-amber-100 font-extrabold uppercase leading-[7vh] font-mono'>
      <div>
        Still Stuck Whether Watch the movie or not,
      </div>
      <div>
        Decide fast before the Tickets are sold out,but tickets from cinx now
      </div>

      
    </div>
  )
}

export default TopText
