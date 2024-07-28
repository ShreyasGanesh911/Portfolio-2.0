import React, { useState } from 'react'

export default function Grid() {
    const [color,setColor] = useState(false)
  return (
    <div className={`w-7 ${color?"bg-red-400":" "} transition-all duration-200 h-7 border border-slate-600 border-s-0`} onMouseEnter={()=>setColor(true)} onMouseLeave={()=>setTimeout(()=>setColor(false),900)}>
      
    </div>
  )
}
