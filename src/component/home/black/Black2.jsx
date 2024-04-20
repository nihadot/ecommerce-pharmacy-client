import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { errorToast, successToast } from "../../toast";

function Black2() {
  const [Banner2, setBanner2] = useState([]);


  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async (e) => {
    try {
      const response = await axios.get("http://localhost:3000/api/banner2");
      console.log(response, "banner2");

      setBanner2(response.data.Banner2);
    } catch (error) {
      errorToast(error.message);
    }
  };

  return (
    <>
    {
      Banner2.map((item)=>{
        return(
          <>
          {/* <div className='flex'>
           <div className="">
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
               <div className='flex w-[478px] h-[200px] rounded -mx-44 bg-yellow-200 justify-around'>

<div className='flex-col ms-3 mt-12'>
 <button className='bg-green-600 text-white rounded border border-green-700 h-[40px] w-[100px]'> {item.percentage} OFF</button> 
 <h1>{item.title}</h1>
 <p className='line-through'>${item.rate}</p>
 <div className='flex justify-between'>
<h2 className='font-bold'> ${item.offerRate}</h2> <span>including Tax</span> 
</div>

</div>

<div className=''>

  <img className=' h-[120px] mt-6'  src={item.image}></img>
</div>



</div>

          </>
        )
      })
    }
    </>
  )
}

export default Black2
