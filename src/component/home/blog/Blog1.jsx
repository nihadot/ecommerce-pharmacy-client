import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Blog1 = () => {


    const [ blogs,setBlogs ] = useState([]);


    useEffect(()=>{
        fetchAPI()
      },[])
    
    
      const fetchAPI = async(e) =>{
        try {
            const response = await axios.get("http://localhost:3000/api/post",{headers:{
              'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
            }})
            console.log(response,"res");
      
            setBlogs(response.data.Blog)
          } catch (error) {
            errorToast(error.message)
          }
    }


    const title_blog = 'In this section, we delve into various aspects of health ';
   











  return (
   <>
   
   
   
   
{/*    
   <div className='bg-white my-10 '>
      <h1 className='text-center  font-extrabold text-lg mt-3 pt-2'> Our Latest News & Blogs</h1>

    <div className='main flex sm:flex-wrap mt-3'>



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
    
    
       
   
    */}

<p className='text-2xl sm:text-4xl font-medium text-center mt-10'>Our Latest News & Blogs</p>
    <div className="flex flex-wrap justify-center m-2">

    { blogs?.map((item,index)=>{
            
            if(index==0){
            return(
              <>
        <div className="bg-green-50 px-10 py-2 rounded-lg flex flex-col items-center justify-center sm:w-[700px]">
            <div className="">
                <img src={item.image} alt="" width="300px" />
            </div>
            <div className="mt-8">
                <div className="flex gap-5">
                    <p className='p-1 text-sm bg-green-800 rounded text-white'>Doctor</p>
                    <p className='sm:font-medium p-1'>{item.date}</p>
                </div>
                <div className="">
                    <p className='text-lg sm:text-3xl'>{title_blog.length > 33 ? title_blog.slice(0,33) + '...' : title_blog }</p>
                    <p className='sm:text-base text-xs'>{item.description}</p>
                    <Link to={'readmore'}>
                        <button className='bg-green-800 text-xs sm:text-base text-white px-2 py-1 rounded-md mt-2 hover:bg-slate-300'>Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    
    </>
    )
}

}) }


    <div className="">
        
        { blogs?.map((item,index)=>{
            
                if(index==1){
                return(
                    <>
                    <div className="flex sm:flex-row flex-col items-center bg-blue-100 rounded-xl m-2 p-5 gap-1 sm:w-[500px]">
                        <div className="">
                            <img src={item?.image} alt="" width="150px" />
                        </div>
                        <div className="">
                            <div className="flex gap-5">
                                <p className='p-1 text-sm bg-green-800 rounded text-white'>Doctor</p>
                                <p className='sm:font-medium p-1'>{item.date}</p>
                            </div>
                            <div className="">
                                <p className='text-lg sm:text-3xl font-medium'>{title_blog.length > 33 ? title_blog.slice(0,33) + '...' : title_blog }</p>
                                <p className='sm:text-base text-xs'>{item.description}</p>
                                <Link to={'readmore'}>
                                    <button className='bg-green-800 text-xs sm:text-base text-white px-2 py-1 rounded-md mt-2 hover:bg-slate-300'>Read More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </>
                )
            }
           
        }) }
        

        { blogs?.map((item,index)=>{
            
                if(index==2){
                return(
                    <>
                    <div className="flex sm:flex-row flex-col items-center bg-grey-100 rounded-xl m-2 p-5 gap-1 sm:w-[500px]">
                        <div className="">
                            <img src={item?.image} alt="" width="150px" />
                        </div>
                        <div className="">
                            <div className="flex gap-5">
                                <p className='p-1 text-sm bg-green-800 rounded text-white'>Doctor</p>
                                <p className='sm:font-medium p-1'>{item.date}</p>
                            </div>
                            <div className="">
                                <p className='text-lg sm:text-3xl font-medium'>{title_blog.length > 33 ? title_blog.slice(0,33) + '...' : title_blog }</p>
                                <p className='sm:text-base text-xs'>{item.description}</p>
                                <Link to={'readmore'}>
                                    <button className='bg-green-800 text-xs sm:text-base text-white px-2 py-1 rounded-md mt-2 hover:bg-slate-300'>Read More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </>
                )
            }
           
        }) }
       
        {/* right-3 */}
        { blogs?.map((item,index)=>{
            // if(index!==0){
                if(index==3){
                return(
                    <>
                    <div className="flex sm:flex-row flex-col items-center bg-green-300 rounded-xl m-2 p-5 gap-1 sm:w-[500px]">
                        <div className="">
                            <img src={item?.image} alt="" width="150px" />
                        </div>
                        <div className="">
                            <div className="flex gap-5">
                                <p className='p-1 text-sm bg-green-800 rounded text-white'>Doctor</p>
                                <p className='sm:font-medium p-1'>{item.date}</p>
                            </div>
                            <div className="">
                                <p className='text-lg sm:text-3xl font-medium'>{title_blog.length > 33 ? title_blog.slice(0,33) + '...' : title_blog  }</p>
                                <p className='sm:text-base text-xs'>{item.description}</p>
                                <Link to={'read4more'}>
                                    <button className='bg-green-800 text-xs sm:text-base text-white px-2 py-1 rounded-md mt-2 hover:bg-slate-300'>Read More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </>
                )
            }
           
        }) }

    </div>

    {/* right end */}


    </div>




   </>
  )
}

export default Blog1