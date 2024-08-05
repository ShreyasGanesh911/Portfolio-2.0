import { motion } from 'framer-motion'
import "../Styles/ProjectCard.css"
import { Link } from 'react-router-dom'
type Props = {
  projectName : string,
  projectLink : string,
  navLink:string,
  reverse : boolean,
  image:string
}

export default function ProjectCard({projectName,projectLink,navLink,reverse,image}:Props) {

  return (
    <>
      <motion.div id='projectCardContainer'  
       whileInView={{y:0,scale:1,opacity:1}}  initial={{y:10,scale:0.9,opacity:0}}  viewport={{once:true}}  transition={{stiffness:0,duration:0.5}} 
       className={`  sm:my-20 my-10 relative w-full  ${!reverse && 'flex-row-reverse'}  2xl:w-3/5 xl:w-2/3 2xl:h-96 sm:h-72 sm:flex   items-center`}
       >
          <motion.div id='projectCardImg' whileHover={{scale:0.97}} transition={{duration:0.2}} className='  displayFlex z-0 ' >
          <img className='w-full h-full object-contain' src={image} alt="" />
        </motion.div>

        <div className={` ${!reverse && 'flex-row-reverse'}  sm:w-1/2 w-full  h-auto sm:h-full flex   pt-10`} >
            <div className={`  ${!reverse && 'float-right'} displayFlex flex-col w-full sm:w-auto  `}>
                <p className={`  w-full   text-center   sm:p-2 2xl:text-5xl text-4xl hover:text-yellow-400`} >
                  <span  className={`text-red-400 mx-1 `}>{'//'}</span>{projectName}
                </p>
                <p 
                className={`w-full text-justify text-base  transition-all duration-200 my-2 sm:my-5 sm:w-3/4 displayFlex `}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maxime tempora inventore laboriosam, ipsum illo iusto fugit similique quod ullam?</p>
                <div  className='  sm:w-3/4 w-full h-32  sm:h-52 flex sm:mt-0 mt-5  flex-col justify-evenly items-center'>
                  <a href={projectLink} target='_blank' rel='noreferrer' className=' border-b border-red-400 hover:border-red-700 duration-300 transition-all   w-1/3 displayFlex py-3 px-2 text-lg '><i className="fa-brands fa-github  mx-1"></i>Project</a>
                  <Link to={`/projects/${navLink}`} target='_blank' rel='noreferrer' className='border-b border-red-400 hover:border-red-700 displayFlex w-1/3 py-3 text-lg px-2 '><i className="fa-solid fa-arrow-up-right-from-square mx-1"></i>More</Link>
                </div>
            </div>

        </div>
      </motion.div>
    </>
  )
}
