'use client'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import Navbar from './navbar'

function Content() {

  const [duration, setDuration] = useState<number | string>("")
  const [timeLeft, setTimeLeft] = useState<number>(0)
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

  const handleStart = (): void => {
    if(timeLeft > 0){
      setIsActive(true)
      setIsPaused(false)
    }
  }
  
  const handlePaused =(): void => {
    if(isActive){
      setIsActive(false);
      setIsPaused(true);
    }
    if(timerRef.current){
      clearInterval(timerRef.current)
    }
  }

  const handleReset = (): void => {
    setIsActive(false)
    setIsPaused(false)
    setTimeLeft(typeof duration === "number" ? duration * 60 : 0);
    if(timerRef.current){
      clearInterval(timerRef.current)
    }
  }

  useEffect(() => {
    if(isActive && !isPaused){
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if(prevTime <= 1){
            clearInterval(timerRef.current!);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => {
      if(timerRef.current){
        clearInterval(timerRef.current)
      }
    }
  },[isActive, isPaused])

  const formatTimer = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const handleDurationChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setDuration(Number(e.target.value) || "")
  }


  return (
    <>
    <Navbar timeLeft={timeLeft} setTimeLeft={setTimeLeft}/>
    <div className='flex-col max-w-[1200px] min-h-screen py-8 mx-auto justify-center'>
        <div className='flex justify-center m-6 p-4 text-xl items-center font-extrabold'>
            Let&apos;s focus !!!
        </div>
        <div className='flex justify-center m-4 p-4'>
          <input 
            type='number'
            id='duration'
            placeholder='Enter In Minutes'
            value={duration}
            onChange={handleDurationChange}
            className='border-gray border-2 rounded-md mt-3 text-black p-4'
          />          
        </div>
        <div className='flex justify-center'>
          <button onClick={handleSetDuration} className=' text-white text-xl font-bold mb-3  '>
              Set
          </button>
        </div>
        <div className='flex justify-center font-extrabold text-4xl m-4 p-4'>
          {formatTimer(timeLeft)}
        </div>
        <div className='flex justify-center'>
            <button onClick={handleStart} className='border-2 border-blue-500 rounded-md text-lg font-bold m-2 p-3'>{isPaused ? "Resume" : "Start"}</button>
            <button onClick={handlePaused} className='border-2 border-blue-500 rounded-md text-lg font-bold m-2 p-3'>Paused</button>
            <button onClick={handleReset} className='border-2 border-blue-500 rounded-md text-lg font-bold m-2 p-3'>Reset</button>
        </div>
    </div>
    </>
  )
}

export default Content