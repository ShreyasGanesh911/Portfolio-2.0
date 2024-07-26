import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
     <nav className=' sticky top-0 bg-black z-10 overflow-hidden' style={{width:'99vw'}}>
      <div className=' bg-dark flex items-center h-28 text-white justify-between'>
       <div className="w-16 ml-14">
       <Link to="/"><img src="https://raw.githubusercontent.com/ShreyasGanesh911/Portfolio/master/src/WebLogo.jpeg" className="object-contain" alt="" /></Link>
       </div>
       <ul className="flex mr-14">
        <li className="mx-8"><a href="#about" aria-current="page">About</a></li>
        <li className="mx-8">Skill Set</li>
        <li className="mx-8"><a href="#projects" aria-current="page">Projects</a></li>
        <li className="mx-8">Contact</li>
       </ul>
      </div>
      </nav> 
    </>
  )
}
