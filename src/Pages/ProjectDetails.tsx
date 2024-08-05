import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import projectDescription from '../Constants/projectDesc.json'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import SwiperMod from '../Components/Swiper'
import '../Styles/ProjectDetails.css'
import { nextProject } from '../Constants/projectList'
import Loadin from './Loading'
import { motion } from 'framer-motion'
type Path = keyof typeof projectDescription

export default function ProjectDetails() {
  const location = useLocation()
  const navigate = useNavigate()
  const [show,setShow] = useState<boolean>(false)
  const [title,setTitle] = useState<Path>(location.pathname.split("/")[2] as Path)
  const [next,setNext] = useState('')

  useEffect(()=>{
      const titleProject:Path = location.pathname.split("/")[2] as Path
      if(projectDescription[titleProject] === undefined)
        navigate('/')
     
      else{
        document.title = `${titleProject} | Shreyas`
        setTitle(titleProject)
        const myTimeOut =  setTimeout(() => setShow(true), 1000);
        const nextPrg = nextProject[title]
        setNext(nextPrg)
        return ()=> clearTimeout(myTimeOut)
      }
        
  },[])

  return (
    <section className='page  relative bg-dark' >
      
      {!show? <Loadin/>: <>
        <div className='sm:fixed absolute displayFlex hover:text-red-400 flex-col bg-black sm:w-48 z-20 w-full h-28 sm:bottom-10 sm:right-10 bottom-0 text-white rounded' style={{backgroundColor:"rgb(8,8,8)"}}>
        <Link  reloadDocument to={`/projects/${next}`}>
        <p className='w-full text-center sm:text-base text-xl  m-2'>Next project <i className="fa-solid fa-arrow-right ml-1"></i></p>
        </Link>
        <p className='w-full sm:m-2 text-center sm:text-lg text-2xl  font-mono '>{next}</p>
      </div>


      <div className='w-full h-48 text-white flex justify-center pl-16 items-start flex-col'>
          <p className='sm:text-6xl text-5xl w-5/6 sm:w-1/4 pb-1 border-b decoration-2  hover:border-red-400 text-red-400'>{projectDescription[title].Title}</p>
          <motion.p className='sm:w-1/6 w-5/6 text-right text-xl pt-1 font-mono hover:text-green-600'
            initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:100}} transition={{duration:0.3}} viewport={{once:true}}
          >{projectDescription[title].date}</motion.p>

      </div>



      <div className='w-full   flex items-center flex-col'>

        <motion.div
          initial={{y:80,opacity:0}} whileInView={{y:0,opacity:100}} transition={{duration:0.5}} viewport={{once:true}}
        className='sm:w-5/6 w-full  h-80 text-white flex items-center sm:pl-16 sm:justify-normal justify-center '>
            <p className='sm:w-1/3 w-5/6 text-justify text-lg font-sans font-semibold'>{projectDescription[title].Description}</p>
        </motion.div>

        <div id='SwiperDiv' className='sm:w-5/6 w-full  displayFlex my-5 py-2 '  >
            <div className='sm:w-3/4 w-11/12 h-full  '> 
              <SwiperMod images={projectDescription[title].pictures}/>
            </div>
        </div>


        <div className='w-5/6 sm:h-96  text-white flex sm:justify-center items-center flex-col'>
          <h1 className='sm:w-3/4 w-full text-center sm:text-left font-mono text-2xl text-red-400'>Tools Used</h1>
            <div className='flex flex-wrap sm:w-3/4 w-11/12 h-1/2 justify-between items-center text-white'>
                {projectDescription[title].stack.map((e,i)=><Card key={i} name={e}/>)}
            </div>
        </div>
        
        <div className='w-5/6 h-40  text-white displayFlex'>
            <button className='py-3 px-4 hover:bg-black bg-slate-950 rounded relative hover:-translate-y-2 duration-300'><a href={projectDescription[title].ProjectLink}  rel="noreferrer" target='_blank'>Project source code</a></button>
        </div>

      </div>
      </>}
      
    </section>
  )
}
