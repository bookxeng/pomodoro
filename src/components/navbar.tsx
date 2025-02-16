import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className='flex w-full p-4 my-4 mx-auto max-w-[1600px] justify-between items-center'>
        <h1 className='text-2xl font-extrabold'>
            POMODORO
        </h1>
        <div className='flex'>
            <button popoverTarget='popover' className='flex text-xl font-bold mx-2 px-2'>
                Setting<IoSettingsOutline size={30} className='mx-1'/>
            </button>
            <h2 className='text-xl font-bold mx-2 px-2'>
                Theme
            </h2>
        </div>
        <div popover='' id='popover' className='opacity-50 rounded-md'>
            Book
        </div>
    </div>
  )
}

export default Navbar