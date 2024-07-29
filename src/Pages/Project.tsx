import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import { projectList } from '../Constants/projectList'

export default function Project() {
  return (
    <section id='projects' className='page bg-dark flex flex-col  text-white py-5 displayFlex pt-24'>

      <h1 className='  text-3xl px-5 py-2 w-11/12 text-start  font-semibold  text-red-400 my-2'>Projects</h1>

        <div className='w-11/12 flex-col '>

          {projectList.map((e,i)=>
          <div className='w-full  flex sm:px-5  justify-center  ' key={i}>
              <ProjectCard image={e.image} projectName={e.name} reverse={i%2===0 ? true:false} key={i} navLink={e.nav} projectLink={e.link}/>
          </div>
          )}

        </div>
         
         
    </section>
  )
}
