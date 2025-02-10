import React from 'react'

function Navbar() {
  return (
    <div className='flex w-full p-4 my-4 mx-auto max-w-[1600px] justify-between items-center'>
        <h1 className='text-2xl font-extrabold'>
            POMODORO
        </h1>
        <div className='flex'>
            <h2 className='text-xl font-bold mx-2 px-2'>
                Settings
            </h2>
            <h2 className='text-xl font-bold mx-2 px-2'>
                Theme
            </h2>
        </div>
    </div>
  )
}

export default Navbar