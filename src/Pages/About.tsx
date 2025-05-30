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
      <p  className='text-justify font-semibold text-lg w-full p-3 displayFlex '>
      Hey, my name is Shreyas Montadka, an aspiring software developer in Bengaluru.  The ability to create software that solves real-world problems and enhances user experiences has always captivated my imagination drives my excitement and passion for web development. I have some experience in web development, and I'm seeking for internships to test my abilities.
      </p>
     
      <div className='w-full flex  mt-5 px-3 '>
          <button className='border rounded px-1 w-32 py-2 hover:border-red-400 hover:text-red-400 hover:-translate-y-2 transition-all duration-300'><a href={require( '../Assets/ShreyasMontadka.pdf')} target='_blank' rel="noreferrer"><i className="fa-solid fa-file mx-1"></i>Resume</a></button>
          <button className='border rounded px-1 w-32 py-2 mx-10 hover:border-red-400 hover:text-red-400 hover:-translate-y-2 transition-all duration-300'><a href="https://github.com/ShreyasGanesh911" target='_blank' rel="noreferrer"><i className="fa-brands fa-github  mx-1"></i>Github</a></button>

      </div>
      </motion.div>
      <div className='sm:h-full sm:w-1/3 w-11/12 displayFlex z-10' style={{height:'60vh'}}>
        <motion.div className='sm:h-96 w-96 rounded-full ' initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:0.1}}>
          <img src={require("../Assets/portfolioPic2.png")} alt="" className='object-contain rounded-full bg-red-400 w-full h-full' />
        </motion.div>
     </div>
      </section> 
    </>
  )
}
