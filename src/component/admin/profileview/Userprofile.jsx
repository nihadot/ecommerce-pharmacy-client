import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { RxAvatar } from "react-icons/rx";
import { errorToast } from '../../toast'

function Userprofile() {

  const [profile,setProfile] = useState({})

  useEffect(()=>{
    fetchUsers()
  },[])

  const fetchUsers=async()=>{
    try {
      const response = await axios.get(`http://localhost:3000/api/admin/profile/${localStorage.getItem("id")}`)
    setProfile(response.data.user)      
    } catch (error) {
      errorToast(error.response.data.message || error.message || "error try again");
    }
  }
  return (
    <div className=''>
      <div className=' text-green-600 mt-4 ms-[50%] text-2xl font-semiabold '>
        Customer Details
      </div>
      
      <table className='m-auto mt-10 border-2 ms-[30%] border-green-400 text-green-600 bg-white  h-[100px] w-[400px]'>
            <tr className='mt-5'>
              <th className='text-green-400 p-5'>Profile</th>
              <th className='text-green-400 p-5'>Username</th>
              <th className='text-green-400 p-5'>email</th>
              <th className='text-green-400 p-5'>Created At</th>
            </tr>
         
      {/* login  users view  */}
      
    {
      profile &&
          <tr>
            <td className='text-green-700 p-5'><RxAvatar /></td>
            <td  className='text-green-700 p-5'>{profile.Fname} {profile.Lname}</td>
            <td  className='text-green-700 p-5'>{profile.email}</td>
            <td  className='text-green-700 p-5'>{profile.createdAt}</td>
          </tr>
    
    }
    </table>
    </div>


  )
}

export default Userprofile
