// import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import projectDescription from '../Constants/projectDesc.json'
import { useLocation } from 'react-router-dom'
import SwiperMod from '../Components/Swiper'
type Path = keyof typeof projectDescription
export default function ProjectDetails() {
  const location = useLocation()
  // const [title,setTitle] = useState<keyof typeof projectDescription>()
  let title = 'KickStreet' as keyof typeof projectDescription
  let  namePath
  // useEffect(()=>{
  //     namePath = location.pathname.split("/")[2] as Path || "kickstreet"
  //   console.log(namePath)
  //   if(namePath)
  //     setTitle(namePath)
  // },[])
  return (
    <section className='page  relative bg-dark' >

      <div className='fixed bg-black w-48 h-28 bottom-10 right-10 text-white rounded' style={{backgroundColor:"rgb(8,8,8)"}}>
        <p className='w-full m-2'>Next project <i className="fa-solid fa-arrow-right ml-1"></i></p>
        <p className='w-full m-2 text-lg font-mono'>Kick Street</p>
      </div>


      <div className='w-full h-48 text-white flex justify-center pl-16 items-start flex-col'>
          <p className='text-6xl w-1/4 pb-1 border-b decoration-2 hover:text-yellow-400 hover:border-yellow-400 '>{projectDescription[title].Title}</p>
          <p className='w-1/6 text-right text-xl pt-1 font-mono hover:text-green-600'>{projectDescription[title].date}</p>

      </div>



      <div className='w-full   flex items-center flex-col'>

        <div className='w-5/6 h-80 text-white flex items-center pl-16 '>
            <p className='w-1/3 text-justify text-lg font-sans '>{projectDescription[title].Description}</p>
        </div>

        <div className='w-5/6 h-96  displayFlex my-5 py-2 '  style={{height:"60vh"}}>
            <div className='w-3/4 h-full  '> 
              <SwiperMod images={projectDescription[title].pictures}/>
            </div>
        </div>


        <div className='w-5/6 h-96  text-white displayFlex flex-col'>
          <h1 className='w-3/4 font-mono text-2xl'>Tools Used</h1>
            <div className='flex flex-wrap w-3/4 h-1/2 justify-between items-center text-white'>
                {projectDescription[title].stack.map(e=><Card name={e}/>)}
            </div>
        </div>
        
        <div className='w-5/6 h-40  text-white displayFlex'>
            <button className='py-3 px-4 hover:bg-black bg-slate-950 rounded relative hover:-translate-y-2 duration-300'><a href={projectDescription[title].ProjectLink}  rel="noreferrer" target='_blank'>Project source code</a></button>
        </div>

      </div>
    </section>
  )
}
