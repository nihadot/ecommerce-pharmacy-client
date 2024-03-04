import React from 'react'
import { FaClinicMedical } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BsMinecartLoaded } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <div className='shadow-md w-full  flex'>
      <div className='md:px-10 py-4 px-7 bg-white '>
        <div className='text-green-700'>
        <FaClinicMedical className='w-7 h-7 text-green-700' />
         <span className='text-green-700'>Medico Store</span> 
        </div>
       
      </div>

      <div className=''>
            <button className='bg-green-800 h-[30px] rounded-md w-[50px] mt-8 text-white'>Login</button>
        </div>

        <div className=''>
            <button className='bg-green-800 h-[30px] rounded-md ms-3 w-[80px] mt-8 text-white'>Sign Up</button>
        </div>


      {/* <div className='text-green-700  mt-10 ml-10'> */}
          {/* <label>All Categories</label><span>
          <input type='text' placeholder=' search medical product' className='border-2 border-green-700 ml-2 object-right' ></input>
          </span>
        </div>
        <div className='w-7 h-9 mt-10 ml-3'>
          <button className='w-7 h-7 bg-green-700 rounded'><span className='text-white'><IoSearch /></span></button>
        </div> */}
        
<form className="max-w-lg mx-auto">
    <div className="flex mt-5">
        <label for="search-dropdown" className="mb-2 text-sm font-medium text-green-700 sr-only dark:text-green-700">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-green-900 bg-green-100 border border-green-300 rounded-s-lg hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-100 dark:bg-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-700 dark:text-white dark:border-green-600" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-green-100 rounded-lg shadow w-44 dark:bg-green-700">
            <ul className="py-2 text-sm text-green-700 dark:text-green-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-green-100 dark:hover:bg-green-600 dark:hover:text-green-700">Mockups</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-green-100 dark:hover:bg-green-600 dark:hover:text-green-700">Templates</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-green-100 dark:hover:bg-green-600 dark:hover:text-green-700">Design</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-green-100 dark:hover:bg-green-600 dark:hover:text-green-700">Logos</button>
            </li>
            </ul>
        </div>
        <div className="relative w-full ">
            <input type="search" id="search-dropdown" className="block p-2.5 w-[500px]  z-20 text-sm text-green-900 bg-green-50 rounded-e-lg border-s-green-50 border-s-2 border border-green-300 focus:ring-green-500 focus:border-green-500 dark:bg-green-700 dark:border-s-green-700  dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:border-green-700" placeholder="Search Mockups, Logos, Design Templates..." required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-green-700 rounded-e-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>

        <div>
        <BsFillSuitHeartFill  className='text-green-700 mt-11 me-12'/>
        </div>
        <div className=' mt-11 me-12'>
        <BsMinecartLoaded className='text-green-700' />
        </div>
        <div className=' me-12 mt-11'>
        <RxAvatar className='text-green-700' />
        </div>
    </div>
    
   

      

    





  


    
  )
}

export default Header