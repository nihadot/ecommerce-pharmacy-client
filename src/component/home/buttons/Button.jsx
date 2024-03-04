import React from 'react'
import { CiBadgeDollar } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { FaUserDoctor } from "react-icons/fa6";
import { PiStethoscopeLight } from "react-icons/pi";

const Button = () => {
  return (
    <div>
    <div className='flex-col justify-center flex-wrap gap-6 sm:gap-0 sm:flex-row flex  sm:justify-around w-[80%] m-auto my-10'>
        <div  className=' flex items-center justify-between px-mx-3 sm:mx-0  w-[250px] h-[100px] rounded-lg bg-green-200'>
            <div className="flex items-center gap-4">
                <div className=""><CiBadgeDollar /></div>
                <p className='font-semibold text-lg'>Get 25%<br/>OFF</p>
            </div>
            <span><IoIosArrowForward /></span>
        </div>
        <div  className='flex items-center justify-between mx-3 sm:mx-0 px-5 w-[250px] h-[100px] rounded-lg bg-orange-200'>
            <div className="flex items-center gap-4">
                <div className=""><LiaLuggageCartSolid /></div>
                <p className='font-semibold '>Free Home<br/>Delivery</p>
            </div>
            <span><IoIosArrowForward /></span>
        </div>
        <div  className='flex items-center justify-between mx-3 sm:mx-0 px-5 w-[250px] h-[100px] rounded-lg bg-green-400'>
            <div className="flex items-center gap-4">
                <div className=""><FaUserDoctor /></div>
                <p className='font-semibold '>Doctor's<br/>Appoinment</p>
            </div>
            <span><IoIosArrowForward /></span>
        </div>
        <div  className='flex items-center justify-between mx-3 sm:mx-0  px-5 w-[250px] h-[100px] rounded-lg bg-pink-300'>
            <div className="flex items-center gap-4">
                <div className=""><PiStethoscopeLight /></div>
                <p className='font-semibold '>Health<br/>Advice</p>
            </div>
            <span><IoIosArrowForward /></span>
        </div>
        


    </div>
    </div>
  )
}

export default Button