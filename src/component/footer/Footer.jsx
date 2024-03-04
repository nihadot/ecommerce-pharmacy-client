import React from 'react'
import { IoLocation } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=' ms-9 mb-0 mt-32 me-2'>
      <div className='bg-green-700 w-[85%] h-[400px] ms-12 text-white'>
    <div className='bg-green-700 w-[85%] h-[350px] ms-12 flex gap-4 mb-0'>
  <div className='pt-4 mt-3 ms-12 flex-col '>
    
<h1 className='font-medium text-bold '>Contact</h1>
<div className='mt-4 pt-2'>
 
<p className='flex mt-3'>
  <IoLocation className='mt-1' />
  <span>

  123Road,Dhaka,Bangladesh
  </span>
</p >

<p className='flex  mt-2'>
<FaSquarePhone className='mt-1' />+987776576576555</p>
<p className='flex mt-2'>
<MdMarkEmailUnread className='mt-1' />
123Road,Dhaka,Bangladesh
</p>
</div>

  </div>
  <div className='ms-12 mt-3 pt-4'>
    <h1 className='text-bold font-medium'>QuickLinks</h1>
    <div className='mt-6'>
    <p> Home</p>
    <p> About</p>
    <p> Services</p>
    <p>Careers </p>
    <p> contact</p>
    </div>
  </div>
  <div className='ms-12 mt-4 pt-4'>
    <h1 className='text-bold font-medium'>Specialeties</h1>
    <div className='mt-5'>
    <p>Anesthesiology</p>
    <p> Psychatry</p>
    <p> general surgery</p>
    <p> Family Medicine</p>
    <p> Pediatrics</p>
    </div>
  </div>
  <div className='ms-12 pt-3 mt-4'>
    <h1 className='text-bold font-medium'>Services</h1>
    <div className=' mt-5'>
    <p>Medical</p>
    <p> Operation</p>
    <p> Laboratary</p>
    <p> ICU</p>
    <p> Patient Ward</p>
  </div>
  </div>
  <div className=' mt-7 ms-12'>


<h2 className='text-bold font-medium'>Social Media</h2>
<div className='flex gap-8 mt-4'>

 
  <FaFacebook />
  <RiInstagramFill />
  <RiLinkedinBoxLine />
  <FaYoutube />

  </div>
  </div>

    </div>
    <hr className=''/>
    <div className='flex justify-between'>
<div className=' text-sm ms-3 mt-1'>
  <p>2023 HEALTHY.All rights reserved .</p>
</div>
<div className='flex gap-6 justify-between'>
  <p>Terms and Conditions</p>
  <p className='me-1'>Privacy Policy</p>
  
</div>
</div>
</div>

    </footer>


  )
}

export default Footer