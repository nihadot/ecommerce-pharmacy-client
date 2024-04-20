import React from 'react'
import { useEffect,useState } from 'react'
import { errorToast, successToast } from "../../toast";

import axios from 'axios'
import black from "../../images/black.png"
import black2 from "../../images/black2.png"
import black3 from "../../images/black3.png"


const Black = () => {




  const [Banner, setBanner] = useState([]);
 
  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async (e) => {
    try {
      const response = await axios.get("http://localhost:3000/api/banner");
      console.log(response, "banner1");

      setBanner(response.data.Banner);
    } catch (error) {
      errorToast(error.message);
    }
  };
  return (
    <>
    {
      Banner.map((item)=>{
        return(
          <>
{/*     
          <div className="py-5 sm:py-1 text-left ms-4 mt-8 ">
          <p className="bg-green-900 text-white w-20 text-center rounded-lg p-1">
            {item.percentage} OFF
          </p>
          <p className="text-lg sm:text-2xl font-bold">{item.title}</p>
          <p className="text-sm sm:text-lg">{item.description}</p>
          <p className="font-thin line-through">{item.rate}</p>
          <p className="font-semibold">
            {item.offerRate}
            <span className="font-thin">Including Tax</span>
          </p>
        </div>

        <div className="">
          <img src={item.image} alt="" className="w-[40vh] sm:w-[350px]" />
        </div>
         */}


<div className=' h-[438px] w-[800px] flex justify-around ms-16.6 bg-blue-200 rounded-md mx-32 mb-2'>
    <div className='flex-col mt-36  ms-5'>
    <button className='bg-green-600 text-white rounded border border-green-700 h-[40px] w-[100px]'>{item.percentage} OFF</button>
        <h1 className='mt-2 font-semibold'>{item.title}</h1>
        <p className='mt-2'>{item.description}
        </p>
        <p className='line-through'> {item.rate}</p>
        <div className='flex justify-between'>
        <h2 className='font-bold'>    {item.offerRate}</h2> <span>including Tax</span> 
        </div>
           </div>
         <div className=''>
            <img className='h-[300px] w-[250px]  mt-24 ms-32' src={item.image}></img>

            </div>
    </div>
    
          </>
        )
      })
    }
    </>
  )
}

export default Black;
