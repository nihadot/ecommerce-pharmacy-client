import axios from 'axios';
import { useState } from 'react'
import FileBase64 from 'react-file-base64'
import { errorToast, successToast } from "../../toast";
import { useNavigate } from 'react-router-dom';


const Addbannerone = () => {

    const navigate= useNavigate();

const [image,setImage]=useState('');
const [title,setTitle]=useState('');
const [content,setContent]=useState('')

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/bannerone",
        {
            image:image,
            title: title,
            content: content,
         
        }
      );
      successToast(response.data.message);
      navigate('/admin/viewbannerone')
    } catch (error) {
      errorToast(error.response.data.message, "error");
    }
  };

  return (
    <form className="mt-10 ms-[30%]" onSubmit={handleSubmit}>
      <div className="font-sans ms-[30px] mt-[30px] rounded-lg shadow-2xl w-[350px] bg-slate-100">
        <p className="text-[25px] text-emerald-950 ps-[20px] pt-[20px] font-medium">
          Add Banner1
        </p>
        <div className="ps-[20px] pt-[20px]">
          <img src=''  className="w-[90px] h-[90px]" />
          <FileBase64 onDone={(res) => setImage(res.base64)} />
        </div>
        <div className="ps-[20px] pt-[20px] ">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-[250px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder=" Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="ps-[20px] pt-[20px] ">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-[250px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="Content "
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
       
        <div className="ps-[20px] py-[20px] ">
          <div>
          <button type='submit' className="bg-emerald-950 text-white rounded border border-emerald-800 h-[40px] w-[100px]">
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Addbannerone