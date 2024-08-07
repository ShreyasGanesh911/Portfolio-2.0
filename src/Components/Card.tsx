import { motion } from 'framer-motion'
import React from 'react'
type Props = {
    name:string
}
export default function Card({name}:Props) {
  return (
    <>
     <motion.div 
     initial={{scale:0.95,y:20,opacity:0}}  transition={{duration:0.3}} whileInView={{scale:1,opacity:1,y:0}} viewport={{once:true}} whileHover={{y:-5,color:'red'}} 
     className=' sm:text-base  text-xs sm:w-32 w-20 sm:my-0 my-1 h-12 rouned-lg bg-black displayFlex mx-1 capitalize font-mono  '>
      <p className=' text-center w-full h-full displayFlex'>{name}</p>
      </motion.div> 
    </>
  )
}
