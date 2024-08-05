import { motion } from "framer-motion"

//import images from '../Assets/Map.png'
// const contactList = [
//   {name:"GitHub",url:""},
//   {name:"Linkdin",url:""},
//   {name:"shreyas.ganesh911@gmail.com",url:"shreyas.ganesh911@gmail.com"},
//   {name:"Reddit",url:"shreyas.ganesh911@gmail.com"},
// ]

export default function Footer() {
  return (
    <div id="contact" className='w-full sm:h-96 h-auto sm:flex justify-evenly relative items-center sm:pt-0 pt-5' style={{width:'99vw',backgroundColor:"rgb(16,16,16)"}}>
      <div className="w-full absolute bottom-0 h-1/6 displayFlex text-white font-semibold text-lg mt-5"><p>Crafted with <span className="text-red-500">Passion</span> by Me </p></div>
      <motion.div
        initial={{scale:0.98,opacity:0,y:-50}} whileInView={{scale:1,opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}} 
      className="sm:h-5/6 h-72 sm:w-1/4 w-full rounded sm:shadow-lg shadow-slate-700 flex justify-center items-center ">
        <img draggable={false} className="sm:w-full w-5/6 h-full object-cover" src={require("../Assets/Map.png")} alt="" />
      </motion.div>
      <div className="h-5/6 w-1/4 "></div>


      <motion.div 
        initial={{scale:0.98,opacity:0,y:50}} whileInView={{scale:1,opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}} 
      className="h-5/6 sm:w-1/4 w-full text-white displayFlex  ">
        <ul className=" flex sm:block sm:w-auto w-full  items-center justify-evenly sm:my-0 my-12">
          <li className="my-2 sm:text-xl text-2xl hover:text-red-400 "><i className="fa-brands fa-github mx-2"></i><span className="sm:inline-block hidden">Github</span></li>
          <li className="my-2 sm:text-xl text-2xl hover:text-red-400 "><i className="fa-brands fa-linkedin mx-2"></i><span className="sm:inline-block hidden">Linkdin</span></li>
          <li className="my-2 sm:text-xl text-2xl hover:text-red-400 "><i className="fa-solid fa-envelope mx-2"></i><span className="sm:inline-block hidden">Mail</span></li>
          <li className="my-2 sm:text-xl text-2xl hover:text-red-400 "><i className="fa-brands fa-discord mx-2"></i><span className="sm:inline-block hidden">Discord</span></li>
          
        </ul>
      </motion.div>
    </div>
  )
}
