import React from 'react'

export default function About() {
  return (
    <>
    <section id='about' className='page bg-dark text-white flex items-center justify-around'>

      <div className='h-full w-1/3 border' style={{height:'60vh'}}>
      About
      <p className='text-justify'>
      I'm an arising web developer based in Bengaluru. I am a third-year student at RV Institute Of Technology And Management, Bengaluru, majoring in information science. The ability to create software that solves real-world problems and enhances user experiences has always captivated my imagination . I have some experience in web development, and I'm seeking for internships to hone my abilities.

      </p>

      <div className='w-2/5 flex justify-evenly  '>
          <button className='border rounded px-1 py-2'><i className="fa-solid fa-file mx-1"></i>Resume</button>
          <button className='border rounded px-1 py-2'><i className="fa-brands fa-github  mx-1"></i>Github</button>

      </div>
      </div>
      <div className='h-full w-1/3 border displayFlex' style={{height:'60vh'}}>
      <div className='h-96 w-96 bg-yellow-300'></div>
     </div>
      </section> 
    </>
  )
}
