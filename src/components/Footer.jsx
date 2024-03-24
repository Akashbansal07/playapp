import React from 'react'
import { FaPlay } from "react-icons/fa6";

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex flex-col md:flex-row gap-32'>
                <div className='w-full md:w-1/2'>
                   <h1 className='text-9xl flex justify-center md:justify-start items-center text-zinc-300 '> PLAY<FaPlay /></h1>
                </div>
                <div className='w-full py-10 flex justify-end'>
                    <div className='w-full w-1/3'>
                        <h4 className='mb-10 text-zinc-400 capitalize'>socials</h4>
                       {["instagram","X","LinkedIn"].map((item,index)=> <a key={index} className='block mt-3 text-zinc-600 capitalize'>{item}</a>)}
                    </div>
                    
                </div>
        </div>
    </div>
  )
}

export default Footer
