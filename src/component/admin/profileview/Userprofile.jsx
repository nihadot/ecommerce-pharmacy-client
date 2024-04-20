import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { RxAvatar } from "react-icons/rx";
import { errorToast } from '../../toast'

function Userprofile() {

  const [products,setProducts] = useState([])

  useEffect(()=>{
    fetchUsers()
  },[])

  const fetchUsers=async()=>{
    try {
      const response = await axios.get("http://localhost:3000/api/users")
    setProducts(response.data.details)      
    } catch (error) {
      errorToast(error.message || 'error')
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
      products.map((item)=>{
        return( 
        <Fragment>
          <tr>
            <td className='text-green-700 p-5'><RxAvatar /></td>
            <td  className='text-green-700 p-5'>{item.Fname} {item.Lname}</td>
            <td  className='text-green-700 p-5'>{item.email}</td>
            <td  className='text-green-700 p-5'>{item.createdAt}</td>
          </tr>
        </Fragment>
        )
      })
    }
    </table>
    </div>


  )
}

export default Userprofile
