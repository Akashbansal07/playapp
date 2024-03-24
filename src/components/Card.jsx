import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { MdPlaylistAdd } from "react-icons/md";
function Card() {
  return (
    <div className='w-full'>
        <div className="max-w-screen-xl mx-auto bg-zinc-800 rounded-lg py-14 p-5 hover:bg-teal-500">
            <div className='w-full'>
                <h3 className='text-3xl flex justify-content items-center gap-3 mb-5'>Create a customized watchlist<MdPlaylistAdd /></h3>
                <div className='w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between  hover:w-44 hover:h-11'>
    <a href="#"><span className='text-sm font-medium'>Create</span></a>
    <CiCirclePlus />
    </div>
            </div>
        </div>
    </div>
  )
}

export default Card