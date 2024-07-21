import React from 'react'
import ProjectCard from '../Components/ProjectCard'

export default function Project() {
  return (
    <section id='projects' className='page bg-dark  text-white py-5'>
        <div className='w-full px-14 '>
          <ProjectCard projectName='Kick Street' navLink='kickstreet' projectLink='https://github.com/ShreyasGanesh911/kick-street'/>
        </div>
         
        <div className='w-full flex flex-row-reverse px-14'>
        <ProjectCard projectName='Script Flow' navLink='scriptflow' projectLink='https://github.com/ShreyasGanesh911/kick-street'/>
        </div>

        <div className='w-full px-14'>
        <ProjectCard projectName='FuelCoach' navLink='fuelcoach' projectLink='https://github.com/ShreyasGanesh911/kick-street'/>
        </div>

        <div className='w-full flex flex-row-reverse px-14'>
        <ProjectCard projectName='Portfolio' navLink='portfolio' projectLink='https://github.com/ShreyasGanesh911/kick-street'/>
        </div>

        <div className='w-full px-14'>
        <ProjectCard projectName='Flask project' navLink='' projectLink='https://github.com/ShreyasGanesh911/kick-street'/>
        </div>
         
         
    </section>
  )
}
