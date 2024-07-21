import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

export default function Landing() {
  // const [mouse,setMouse] = useState({x:0,y:0})
  // useEffect(()=>{
  //   const myFunc = (e:MouseEvent)=>setMouse({x:e.clientX-25,y:e.clientY-25})
  //   window.addEventListener('mousemove',myFunc)
  //   return ()=>{
  //     window.removeEventListener('mousemove',myFunc)
  //   }
  // },[])
  return (
    <>
     <section id='landing' className='page bg-dark text-white flex items-start pt-28 justify-around'>
      {/* <motion.div animate={{x:mouse.x,y:mouse.y}} transition={{duration:0,delay:0}} style={{height:50,width:50}}  className=' rounded-full fixed top-0 left-0 bg-yellow-300 pointer-events-none'/> */}
      <div className='h-full w-1/3 border ' style={{height:'60vh'}}>
        Name div
      </div>
      <div className='h-full w-1/3 border displayFlex' style={{height:'60vh'}}>
        <motion.div  className='h-96 w-96 bg-yellow-300'></motion.div>
      </div>
      </section> 
    </>
  )
}

