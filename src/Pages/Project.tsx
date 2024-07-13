import React from 'react'
import ProjectCard from '../Components/ProjectCard'

export default function Project() {
  return (
    <section id='projects' className='page bg-slate-900 border text-white py-5'>
        <div className='w-full px-14 '>
          <ProjectCard projectName='Kick Street' projectLink='https://github.com/ShreyasGanesh911/kick-street'/>
        </div>
         
        <div className='w-full flex flex-row-reverse px-14'>
        <ProjectCard projectName='Script Flow' projectLink='https://github.com/ShreyasGanesh911/kick-street'/>
        </div>

        <div className='w-full px-14'>
        <ProjectCard projectName='Fuel Coach' projectLink='https://github.com/ShreyasGanesh911/kick-street'/>
        </div>

        <div className='w-full flex flex-row-reverse px-14'>
        <ProjectCard projectName='Portfolio' projectLink='https://github.com/ShreyasGanesh911/kick-street'/>
        </div>

        <div className='w-full px-14'>
        <ProjectCard projectName='Flask project' projectLink='https://github.com/ShreyasGanesh911/kick-street'/>
        </div>
         
         
    </section>
  )
}
