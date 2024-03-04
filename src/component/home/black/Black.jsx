import React from 'react'
import black from "../../images/black.png"
import black2 from "../../images/black2.png"
import black3 from "../../images/black3.png"


const Black = () => {
  return (
<>

<div className=' flex  justify-between mb-12'>

<div className=' h-[600px]w-[600px] bg-blue-200 flex justify-around rounded-md mx-36 mb-2'>
    <div className='flex-col mt-36  ms-5'>
    <button className='bg-green-600 text-white rounded border border-green-700 h-[40px] w-[100px]'>25%</button>
        <h1 className='mt-2 font-semibold'> BLACK GARLIC OIL</h1>
        <p className='mt-2'>Stronger and Thicker <br/> Hair with Black Garlic<br/>
        Oil.</p>
        <p className='line-through'> $37</p>
        <div className='flex justify-between'>
        <h2 className='font-bold'>$37.00</h2> <span>including Tax</span> 
        </div>
           </div>
          <div className=''>
            <img className='h-[320px] w-[250px] mt-24 ms-32' src={black}></img>
            
             </div> 
    </div>
<div className='flex-col -mx-16 w-[500px]'>

       <div className='flex w-[478px] h-[200px] rounded -mx-44 bg-yellow-200 justify-around'>

          <div className='flex-col ms-3 mt-12'>
           <button className='bg-green-600 text-white rounded border border-green-700 h-[40px] w-[100px]'>25%</button> 
           <h1>Dental Care Set For Vivid<br/>
           and Bright Smiles</h1>
           <p className='line-through'>$33.90</p>
           <div className='flex justify-between'>
        <h2 className='font-bold'>$37.00</h2> <span>including Tax</span> 
        </div>

          </div>

          <div className=''>

            <img className=' h-[150px]'  src={black2}></img>
          </div>



     </div>

         
       <div className='flex w-[478px] h-[200px] bg-green-200 -mx-44 rounded-md mt-7 justify-around'>

       <div className='flex-col mt-12'>
       <button className='bg-green-600 text-white rounded border border-green-700 h-[40px] w-[100px]'>25%</button>
           <h1 className='font-semibold'> BANANA FLAVOURED <br/>TOOTH PASTE</h1>
           <p className='line-through'>$37.00</p>
           <div className='flex justify-between'>
        <h2 className='font-bold'>$37.00</h2> <span>including Tax</span> 
        </div>

          </div>

          <div className=''>

            <img className='-my-14 h-[200px] 'src={black3}></img>
          </div>



         </div>


</div>



</div>






</>
    
  )
}

export default Black