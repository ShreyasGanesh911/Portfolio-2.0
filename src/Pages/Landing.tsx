import { motion } from 'framer-motion'
import DrawContainer from '../Components/Landing/DrawContainer'

export default function Landing() {
  const name = 'SHREYAS'
  return (
    <>
     <section id='landing' className='page bg-dark relative text-white displayFlex'>
      <DrawContainer/>
     <div className='z-10 sm:w-auto h-96 w-full border flex justify-start items-center pt-5 flex-col'>
        <p className='sm:w-full w-5/6 text-2xl'>
          <motion.span 
            viewport={{once:true}} initial={{scale:9,x:100,opacity:0}} whileInView={{scale:1,x:0,opacity:1}}  
            className=' text-red-400 sm:text-3xl text-4xl mr-5'>Hello
          </motion.span> 
        <motion.span 
            viewport={{once:true}} initial={{scale:9,x:100,opacity:0}} transition={{delay:0.3}} whileInView={{scale:1,x:0,opacity:1}} >I'm</motion.span>
        </p>
          <div className='mt-5 sm:mt-0'>
        {name.split('').map((e,i)=>
        <motion.span 
        viewport={{once:true}} initial={{scale:0.9,x:100,opacity:0}} transition={{delay:0.6}} whileInView={{scale:1,x:0,opacity:1}} key={i} 
        className='2xl:text-8xl xl:text-7xl text-5xl mx-2 font-semibold hover:text-red-400'>
          {e}
          </motion.span>)}
        </div>
        <motion.p 
        viewport={{once:true}} initial={{scale:0.9,x:50,opacity:0}} transition={{delay:0.9}} whileInView={{scale:1,x:0,opacity:1}} className='font-mono text-lg'>• A Full Stack <span className='text-red-400 animate-pulse'>Web</span> developer •</motion.p>
      </div>
      </section> 
    </>
  )
}
