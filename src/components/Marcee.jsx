import React from 'react'
import {motion} from "framer-motion";
function Marcee({valnames}) {
  return (
    <div className='flex w-full  overflow-hidden'>
      <motion.div initial={{x: "0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:15 , repeat:Infinity}} className='flex flex-shrink-0 gap-40 py-8 pr-40'>
        {valnames.map((name,index)=>(<h3 key={index} className='font-sans text-sm flex text-zinc-400'>{name}</h3>))}
        </motion.div> 
        <motion.div initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:15}} className='flex flex-shrink-0 gap-40 py-8 pr-40'>
        {valnames.map((name,index)=>(<h3 key={index} className='font-sans text-sm flex text-zinc-400'>{name}</h3>))}
        </motion.div> 
        
    </div>
  )
}

export default Marcee
