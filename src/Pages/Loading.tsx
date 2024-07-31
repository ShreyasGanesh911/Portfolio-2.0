import React from 'react'

export default function Loading() {
  return (
    <div className='fixed top-0 bottom-0 right-0 left-0 w-full h-full displayFlex z-50 bg-black flex-col text-white '>
      <div className='w-32 h-32'>
        <img className='object-contain w-full h-full animate-bounce' src="https://raw.githubusercontent.com/ShreyasGanesh911/Portfolio/master/src/WebLogo.jpeg" alt="" />
        
      </div>
      {/* <p className=' w-3/4 displayFlex border'><span>Loading Content</span><span className='text-xl text-red-400'> . . .</span></p> */}
      <p className='text-4xl  text-red-400 animate-bounce'>----------------</p>
      <p className='text-base '>Good things take <span className='text-red-400'>time</span></p>
    </div>
  )
}
