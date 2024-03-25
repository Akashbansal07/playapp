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
                 <motion.div transition={{ease:[0.76,0,0.24,1], duration: .4}} animate={{y:-pos+`rem`}} className='w-full h-full  left-1/3 rounded-lg bg-sky-700'>
    <video className='object-cover aspect-[3/2.2]' src="https://cdn-useast1.kapwing.com/collections/final_629ab1d2163bae00885a101f_71856.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1712543756&Signature=hS2bfG0M3lEujC9CCtnP0kWw4SfUVmT%2BfTpZy0liTmTvWexEC6RBW%2F6RqIJC%2BnVFGNdbcDp0n3IfPCjeFlETrDwbNmwBsv8s%2FTMLafE1YnwovRQLwfUqhStR8s5HPJe0kbGCEcmMfb7aLN8J2Lqm6Zew9yMHv0UsqNMsEv3ojNoGI%2FZRZcT1vJKSQuTKJGMpYtfDRnLhEd9RtqceRrbjoTt2kXNaGdC%2BBPD9IqM%2BSLt1cE1x05xY0PctimLUHX%2F4xTKacGYI%2BjUxWN0i6KJiY5XPHsxd0%2BnyEo%2Fl%2BOcMYOkKScZjceg5pzoDc1z2jNA2bvV0as30CWugHHEQ7A0gHQ%3D%3D" type="video/mp4"  autoPlay muted loop></video>
</motion.div>
<motion.div transition={{ease:[0.76,0,0.24,1], duration: .4}} animate={{y:-pos+`rem`}} className='w-full h-full left-1/3 rounded-lg bg-sky-600'>
    <video className='object-cover aspect-[3/2.3]' src="https://github.com/Akashbansal07/playapp/blob/main/src/videos/Prime.mp4" type="video/mp4"  autoPlay muted loop></video>
</motion.div>
<motion.div transition={{ease:[0.76,0,0.24,1], duration: .4}} animate={{y:-pos+`rem`}} className='w-full h-full left-1/3 rounded-lg bg-sky-500'>
    <video src="./disney.mp4" type="video/mp4"  autoPlay muted loop></video>
</motion.div>
<motion.div transition={{ease:[0.76,0,0.24,1], duration: .4}} animate={{y:-pos+`rem`}} className='w-full h-full left-1/3 rounded-lg bg-sky-400'>
    <video className='object-cover aspect-[4/2.8]' src="./zee5.mp4" type="video/mp4" autoPlay muted loop></video>
</motion.div>
<motion.div transition={{ease:[0.76,0,0.24,1], duration: .4}} animate={{y:-pos+`rem`}} className='w-full h-full left-1/3 rounded-lg bg-sky-300'>
    <video className='object-cover aspect-[4/2.8]' src="/src/videos/sonyliv.mp4" type="video/mp4" autoPlay muted loop></video>
</motion.div>




          
                
        </motion.div>
        <video src=""></video>
      </div>
    </div>
  )
}

export default Produts;
