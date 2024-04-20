import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { errorToast, successToast } from "../../toast";

function ProfileView() {

  const [profile,setProfile] = useState({})
  const [refresh,setRefresh] = useState(true)

  
  const navigate = useNavigate();

  const logout = ()=>{
      localStorage.removeItem("adminToken")
      localStorage.removeItem("adminDetails")
      navigate('/asignup')
  }

  useEffect(()=>{
    fetchAPI()
  },[refresh])

  const fetchAPI = async() =>{
    try {
      const response = await axios.get("http://localhost:3000/api/admin/profile",{headers:{
        'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
      }})

      setProfile(response.data.user)

    } catch (error) {
      errorToast(error.message);
    }
  }

  return (
    <>
    <div className="flex justify-center">
        <div className="m-5 p-5 bg-slate-100 w-[200px] sm:w-[300px] rounded-2xl">
            <Avatar src={profile?.profile}/>    
            <p className='text-xs sm:text-base mt-2'>First Name : {profile.Fname}</p>
            <p className='text-xs sm:text-base'>Second Name : {profile.Lname}</p>
            <p className='text-xs sm:text-base'>Email id : {profile.email}</p>
            <Link to={'update'}><button className='text-xs sm:text-base border mt-3 px-3 border-green-900 rounded hover:bg-green-900 hover:text-white'>Update</button></Link>
            <p className='text-xs sm:text-base'>Come back later? 
              <button onClick={logout} className='text-xs sm:text-base text-green-900 font-bold'>Logout</button>
            </p>
        </div>
    </div>
    <div className="flex justify-center mt-5">
      <Outlet />
    </div>
    </>
  )
}

export default ProfileView
