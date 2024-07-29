import React, { useState } from 'react'

export default function Grid() {
    const [color,setColor] = useState(false)
  return (
    <div className={`w-7 ${color?"bg-red-500":" "} transition-all duration-200 h-7 border sm:border-slate-700 border-slate-800 border-s-0`} onMouseEnter={()=>setColor(true)} onMouseLeave={()=>setTimeout(()=>setColor(false),900)}>
      
    </div>
  )
}
