import React from 'react'
import { LuCornerDownRight } from "react-icons/lu";

function Product({val,mover,count}) {
  return (
    <div className='w-full py-10 text-white h-[18rem]'>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
               <h1 className='text-5xl capitalize font-medium'>
                {val.title}
               </h1>
               <div className='details w-full md:w-1/3'>
                <p className='mb-10 '>{val.description}</p>

                {/* button */}
                <div className='flex flex-col md:flex-row items-center gap-10 '>
                <div className='w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between hover:pr-2'>
                      <a href={val.url} target="_blank"><span className='text-sm font-medium'>{val.title}</span></a>
                     <LuCornerDownRight />
              </div>
              <div className='w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
                      <a href={val.url} target="_blank"><span className='text-sm font-medium hover:pl-2'>{val.subscribe? 'Subscribed': 'Subscribe Now'}</span></a>
                     
              </div>

              </div>
            </div>
        </div>
    </div>
  )
}

export default Product
