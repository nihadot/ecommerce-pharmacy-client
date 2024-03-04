import React from 'react'
import blog1 from "../../images/blog1.png"
import blog2 from "../../images/blog2.png"
import blog3 from "../../images/blog3.png"
import blog4 from "../../images/blog4.png"


const Blog = () => {
  return (
    <>

    <div className='bg-white my-10 '>
      <h1 className='text-center  font-extrabold text-lg mt-3 pt-2'> Our Latest News & Blogs</h1>

    <div className='main flex mt-3'>



        <div className='flex-col h-[700px] w-[500px] bg-white mt-3 ms-4'>
          <div className=''>
        <img className='h-[300px]' src={blog1} alt=""/>
        </div>
         <div className='flex'>
         <button className='font-bold bg-blue-50 ms-6 rounded-md h-[30px] w-[70px]'>Doctor</button>
         <text type='dob'></text>
         </div>
        <h1 className='font-bold ms-6'> In this section, we delve into <br/>Various aspects of health</h1>
        <p className='ms-6 mt-5'>Explore the world of medical specialitiesbthrough our blog's spotlight<br/>
        feature.From cardiology to pediatrics, we share in-depth article written<br/>
        by our expert physician.</p>

        <button className='mt-4 p-2 bg-green-500 rounded-md ms-20 w-[150px]'>Read More</button>

      

          </div>

<div className='flex-col justify-between gap-8 ms-10 bg-white mt-2'>

<div className='one flex justify-between bg-white-200 mt-3 p-2  rounded-medium border-blue-300 rounded'>
    <div className='image bg-gray-400 '>
    <img className=' w-[200px] rounded-md h-[150px]' src={blog2} alt=""/>

    </div>
    <div className='data'>
     <div className='butt flex'>
     <button className='font-bold bg-blue-50 text-green-400 ms-6 rounded-md h-[30px] w-[70px]'>Doctor</button>
        <text className=''  type='const {second} = first'></text>
          
     </div>
     <h1 className='font-bolld mt-3 ms-2'>Discover a treasure trove of practical tips for enhancing</h1>
     <p className='mt-2 ms-2'>From nutrition advice to exercise routines,we're<br/>
     here to support your journey toward a healthier</p>

     <button className='mt-4 p-2 bg-green-500 rounded-md ms-20 w-[150px]'>Read More</button>
   </div>
   </div>




   <div className='two flex bg-white-300 mt-3 p-2'>
    <div className='image bg-gray-50'>
    <img className='w-[200px]  rounded-md h-[150px]' src={blog3} alt=""/>
    </div>



    <div className='data flex-col '>
     <div className='butt flex'>
     <button className='font-bold bg-blue-50  text-green-400 ms-6 rounded-md h-[30px] w-[70px]'>Doctor</button>
        <text className=''  type='const {second} = first'></text>
          
     </div>
     <h1>Discover a treasure trove of practical tips for enhancing</h1>
     <p>From nutrition advice to exercise routines,we're<br/>
     here to support your journey toward a healthier</p>
     <button className='mt-4 p-2 bg-green-500 rounded-md ms-20 w-[150px]'>Read More</button>
</div>

   </div>





   <div className='three flex bg-white-400 rounded-lg border-slate-50 mt-3 p-2'>
    <div className='image rounded-lg'>
    <img className=' w-[200px] h-[150px]  me-2 rounded-md bg-blue-100' src={blog4} alt=""/>

    </div>
    <div className='data'>
     <div className='butt flex'>
     <button className='font-bold bg-blue-50 text-green-400 ms-6 rounded-md h-[30px] w-[70px]'>Doctor</button>
        <text className=''  type='const {second} = first'></text>
          
     </div>
     <h1>Discover a treasure trove of practical tips for enhancing</h1>
     <p>From nutrition advice to exercise routines,we're<br/>
     here to support your journey toward a healthier</p>
     <button className='mt-4 p-2 bg-green-500 rounded-md ms-20 w-[150px]'>Read More</button>

</div>
   </div>













</div>









</div>













    
</div>
    
    
    
    </>
  )
}

export default Blog