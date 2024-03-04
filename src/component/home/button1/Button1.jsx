import React from 'react'
import { MdPeopleAlt } from "react-icons/md";
import { LiaMedalSolid } from "react-icons/lia";
import { TbStars } from "react-icons/tb";

const Button1 = () => {
  return (
    <div>
    <div className='flex-col justify-center flex-wrap gap-6 sm:gap-0 sm:flex-row flex  sm:justify-around w-[80%] m-auto my-10'>
        <div  className=' flex-col gap-3  items-center justify-between px-mx-3 sm:mx-0  w-[250px] h-[150px] rounded-lg bg-green-200'>
            <div className="flex items-center gap-4 ms-3 mt-3">
                <div className=""><MdPeopleAlt /></div>
                <span className='font-bold' >14 K +</span>
            </div>
            <p className='font-semibold text-lg ms-4 mt-3'>Orders<br/>Compleeted</p>
          

        </div>
        <div  className=' flex-col gap-3  items-center justify-between px-mx-3 sm:mx-0  w-[250px] h-[150px] rounded-lg bg-orange-100'>
            <div className="flex items-center gap-4 ms-3 mt-3">
                <div className=""><LiaMedalSolid /></div>
                <span className='font-bold' >250 +</span>
            </div>
            <p className='font-semibold text-lg ms-4 mt-3'>Won<br/>Awards</p>
          

        </div>
        <div  className=' flex-col gap-3  items-center justify-between px-mx-3 sm:mx-0  w-[250px] h-[150px] rounded-lg bg-green-300'>
            <div className="flex items-center gap-4 ms-3 mt-3">
                <div className=""><MdPeopleAlt /></div>
                <span className='font-bold' >8k+</span>
            </div>
            <p className='font-semibold text-lg ms-4 mt-3'>Happy<br/>Customers</p>
          

        </div>
        <div  className=' flex-col gap-3  items-center justify-between px-mx-3 sm:mx-0  w-[250px] h-[150px] rounded-lg bg-pink-200'>
            <div className="flex items-center gap-4 ms-3 mt-3">
                <div className=""><TbStars /></div>
                <span className='font-bold' >12k+</span>
            </div>
            <p className='font-semibold text-lg ms-4 mt-3'>Positive<br/>Reviews</p>
          

        </div>
        

    </div>
    </div>
  )
}

export default Button1