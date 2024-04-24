import React from 'react'
import { FaBell } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { errorToast} from "../../toast";
import axios from 'axios';
const Aheader = () => {

  const [ user, setUser ] = useState({});

  useEffect(()=>{
    fetchAPI()
  },[])

  const fetchAPI = async() =>{
    try {
      const response = await axios.get(`http://localhost:3000/api/admin/profile/${JSON.parse(localStorage.getItem("adminDetails"))._id}`,{headers:{
        'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
      }})

      setUser(response.data.users)

    } catch (error) {
      errorToast(error.message);
    }
  }



  return (
    <>
    
    <div className=' w-[100%] h-[60px] bg-green-50 text-green-700 flex'>

    


      <div className=' text-green-700 h-[10px] w-[100px] flex gap-1 justify-end  mt-8 mx-[90%]'>

     <p className='h-[40px] me-2'> <FaBell /></p>
     
     
     <p className='text-green-600  text-xs sm:text-base'><span className='mb-[5px]'>{user.Lname}</span> </p>
          <RxAvatar className='mx-5 ms-5  -me-10'/>
      </div>
     
     

    </div>
    
    
    
    
    
    </>
  )
}

export default Aheader