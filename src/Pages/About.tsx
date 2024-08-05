import { motion } from 'framer-motion'
export default function About() {

  return (
    <>
    <section id='about' className='page bg-pink-200 aboutPage relative text-white flex items-center justify-around sm:flex-row flex-col-reverse '>
      <motion.div 
        initial={{opacity:1}} whileInView={{opacity:0.85}} transition={{delay:2,duration:0.8}} viewport={{once:true}}
      className='sm:absolute  bg-dark w-full h-full opacity-85' ></motion.div>
      <motion.div  
      whileInView={{y:0,scale:1,opacity:1}}  initial={{y:80,opacity:0}} viewport={{once:true}} transition={{stiffness:0,duration:0.5,delay:0.3}} 
      className=' z-10 h-full sm:w-1/3 w-11/12  flex flex-col justify-center  py-2 sm:py-0'  style={{minHeight:'60vh',height:'auto'}}>
      <h1 className='font-semibold text-3xl p-3 text-red-400'>About</h1>
      <motion.p  className='text-justify font-semibold text-lg w-full p-3 displayFlex '>
      I'm an arising web developer based in Bengaluru. I am a span student at RV Institute Of Technology And Management, Bengaluru, majoring in information science. The ability to create software that solves real-world problems and enhances user experiences has always captivated my imagination drives my excitement and passion for web development. I have some experience in web development, and I'm seeking for internships to test my abilities.

      </motion.p>
     
      <div className='w-full flex  mt-5 px-3 '>
          <button className='border rounded px-1 w-32 py-2 hover:border-red-400 hover:text-red-400 hover:-translate-y-2 transition-all duration-300'><a href={require( '../Assets/FinalResume.pdf')} target='_blank' rel="noreferrer"><i className="fa-solid fa-file mx-1"></i>Resume</a></button>
          <button className='border rounded px-1 w-32 py-2 mx-10 hover:border-red-400 hover:text-red-400 hover:-translate-y-2 transition-all duration-300'><a href="https://github.com/ShreyasGanesh911" target='_blank' rel="noreferrer"><i className="fa-brands fa-github  mx-1"></i>Github</a></button>

      </div>
      </motion.div>
      <div className='h-full sm:w-1/3 w-5/6  displayFlex z-10' style={{height:'60vh'}}>
        <div className='h-96 w-96 bg-yellow-300'></div>
     </div>
      </section> 
    </>
  )
}
