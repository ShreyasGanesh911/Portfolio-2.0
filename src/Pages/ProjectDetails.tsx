import React from 'react'
import Card from '../Components/Card'
const tools = ['React','Mongo DB','Express Js','Node Js']
export default function ProjectDetails() {
  return (
    <section className='page bg-slate-900 border relative'>

      <div className='fixed bg-black w-48 h-28 bottom-10 right-10 text-white'>
        <p className='w-full m-2'>Next project <i className="fa-solid fa-arrow-right ml-1"></i></p>
        <p className='w-full m-2 text-xl'>Kick Street</p>
      </div>
      <div className='w-full h-48 bg-red-50 flex justify-center pl-16 items-start flex-col'>
          <p className='text-6xl w-3/4'>Project title</p>
          <p className='w-1/6 text-right font-mono'>20-July-2024</p>

      </div>
      <div className='w-full bg-yellow-200 border flex items-center flex-col'>

        <div className='w-5/6 h-96 bg-slate-500'>
            <p className='w-1/3 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, cum qui tempore est dicta nam eveniet. Consectetur at nemo amet odit sapiente dolorem nobis placeat optio quis expedita temporibus maiores, doloremque alias maxime reiciendis doloribus voluptate beatae officia fugit, excepturi ipsum perferendis minima nostrum! Maxime fugiat eligendi ipsum iste tenetur, consectetur recusandae vel. Maiores voluptates sunt, repellat saepe excepturi qui.</p>
        </div>

        <div className='w-5/6 h-96 bg-pink-300 displayFlex py-2'>
            <div className='w-3/4 h-full border '> </div>
        </div>


        <div className='w-5/6 h-96 bg-indigo-500 text-white'>
            <div className='flex flex-wrap w-3/4 text-white'>
                {tools.map(e=><Card name={e}/>)}
            </div>
        </div>
        <div className='w-5/6 h-96 bg-violet-500 text-white'>
            <button className='py-2 px-1 border'>Project source code</button>
        </div>

      </div>
    </section>
  )
}
