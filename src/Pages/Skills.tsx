import React from 'react'
import Card from '../Components/Card'
import { motion } from 'framer-motion'
const languages = ["java","javaScript",'typeScript','solidity']
const lib = ['HTML','CSS','Tailwind CSS','BootStrap','Framer motion','React','Node Js','Express Js','Hardhat','Ethers']
const tools = ["MYSQL","Mongo DB"]
export default function Skills() {
  return (
    <section id='skills' className='page bg-dark text-white flex items-center justify-center flex-col'>
      <h1 className='sm:w-3/5 w-5/6 my-5 text-3xl p-2 text-start font-semibold text-red-400 '>Skills</h1>

      <div className='sm:w-3/5 w-11/12  h-auto border rounded border-gray-900   font-mono ' style={{backgroundColor:"rgb(32,32,32)"}}>

          <div className='w-100 flex sm:flex-row flex-col items-center'>
            <motion.div className='sm:w-1/6  w-full h-10 sm:h-32 displayFlex' whileHover={{color:'yellow'}}>
              Languages
            </motion.div>
          <div className='sm:w-5/6 w-11/12  sm:h-28 h-auto  my-2 flex flex-wrap sm:justify-start justify-between items-center'>
          {languages.map((e,i)=><Card key={i} name={e}/>)}
        </div>
          </div>

          <div className='w-100 flex sm:flex-row flex-col items-center'>
            <motion.div className='sm:w-1/6  w-full h-10 sm:h-32 displayFlex' whileHover={{color:'yellow'}}>
              <p className='flex'>Libraries/Frameworks</p>
            </motion.div>
          <div className='sm:w-5/6 w-11/12   sm:h-28  h-auto my-2 flex flex-wrap sm:justify-start justify-between items-center'>
            {lib.map((e,i)=><Card key={i} name={e}/>)}
        </div>
          </div>

          <div className='w-100 flex sm:flex-row flex-col items-center'>
            <motion.div className='sm:w-1/6  w-full h-10 sm:h-32 displayFlex'  whileHover={{color:'yellow'}}>
            Tools/Platform
            </motion.div>
          <div className=' sm:w-5/6 w-11/12  sm:h-28  my-2 flex flex-wrap sm:justify-start justify-start items-center'>
            {tools.map((e,i)=><Card key={i} name={e}/>)}
        </div>
          </div>

      </div>
    </section>
  )
}
