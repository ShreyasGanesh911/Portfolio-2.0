import React from 'react'
import Card from '../Components/Card'
import { motion } from 'framer-motion'
const languages = ["python","java","javaScript",'typeScript','solidity']
const lib = ['HTML','CSS','Tailwind CSS','Framer motion','React','Flask','Node Js','Express Js','Hardhat','Ethers']
const tools = ["MYSQL","Mongo DB"]
export default function Skills() {
  return (
    <section id='skills' className='page bg-dark text-white flex items-center justify-center flex-col'>
      <h1 className='w-3/5 my-5 text-3xl p-2 text-start font-semibold text-red-400 '>Skills</h1>
        <div className='w-3/4 '>
        {/* <p className='text-lg'>
        My primary focus is writing clear and understandable code.

        </p> */}
        </div>

      <div className='w-3/5 h-96 border rounded border-gray-900   font-mono ' style={{backgroundColor:"rgb(32,32,32)"}}>
          <div className='w-100 flex'>
            <motion.div className='w-1/6 h-32 displayFlex' whileHover={{color:'yellow'}}>
              Languages
            </motion.div>
          <div className='w-5/6  h-28 my-2 flex flex-wrap justify-start items-center'>
          {languages.map((e,i)=><Card key={i} name={e}/>)}
        </div>
          </div>
          <div className='w-100 flex'>
            <motion.div className='w-1/6 h-32 displayFlex flex-wrap' whileHover={{color:'yellow'}}>
              <p className='flex'>Libraries/Frameworks</p>
            </motion.div>
          <div className='w-5/6  h-28 my-2 flex flex-wrap justify-start items-center'>
            {lib.map((e,i)=><Card key={i} name={e}/>)}
        </div>
          </div>
          <div className='w-100 flex'>
            <motion.div className='w-1/6 h-32 displayFlex'  whileHover={{color:'yellow'}}>
            Tools/Platform
            </motion.div>
          <div className='w-5/6 h-28 my-2 flex flex-wrap justify-start items-center'>
            {tools.map((e,i)=><Card key={i} name={e}/>)}
        </div>
          </div>

      </div>
    </section>
  )
}
