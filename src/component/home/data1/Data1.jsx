import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
// import data1 from "../../images/data1.png"
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { errorToast, successToast } from "../../toast";

const Data1 = () => {

  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/bannertwo");
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
    <div className=' bg-blue-200 h-[400px] flex sm:flex-wrap'>
    <div className=' main  flex-col mx-10 my-10'>
        
        <p className='font-semibold mt-3 pt 2'> Todays Hot Offer</p>

        <div className='font-bold mt-4 pt-2 text-3xl leading-snug w-[450px] h-[206px]'>
            <h1>{item.title}</h1>
        </div>
        <div className='-mt-20 mb-1 pt-2 leading-snug w-[520px] h-[70px]'>
            <p>{item.content}</p>
        </div>

<div className='flex justify-around'>
  <NavLink to={"/essential"}>
    <button className='  flex justify-between p-2 rounded border-green-300 bg-green-500 text-white mt-4   pt-2 h-[50px] w-[220px]'>
        Place An Order Now
  
    <div className='mt-2'>
    <FaLongArrowAltRight />

    </div>
    
    </button>
    </NavLink>
</div>

  </div>

<div className='im'>
<img className=' w-[500px] h-[350px] ms-8 mt-3 ' src={item.image} alt=""/>


</div>





    </div>
    
    
    </>
        );
      })}
    
    </>
   
  )
}

export default Data1