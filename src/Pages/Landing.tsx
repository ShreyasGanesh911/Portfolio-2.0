import { motion } from 'framer-motion'
import DrawContainer from '../Components/Landing/DrawContainer'
import { Helmet } from 'react-helmet-async'

export default function Landing() {
  const name = 'SHREYAS'
  return (
    <>
    <Helmet>
      <title>Shreyas Montadka | Full Stack Developer Portfolio</title>
        <meta name="description" content="Portfolio website of Shreyas Montadka, a full-stack web developer with expertise in front-end and back-end technologies. Explore projects and skills." />
        <meta name="keywords" content="Shreyas Montadka, full stack developer, portfolio, web development, react, node.js, javascript, html, css" />
        
        
        <meta property="og:title" content="Shreyas Montadka | Full Stack Developer Portfolio" />
        <meta property="og:description" content="Explore the portfolio of Shreyas Montadka, a skilled full-stack web developer with expertise in modern web technologies." />
        <meta property="og:image" content="%PUBLIC_URL%/images/portfolio-thumbnail.jpg" />
        <meta property="og:url" content="https://sgdev.online" />
        <meta property="og:type" content="website" />
    </Helmet>
     <section id='landing' className='page bg-dark  relative text-white displayFlex'>
      <DrawContainer/>
     <div className='z-10  sm:w-auto h-auto w-full cursor-default flex justify-start items-center pt-5 flex-col'>
        <p className='sm:w-full w-5/6 text-2xl'>
          <motion.span 
            viewport={{once:true}} initial={{scale:9,opacity:0}} whileInView={{scale:1,x:0,opacity:1}}  
            className=' text-red-400 sm:text-3xl text-5xl mr-5'>Hello
          </motion.span> 
        <motion.span 
            viewport={{once:true}} initial={{scale:9,opacity:0}} transition={{delay:0.3}} whileInView={{scale:1,x:0,opacity:1}} className='sm:text-2xl text-4xl'>I'm</motion.span>
        </p>
          <div className='mt-5 sm:mt-0'>
        {name.split('').map((e,i)=>
        <motion.span 
        viewport={{once:true}} initial={{scale:0.9,opacity:0}} transition={{delay:0.6}} whileInView={{scale:1,x:0,opacity:1}} key={i} 
        className='2xl:text-8xl text-7xl  mx-1 font-semibold hover:text-red-400 cursor-default'>
          {e}
          </motion.span>)}
        </div>
        <motion.h1 
        viewport={{once:true}} initial={{scale:0.9,opacity:0}} transition={{delay:0.9}} whileInView={{scale:1,x:0,opacity:1}} 
        className='font-mono sm:text-lg text-xl sm:mt-0 mt-5'>• A Full Stack <span className='text-red-400 animate-pulse'>Web</span> developer •</motion.h1>
      </div>
      </section> 
    </>
  )
}
