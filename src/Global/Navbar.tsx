import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const list = [
    {href:"#about" , text:"about"},
    {href:"#skills" , text:"skill Set"},
    {href:"#projects" , text:"projects"},
    {href:"#contact" , text:"contact"}
  ]
  const [screen,setScreen] = useState(0)
  const [show,setShow] = useState(false)
  const [toggle,setToggle] = useState(false)

  const checkScroll = ()=>{
    const currentScroll = window.pageYOffset
    if(currentScroll>1040){
      setShow(true)
    }
    if(currentScroll<1040){
      setShow(false)
    }
    setScreen(currentScroll)
  }
  useEffect(()=>{
    window.addEventListener("scroll",checkScroll)
    return()=> window.removeEventListener("scroll",checkScroll)
  },[screen,show])
  return (
    <>
     {show && <nav className={` w-full  sticky top-0 bg-black z-20 `} >
      <div className={` bg-dark flex w-full  items-center h-28 text-white justify-between ${!show?'bg-white':"bg-green-500"}`}>
       <div className="w-16 sm:ml-14 ml-8">
       <Link to="/"><img src="https://raw.githubusercontent.com/ShreyasGanesh911/Portfolio/master/src/WebLogo.jpeg" className="object-contain" alt="" /></Link>
       </div>
        <button onClick={()=>setToggle(true)} className="sm:hidden flex absolute top-10 text-4xl right-5"><i className="fa-solid fa-bars"></i></button>

        {toggle && 
        <motion.div initial={{scale:0.99,opacity:0,x:100}} animate={{scale:1,opacity:1,x:0}}  transition={{duration:0.2}} 
        className="bg-dark w-3/5   fixed h-full top-0 right-0 " >
          <button className=" m-3 mx-3 float-right text-6xl  " onClick={()=>setToggle(false)}>&times;</button>
          <ul className="flex flex-col  w-full mr-14">
        {list.map((e,i)=>
        <li onClick={()=>setToggle(false)} key={i} 
        className="mx-8 hover:text-red-400 hover:-translate-y-1 transition-all duration-500 hover:border-b text-xl my-2 hover:border-red-400 ">
          <a href={e.href} className="capitalize" aria-current="page">{e.text}</a>
        </li>
        )}
       </ul>
        </motion.div>}
       <ul className="sm:flex hidden  mr-14">
        {list.map((e,i)=>
        <li key={i} className="mx-8 relative  hover:border-cyan-400 text-slate-300 hover:text-white ">
          <p className="text-xs text-cyan-500 font-mono text-end">0{i+1}</p>
          <a href={e.href} className="capitalize" aria-current="page"><span className="mr-1 text-cyan-500">{'//'}</span>{e.text}</a>
        </li>
        )}
       </ul>

      </div>
      </nav> }
    </>
  )
}
