import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
type Props = {
  projectName : string,
  projectLink : string,
}
export default function ProjectCard({projectName,projectLink}:Props) {
  return (
    <>
      <motion.div whileInView={{x:0,scale:1}} initial={{x:100,scale:0.5}} viewport={{once:true}} transition={{stiffness:0}} className='2xl:w-3/5 w-2/3 h-96 border flex my-5'>
        <div className='w-1/2 border displayFlex'>
          <div className='w-5/6 h-5/6 border'></div>
        </div>
        <div className='w-1/2 border flex flex-col justify-evenly items-center '>
          <p className='border w-3/4  text-center displayFlex p-2 text-3xl hover:text-yellow-400'>{projectName}</p>
          <div className='w-3/4 h-20 border flex justify-evenly items-center'>
            <a href={projectLink} target='_blank' rel='noreferrer' className='border py-1 px-2 rounded hover:text-gray-500'><i className="fa-brands fa-github  mx-1"></i>Project</a>
            <Link to={`/projects/${projectName}`} target='_blank' rel='noreferrer' className='border py-1 px-2 rounded'><i className="fa-solid fa-arrow-up-right-from-square mx-1"></i>More</Link>
          </div>
        </div>
      </motion.div>
    </>
  )
}
