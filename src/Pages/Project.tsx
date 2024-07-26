import React from 'react'
import ProjectCard from '../Components/ProjectCard'

export default function Project() {
  return (
    <section id='projects' className='page bg-dark  text-white py-5 '>
        <div className='w-full flex sm:px-5  justify-center sm:justify-normal'>
          <ProjectCard projectName='Kick Street' navLink='kickstreet' projectLink='https://github.com/ShreyasGanesh911/kick-street'/>
        </div>
         
        <div className='w-full flex sm:flex-row-reverse sm:px-5 justify-center sm:justify-normal'>
        <ProjectCard projectName='Script Flow' navLink='scriptflow' projectLink='https://github.com/ShreyasGanesh911/kick-street'/>
        </div>

        <div className='w-full flex sm:px-5 justify-center sm:justify-normal'>
        <ProjectCard projectName='FuelCoach' navLink='fuelcoach' projectLink='https://github.com/ShreyasGanesh911/kick-street'/>
        </div>

        <div className='w-full flex  justify-center sm:flex-row-reverse sm:px-5 sm:justify-normal'>
        <ProjectCard projectName='Portfolio' navLink='portfolio' projectLink='https://github.com/ShreyasGanesh911/kick-street'/>
        </div>

        <div className='w-full flex sm:px-5 justify-center sm:justify-normal'>
        <ProjectCard projectName='Flask project' navLink='' projectLink='https://github.com/ShreyasGanesh911/kick-street'/>
        </div>
         
         
    </section>
  )
}
