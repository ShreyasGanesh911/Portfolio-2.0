import React from 'react'
import Card from '../Components/Card'
import { motion } from 'framer-motion'
import {techStack} from '../Constants/Skills'
export default function Skills() {
  return (
    <section id='skills' className='page bg-dark text-white flex items-center justify-center flex-col'>
      <h1 className='sm:w-3/5 w-5/6 my-5 text-3xl p-2 text-start font-semibold text-red-400 '>Skills</h1>
      <div className='sm:w-3/5 w-11/12  h-auto border rounded border-gray-900   font-mono ' style={{backgroundColor:"rgb(32,32,32)"}}>
        {
          Object.entries(techStack).map(([title,items])=>
          <>
              <div className='w-100 flex sm:flex-row flex-col items-center'>
                <motion.div className='sm:w-1/6  w-full h-10 sm:h-32 displayFlex text capitalize' whileHover={{color:'yellow'}}> {title} </motion.div>
                <div className='sm:w-5/6 w-11/12  sm:h-28 h-auto  my-2 flex flex-wrap sm:justify-start justify-between items-center'>
                  {items.map((e,i)=><Card key={i} name={e}/>)}
                </div>
              </div>

          </>)
        }
      </div>
    </section>
  )
}
