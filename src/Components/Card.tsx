import { motion } from 'framer-motion'
import React from 'react'
type Props = {
    name:string
}
export default function Card({name}:Props) {
  return (
    <>
     <motion.div initial={{scale:0.95,x:50,opacity:0}}  transition={{duration:0.3}} whileInView={{scale:1,opacity:1,x:0}} viewport={{once:true}} whileHover={{y:-5,color:'red'}} 
     className=' sm:w-32 w-20 sm:my-0 my-1 h-12 rouned-lg bg-black displayFlex mx-1 capitalize font-mono '>{name}</motion.div> 
    </>
  )
}
