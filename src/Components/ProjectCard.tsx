import { motion } from 'framer-motion'
import "../Styles/ProjectCard.css"
import { Link } from 'react-router-dom'
type Props = {
  projectName : string,
  projectLink : string,
  navLink:string
}
export default function ProjectCard({projectName,projectLink,navLink}:Props) {
  return (
    <>
      <motion.div id='projectCardContainer'  whileInView={{x:0,scale:1}}  initial={{x:100,scale:0.5}} viewport={{once:true}} transition={{stiffness:0}} className=' my-10 w-full  rounded-xl 2xl:w-3/5 xl:w-2/3 2xl:h-96 sm:h-72 sm:flex   items-center'>
        
          <motion.div id='projectCardImg' whileHover={{scale:0.98}} className=' bg-yellow-200  displayFlex z-0 ' >
          <img className='w-full h-full object-contain' src="https://raw.githubusercontent.com/ShreyasGanesh911/kick-street/master/src/Assets/Readme/desktop-home.png" alt="" />
         
        </motion.div>
        <div className={`   sm:w-1/2  h-60 sm:h-full flex  flex-col pt-10`}>

          <p className='  sm:w-3/4 w-full  sm:pl-10 text-center  sm:text-left sm:p-2 2xl:text-5xl text-4xl hover:text-yellow-400'><span className='text-red-400 mx-1'>{'//'}</span>{projectName}</p>
          {/* <p className='h-1/2'></p> */}

          <div  className='sm:w-3/4 w-full h-32  sm:h-52 flex sm:mt-0 mt-5  flex-col justify-evenly items-center'>
            <a  href={projectLink} target='_blank' rel='noreferrer' className='border-b border-red-400 hover:border-red-700  w-1/3 displayFlex py-3 px-2 text-lg '><i className="fa-brands fa-github  mx-1"></i>Project</a>
            <Link to={`/projects/${navLink}`} target='_blank' rel='noreferrer' className='border-b border-red-400 hover:border-red-700 displayFlex w-1/3 py-3 text-lg px-2 '><i className="fa-solid fa-arrow-up-right-from-square mx-1"></i>More</Link>
          </div>
        </div>
      </motion.div>
    </>
  )
}
