import { Avatar } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import FileBase64 from 'react-file-base64';
import { errorToast, successToast } from "../../toast";


function UpdateProfile() {

    const [editData,setEditData] =useState({profile:'',Fname:'',Lname:'',email:''})
    const [refresh,setRefresh] = useState(true)


    const onChangeValues = (e) => {
      setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) =>{
      e.preventDefault();
      try {
        const response = await axios.put("http://localhost:3000/api/admin/profile",editData,{headers:{
          'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
        }})
        console.log(response, 'response');
        setRefresh(!refresh);
  
        // setProfile(response.data.user)
      } catch (error) {
        errorToast(error.message);
      }
    }

  return (
    <>
    <div className="">
    <form action="" onSubmit={handleSubmit}>
            <p className='text-base sm:text-lg mt-3 p-3 text-center'>Update your profile</p>
      
            <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">
            <Avatar src={editData.profile} className=''/>    
                
            <FileBase64 onDone={ (res)=>setEditData({...editData,profile:res.base64}) } />

                <input  value={editData.Fname}  type="text" placeholder='first name' name='Fname' onChange={onChangeValues} className='outline outline-1 text-xs sm:text-base  px-2' />
                <input  value={editData.Lname} type="text" placeholder='second name' name='Lname' onChange={onChangeValues} className='outline outline-1 text-xs sm:text-base  px-2' />
                <input  value={editData.email} type="email" placeholder='email' name='email' onChange={onChangeValues} className='outline outline-1 text-xs sm:text-base  px-2' />
{JSON.stringify(editData)}
                <input type="submit" className='text-green-900 border-green-900 border text-xs sm:text-base hover:bg-green-900 hover:text-white'/>
            </div>
        </form>
    </div>
    </>
  )
}

export default UpdateProfile
