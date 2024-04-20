import { Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import axios from 'axios'
import { errorToast, successToast } from "../../toast";
import { BsFillHandbagFill } from "react-icons/bs";

function Maincard3() {
    const [data,setData] = useState([])
    const [productLimit,setProductLimit] = useState(4)
    const [refresh,setRefresh] = useState(true)
 


    useEffect(()=>{
      fetchdata()
    },[])


    const fetchdata = async ()=>{
        try {
            const response = await axios.get("http://localhost:3000/api/product")
            setData(response.data.product);
        } catch (error) {
            
        }
    };


    // const addToCart = async (id) => {
    //     try {
    //       const response = await axios.post('http://localhost:3000/api/cart/addToCart',  {productId:id,userId:JSON.parse(localStorage.getItem("userDetails"))?._id} );
    //       console.log(response);
    //       setRefresh(!refresh)
    //       successToast("Succesfully Added into Cart")
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };


  return (
    <>
    <div className="p-5 mx-16 mt-5">
        <h1 className='text-2xl sm:text-4xl font-semibold'>Upcoming Products</h1>
    </div>
    <div className="text-right mr-20">
        <Link to={'/viewall'}><button className='text-green-900 sm:text-sm font-mono'>View All <i class="fa-solid fa-arrow-right"></i></button></Link>
    </div>
    
    {/* Popular Products */}


    <div className="flex flex-wrap justify-center">
            {
                data.map((item,index)=>{
                    return(
                        <>
                        
                        {index < productLimit &&
                        <Card className='shadow-2xl w-[240px] h-[246px] rounded-md  transition-transform duration-300  transform hover:scale-105 px-5 sm:w-[250px] sm:h-[350px] m-5 flex flex-col justify-between'>
                                                    
    <NavLink to={`/productdetails/${item._id}`}
    state={item}
    key={index}
    >

                              
    


                                <div className="h-[130px] sm:h-[240px]">
                                    <img className='h-[180px] ' src={item.mainimage} alt="Loading..." />
                                </div>
                                <div className="border-t-2 p-2">
                                    <p className=' sm:text-xl font-bold'>{item.name}</p>
                                    <p className='text-xs sm:text-base'>${item.price}</p>
                                </div>
                            </NavLink>
                                       
                        <div className='flex justify-around'>


<button className=' flex justify-around p-2 rounded border-green-300 bg-green-800 text-white -mt-2 -ms-5  pt-2 h-[54px] w-[270px]'>
   Add to Cart

    <div className='mt-2'>
    <BsFillHandbagFill />

       </div>
      </button>
      </div>


                        </Card>
                        }
                        </>
                    )
                })
            }
            
        </div>
    
    </>
  )
}

export default Maincard3
