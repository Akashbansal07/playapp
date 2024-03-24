import React, { useState } from 'react'
import Product from './Product';
import { motion } from "framer-motion"

function Produts() {
    var products=[
        {title:"Netflix",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ",live:true,url:"https://www.netflix.com/in/",subscribe:true},
        {title:"Prime Video",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ",live:true,url:"https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root",subcribe:false},
        {title:"Disney+ Hotstar",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ",live:true,url:"https://www.hotstar.com/in/home?ref=%2Fin",subcribe:false},
        {title:"Zee5",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ",live:true,url:"https://www.zee5.com/",subscribe:true},
        {title:"Sony liv",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ",live:true,url:"https://www.sonyliv.com/",subscribe:true}
    ];

const[pos,setPos]=useState(0);
const mover = (val)=>{
  setPos(val*18);
}

  return (
    <div className='mt-10  relative'>
        {products.map((val,index)=><Product key={index} val={val} mover={mover} count={index} />)}
      <div className=' absolute top-0 w-full h-full pointer-events-none '>
        <motion.div 
        initial={{y:pos}} 
        animate={{y:pos+`rem`}}
        transition={{ease:[0.76,0,0.24,1], duration: .6}}
        className='window absolute w-0 md:w-[16rem] lg:w-[26rem] h-[18rem] left-1/3 overflow-hidden rounded-lg'>
                 <motion.div transition={{ease:[0.76,0,0.24,1], duration: .4}} animate={{y:-pos+`rem`}} className='w-full h-full  left-1/3 rounded-lg'>
    <video className='object-cover aspect-[3/2.2]' src="./src/videos/Netflix.mp4" type="video/mp4"  autoPlay muted loop></video>
</motion.div>
<motion.div transition={{ease:[0.76,0,0.24,1], duration: .4}} animate={{y:-pos+`rem`}} className='w-full h-full left-1/3 rounded-lg'>
    <video className='object-cover aspect-[3/2.3]' src="./src/videos/Prime.mp4" type="video/mp4"  autoPlay muted loop></video>
</motion.div>
<motion.div transition={{ease:[0.76,0,0.24,1], duration: .4}} animate={{y:-pos+`rem`}} className='w-full h-full left-1/3 rounded-lg'>
    <video src="./src/videos/disney.mp4" type="video/mp4"  autoPlay muted loop></video>
</motion.div>
<motion.div transition={{ease:[0.76,0,0.24,1], duration: .4}} animate={{y:-pos+`rem`}} className='w-full h-full left-1/3 rounded-lg'>
    <video className='object-cover aspect-[4/2.8]' src="./src/videos/zee5.mp4" type="video/mp4" autoPlay muted loop></video>
</motion.div>
<motion.div transition={{ease:[0.76,0,0.24,1], duration: .4}} animate={{y:-pos+`rem`}} className='w-full h-full left-1/3 rounded-lg'>
    <video className='object-cover aspect-[4/2.8]' src="./src/videos/sonyliv.mp4" type="video/mp4" autoPlay muted loop></video>
</motion.div>




          
                
        </motion.div>
        <video src=""></video>
      </div>
    </div>
  )
}

export default Produts;
