import React from 'react'
import { BsFillHandbagFill } from "react-icons/bs";
import himagee from "../../images/himagee.png"


const Data = () => {
  return (
    <>
    <div className='flex bg-green-800 justify-aruond h-[500px]'>
    <div className='mx-10 my-10 text-white'>
        <h1 className='text-5xl mt-4 pt-2'>
            Your Prescription for <br/>Affordable Health<br/> Solutions !
        </h1>
<div className=' mt-5 pt-2'>
        <p className=''>
            Elevate Your Health journey with exclusive discounts and
            unparalleled<br/> convenience . Your path to well-being stars here,where
            every puechase<br/> is a prescription for savings .
        </p>
        </div>
        <div className='flex text-center'>
         
            <button className='bg-white flex justify-around  align-items-center text-center text-green-600 h-[50px] w-[180px] border-green-500 rounded-md  mt-8'> Start Shopping 
           
            
            <span className='mt-2'><BsFillHandbagFill /></span>
            </button>
           
        </div>
        
    </div>
           <div className=' mt-20 pt-2 ms-24'>
            <img className=' w-[500px] h-[350px]' src={himagee} alt=""/>
           </div>








    </div>
    </>



  )
}

export default Data