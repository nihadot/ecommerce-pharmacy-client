import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { errorToast, successToast } from '../../toast';

function Viewblog() {
  const [ Blogs, setBlogs ] = useState([]);
  const [ refresh, setRefresh ] = useState(true);


    useEffect(()=>{
      fetchAPI()
    },[refresh])

    const fetchAPI = async(e) =>{
      try {
          const response = await axios.get("http://localhost:3000/api/post",{headers:{
            'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
          }})
          console.log(response,"res");
    
          setBlogs(response.data.Blogs)
        } catch (error) {
          errorToast(error.message);
        }
  }


  const handleDelete = async(id)=>{
    try {
      const response = await axios.delete(`http://localhost:3000/api/post/${id}`,{headers:{
            'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
          }})

          setRefresh(!refresh)
      successToast("Deleted Succesfully");
    } catch (error) {
      errorToast(error.message);
    }
  }

  return (
    <>
    <div className="flex flex-wrap justify-center">
      {
        Blogs.map((item)=>{
          const options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: 'Asia/Kolkata', 
          };
          return(
          <>
          <div className="flex gap-8 m-5 p-5 w-[300px] sm:w-[600px] h-[300px] sm:h-[300px] border border-green-400 shadow-md shadow-green-600 rounded-lg">

          <div className="">
              <img src={item.image} alt="" className=' w-[100px] sm:w-[180px] sm:h-[180px]' />
            </div>

          <div className="flex flex-col justify-between">

            <div className="">
              <p className='text-xs sm:text-base'>{new Date(item.date).toLocaleString(options)}</p>
              <p className='text-base sm:text-lg m-3' style={{wordBreak:"break-word"}}>{item.name}</p>
              <p className='text-xs sm:text-base'>{item.description}</p>
            </div>

            <div className=" flex gap-3">
              <Link to={`/admin/editblog/${item._id}`} state={item}><button  className='border border-green-900 px-3 py-1 my-2 hover:bg-green-900 hover:text-white text-xs sm:text-base '>Edit</button></Link>
              <button onClick={()=>handleDelete(item._id)} className='border border-green-900 px-3 py-1 my-2 hover:bg-green-900 hover:text-white text-xs sm:text-base'>Delete</button>
            </div>

          </div>
         
          </div>
          </>
          )
        })
      }
    </div>
    </>
  )
}

export default Viewblog
