import React from 'react'
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-gray-700'>
        <div className='flex-col max-w-[1200px] p-4 mx-auto mt-4 justify-center items-center '>
            <div className='text-lg font-bold underline'>
                What is POMODORO?
            </div>
            <br/>
            <span>
                <a href='https://en.wikipedia.org/wiki/Pomodoro_Technique' className='hover:text-blue-500'>The Pomodoro Technique</a> is a time management method developed by Francesco Cirillo in the late 1980s. It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.

                Apps and websites providing timers and instructions have widely popularized the technique. Closely related to concepts such as timeboxing and iterative and incremental development used in software design, the method has been adopted in pair programming contexts.
            </span>
            <div className='flex justify-center items-center my-4 py-4'>
                Made by Pongnapat L.
            </div>
            <ul className='flex justify-center items-center my-2 pt-2'>
                <a href='https://github.com/bookxeng'>
                    <FaGithub size={45} className='hover:scale-125 duration-150'/>
                </a>
            </ul>
        </div>
    </div>
  )
}

export default Footer