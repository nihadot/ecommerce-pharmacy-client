import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { errorToast, successToast } from "../../toast";

function Viewcategory() {
  const [ category, setCategory ] = useState([]);
  const [ refresh, setRefresh ]  = useState(true);

  // const categories = [
  //   {
  //     category_name: "Category 1",
  //     cate_description: "description about it......"
  //   },
  //   {
  //     category_name: "Category 2",
  //     cate_description: "description about it......"
  //   },
  //   {
  //     category_name: "Category 3",
  //     cate_description: "description about it......"
  //   }
  // ]


  useEffect(()=>{
    fetchAPI()
  },[refresh])

  const fetchAPI = async(e) =>{
    try {
        const response = await axios.get("http://localhost:3000/api/category",{headers:{
          'Authorization':`Bearer ${localStorage.getItem("id")} `
        }})
        console.log(response,"res");
  
        setCategory(response.data.Category)
      } catch (error) {
        setCategory([])
        errorToast(error.response.data.message || error.message || "error try again");
      }
}


const handleDelete = async(id) =>{
  try {
    const response = await axios.delete(`http://localhost:3000/api/category/${id}`,{headers:{
          'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
        }})
    
        setRefresh(!refresh)
    successToast("Deleted Succesfully")
  } catch (error) {
    errorToast(error.message);
  }
}


  return (
    <>
    <div className="flex flex-wrap justify-center">
      {
        category.map((item)=>{
          return(
          <>
          <div className="flex flex-col justify-between items-center bg-green-100 m-5 p-5 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] border border-green-900 shadow-md shadow-green-900 rounded-lg">

          <div className="">
            <p className='text-base sm:text-lg'>{item.name}</p>
            <p className='text-xs sm:text-base'>{item.description}</p>
          </div>

          <div className=" flex gap-3">
            <Link to={`/admin/editcategory/${item._id}`} state={item}><button  className='border border-green-900 px-3 py-1 my-2 hover:bg-green-900 hover:text-white text-xs sm:text-base '>Edit Category</button></Link>
            <button onClick={()=>handleDelete(item._id)} className='border border-green-900 px-3 py-1 my-2 hover:bg-green-900 hover:text-white text-xs sm:text-base'>Delete</button>
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

export default Viewcategory
