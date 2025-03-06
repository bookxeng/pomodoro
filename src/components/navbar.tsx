'use client'
import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { FaClock } from "react-icons/fa";


function Navbar({timeLeft, setTimeLeft}: {timeLeft: number, setTimeLeft: (time: number) => void}) {
    const [duration, setDuration] = useState<number | string>("")
    const [isActive, setIsActive] = useState<boolean>(false)
    const [isPaused, setIsPaused] = useState<boolean>(false)
    const timerRef = useRef<NodeJS.Timeout | null>(null)
  
    const handleSetDuration = (): void => {
      if(typeof duration === "number" && duration >0){
        setTimeLeft(duration * 60)
        setIsActive(false);
        setIsPaused(false);
        if(timerRef.current){
          clearInterval(timerRef.current)
        }
      }
    }
   
    const handleDurationChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setDuration(Number(e.target.value) || "")
    }

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
        <div popover='' id='popover' className='opacity-100 p-6 rounded-md'>
            <h1 className='flex justify-center m-2 p-2 font-bold text-xl text-gray-500'>SETTING</h1>
            <hr/>
            <div className='flex m-2 px-2 text-gray-500 items-center font-bold text-lg'>
                TIMER <FaClock className='mx-1'/>
            </div>
            <div className='m-2 mt-4 px-2'>
                Time (minutes)
            </div>
            <div className='mx-2 px-2 text-gray-500'>
                Foucs Duration
            </div>
                <div className='flex justify-center mx-2 p-2'>
                <input 
                    type='number'
                    id='duration'
                    placeholder='Enter In Minutes'
                    value={duration}
                    onChange={handleDurationChange}
                    className='border-gray border-2 rounded-md text-black p-2 '
                />
                </div>
            <div className='flex justify-center'>
            <button onClick={handleSetDuration} className=' text-black text-xl font-bold mb-3  '>
                Set
            </button>
            </div>
        </div>
    </div>

  )
}

export default Navbar