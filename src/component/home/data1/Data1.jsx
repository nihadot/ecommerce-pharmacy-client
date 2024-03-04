import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import data1 from "../../images/data1.png"

const Data1 = () => {
  return (
    <>
    <div className=' bg-blue-200 h-[400px] flex'>
    <div className=' main  flex-col mx-10 my-10'>
        
        <p className='font-semibold mt-3 pt 2'> Todays Hot Offer</p>

        <div className='font-bold mt-4 pt-2 text-3xl'>
            <h1>Unlock 50% Off on <br/>
            Essential Medicines !</h1>
        </div>
        <div className='mt-2 pt-2 '>
            <p>Embrace wellness witout breaking the bank!Enjoy a generous<br/>
            25% discount on a wide range of vital medicines at our online<br/>
            pharmacy.Your health matters,and so does your budget</p>
        </div>

<div className='flex justify-around'>
    <button className='  flex justify-between p-2 rounded border-green-300 bg-green-500 text-white mt-4   pt-2 h-[50px] w-[220px]'>
        Place An Order Now
  
    <div className='mt-2'>
    <FaLongArrowAltRight />

    </div>
    </button>
</div>

  </div>

<div className='im'>
<img className=' w-[500px] h-[350px] ms-8 mt-3' src={data1} alt=""/>


</div>





    </div>
    
    
    
    
    </>
   
  )
}

export default Data1