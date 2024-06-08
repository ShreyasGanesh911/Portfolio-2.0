import React from 'react'
import Card from '../Components/Card'
import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <section id='skills' className='page bg-slate-900 text-white flex items-center justify-start flex-col'>
      <h1 className='w-11/12 text-4xl p-2 text-start '>Skills</h1>
        <div className='w-3/4 '>
        <p className='text-lg'>
        My primary focus is writing clear and understandable code.

        </p>
        </div>

      <div className='w-3/5 h-96 border rounded border-gray-900 bg-black  font-mono '>
          <div className='w-100 flex'>
            <motion.div className='w-1/6 h-32 displayFlex' whileHover={{color:'yellow'}}>
              Languages
            </motion.div>
          <div className='w-5/6  h-28 my-2 flex flex-wrap justify-start items-center'>
          <Card name='python'/>
          <Card name='java'/>
          <Card name='javaScript'/>
          <Card name='typeScript'/>
          <Card name='solidity'/>
        </div>
          </div>
          <div className='w-100 flex'>
            <motion.div className='w-1/6 h-32 displayFlex' whileHover={{color:'yellow'}}>
            Libraries/Frameworks
            </motion.div>
          <div className='w-5/6  h-28 my-2 flex flex-wrap justify-start items-center'>
          <Card name='HTML'/>
          <Card name='CSS'/>
          <Card name='Tailwind CSS'/>
          <Card name='Framer motion'/>
          <Card name='React'/>
          <Card name='Next JS'/>

          <Card name='Django'/>
          <Card name='Node JS'/>
          <Card name='Express JS'/>
          <Card name='Hardhat'/>
          <Card name='Ethers'/>
        </div>
          </div>
          <div className='w-100 flex'>
            <motion.div className='w-1/6 h-32 displayFlex' whileHover={{color:'yellow'}}>
            Tools/Platform
            </motion.div>
          <div className='w-5/6 h-28 my-2 flex flex-wrap justify-start items-center'>
          <Card name='MYSQL'/>
          <Card name='Mongo DB'/>
        </div>
          </div>

      </div>
    </section>
  )
}
