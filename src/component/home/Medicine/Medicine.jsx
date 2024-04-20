import React from 'react'
import eimage from "../../images/eimage.png"

const Medicine = () => {
  return (
    <>
    <div className='flex bg-green-800 justify-aruond h-[500px]'>
    <div className='mx-10 my-10 text-white flex-col' >
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
        <div className='mx-10 my-10 text-white'>
        <h1 className='text-5xl mt-4 pt-2'>
        essential medicines <br/> you must keep at home!
        </h1>
       </div>
       
        
    </div>
           <div className=' mt-20 pt-2 ms-24'>
            <img className=' w-[500px] h-[350px]' src={eimage} alt=""/>
           </div>








    </div>
    
    
    </>
  
  )
}

export default Medicine