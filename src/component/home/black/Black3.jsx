import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { errorToast, successToast } from "../../toast";

function Black3() {
  const [Banner3, setBanner3] = useState([]);


  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async (e) => {
    try {
      const response = await axios.get("http://localhost:3000/api/banner3");
      console.log(response, "banner3");

      setBanner3(response.data.Banner3);
    } catch (error) {
      errorToast(error.message);
    }
  };


    return (
    <>
    {
      Banner3.map((item)=>{
        return(
          <>
          {/* <div className="flex gap-24 mt-8">
            <div className=''>
                <p className="bg-green-900 text-white w-20 text-center rounded-lg p-1">
                  {item.percentage} OFF
                </p>
                <p className="text-base sm:text-xl">{item.title}</p>
                <p className="font-thin line-through">{item.rate}</p>
                <p className="font-semibold">
                  {item.offerRate}
                  <span className="font-thin">Including Tax</span>
                </p>
              </div>

              <div className="">
                <img src={item.image} alt="" className="w-[15vh]" />
              </div>
              </div> */}
                   <div className='flex w-[478px] h-[200px] bg-green-200 -mx-44 rounded-md mt-7 justify-around'>

<div className='flex-col mt-12'>
<button className='bg-green-600 text-white rounded border border-green-700 h-[40px] w-[100px]'>25%</button>
    <h1 className='font-semibold'>{item.title}</h1>
    <p className='line-through'>${item.rate}</p>
    <div className='flex justify-between'>
 <h2 className='font-bold'>$ {item.offerRate}</h2> <span>including Tax</span> 
 </div>

   </div>

   <div className=''>

     <img className='-my-14 h-[150px] mt-6'src={item.image}></img>
   </div>



  </div>

          </>
        )
      })
    }
    </>
  )
}

export default Black3
