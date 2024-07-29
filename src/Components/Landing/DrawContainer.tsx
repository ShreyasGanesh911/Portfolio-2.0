import { motion } from 'framer-motion'
import Grid from './Grid'

export default function DrawContainer() {
    
  return (
    <motion.div viewport={{once:true}} initial={{scale:0.99,opacity:0}} transition={{delay:1,stiffness:""}} whileInView={{scale:1,opacity:0.9}} 
    className={`w-full h-full opacity-40  absolute flex flex-wrap  justify-around overflow-y-hidden  `} >
     { [...Array(2750)].map((e,i)=><Grid key={i}/>)}
    </motion.div>
  )
}
