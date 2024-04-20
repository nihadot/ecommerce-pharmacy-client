import React from 'react'
import { BsFillHandbagFill } from "react-icons/bs";
// import himagee from "../../images/himagee.png"
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { errorToast, successToast } from "../../toast";
import { ListItem } from '@mui/material';


const Data = () => {

  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/bannerone");
      setBanner(response.data.result);
    } catch (error) {
      console.log(error);
      errorToast(error.response.data.message || "Try Again");
    }
  };









  return (
    <>
      {banner?.map((item, index) => {
        return (
          <>
    <div className='flex bg-green-800 justify-aruond h-[500px]'>
    <div className='mx-10 my-10 text-white leading-snug w-[520px] h-[70px]'>
        <h1 className='text-5xl mt-4 pt-2'>
            {item.title}
        </h1>
<div className=' mt-5 pt-2 leading-snug w-[520px] h-[70px]'>
        <p className=''>
           {item.content}
        </p>
        </div>
        <div className='flex text-center'>
         
        <NavLink  to={"/shopping"} >  <button className='bg-white flex justify-around  align-items-center text-center text-green-600 h-[50px] w-[180px] border-green-500 rounded-md  mt-8'> Start Shopping 
           
            
            <span className='mt-2'><BsFillHandbagFill /></span>
            </button>
            </NavLink>
           
        </div>
        
    </div>
           <div className=' mt-20 pt-2 ms-24'>
            <img className=' w-[500px] h-[350px]' src={item.image} alt=""/>
           </div>








    </div>

    </>
        );
      })}

    </>



  )
}

export default Data