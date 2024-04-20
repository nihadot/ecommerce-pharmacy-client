import axios from 'axios';
import React, { useState } from 'react'
import { errorToast, successToast } from '../../toast';
import { useNavigate } from 'react-router-dom';
import FileBase64 from 'react-file-base64';

function Blogg() {
    const [date,setDate] = useState('');
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [image,setimage] = useState('');


    const navigate = useNavigate();


      const addBlog = async(e) =>{
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:3000/api/post",{image:image,date:date,name:name,description:description},{headers:{
              'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
            }})

            // setProduct(response.data.users)

            successToast("Blog Added Succesfully");
            navigate('/admin/blogs');
          } catch (error) {
            errorToast(error.message);
          }
    }

  return (
    <>
    <div className="">
        <form action="" onSubmit={addBlog}>
            <p className='text-base sm:text-lg mt-3 p-3 text-center'>Add Blogs</p>
            
            <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">

              <div className="flex justify-center items-center sm:ml-0 ml-2 ">
                  <img src={image} alt="loading..." className='bg-green-100 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-lg m-2' />
                <FileBase64 onDone={ (res)=>setimage(res.base64)} />  
              </div>

              <input type='datetime-local' placeholder='date' name='date' value={date}  onChange={(e)=>setDate(e.target.value)} className='outline outline-1 text-xs sm:text-base  px-2' />
              <input type="text" placeholder='title' name='title' value={name}  onChange={(e)=>setName(e.target.value)} className='outline outline-1 text-xs sm:text-base  px-2' />
              <input type="text" placeholder='description' name='description' value={description}  onChange={(e)=>setDescription(e.target.value)} className='outline outline-1 text-xs sm:text-base  px-2' />
              <input type="submit" value="Upload"  className='text-green-900 border-green-900 border text-xs sm:text-base hover:bg-green-900 hover:text-white'/>
            </div>
        </form>
    </div>
    </>
  )
}

export default Blogg
