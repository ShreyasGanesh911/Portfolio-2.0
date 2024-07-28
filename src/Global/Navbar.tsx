import { Link } from "react-router-dom";

export default function Navbar() {
  const list = [
    {href:"#about" , text:"about"},
    {href:"#skills" , text:"skill Set"},
    {href:"#projects" , text:"projects"},
    {href:"#contact" , text:"contact"}
  ]
  return (
    <>
     <nav className=' sticky top-0 bg-black z-20 overflow-hidden' style={{width:'99vw'}}>
      <div className=' bg-dark flex items-center h-28 text-white justify-between'>
       <div className="w-16 ml-14">
       <Link to="/"><img src="https://raw.githubusercontent.com/ShreyasGanesh911/Portfolio/master/src/WebLogo.jpeg" className="object-contain" alt="" /></Link>
       </div>
       <ul className="flex mr-14">
        {list.map((e,i)=>
        <li className="mx-8 hover:text-red-400 hover:-translate-y-1 transition-all duration-500 hover:border-b hover:border-red-400 ">
          <a href={e.href} className="capitalize" aria-current="page">{e.text}</a>
        </li>
        )}
       </ul>
      </div>
      </nav> 
    </>
  )
}
