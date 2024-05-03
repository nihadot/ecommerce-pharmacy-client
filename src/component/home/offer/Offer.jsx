import { Card } from '@mui/material'
import React, { useEffect, useState,useContext} from 'react'
import { Link,NavLink } from 'react-router-dom'
import axios from 'axios'
import { errorToast, successToast } from "../../toast";
import { BsFillHandbagFill } from "react-icons/bs";
import { Context } from '../../../App';

function Offer() {
    const [data,setData] = useState([])
    // const [refresh,setRefresh] = useState(true)

    const { refresh,setRefresh,setOfferCartCount } = useContext(Context)



    
    useEffect(()=>{
      fetchdata()
    },[])


    const handleAddToCart = async (idOf,status) => {
      try {
        console.log('api');
        const response = await axios.post('http://localhost:3000/api/cart/addToCart', { productId: idOf, userId: JSON.parse(localStorage.getItem("userDetails"))?._id,offer:status });
        console.log(response);
        setRefresh(!refresh)
        successToast("Succesfully Added into Cart")
       
  
      } catch (error) {
        console.log(error);
      }
    };
 


    useEffect(()=>{
      fetchdata()
    },[])


    const fetchdata = async ()=>{
        try {
            const response = await axios.get("http://localhost:3000/api/buttons")
            setData(response.data.Offercard);
            setOfferCartCount(response.data.Offercard?.length)
            setRefresh(refresh)
        } catch (error) {
            
        }
    };




  return (
    <>
  <p className=" hover:text-green-500 p-2" >
        <Link to={"/home"} >  <span className=''><i class="fa-solid fa-chevron-left text-xs text-center"></i> Home</span></Link>
      </p>


    <div className="p-5 mx-16 mt-5">
        <h1 className='text-2xl sm:text-4xl text-center text-green-700 font-semibold'>Start Shopping</h1>
    </div>
   


    <div className="flex flex-wrap justify-center">
            {
                data.map((item,index)=>{
                    return(
                        <>
                        
                      
                        <Card className='shadow-2xl w-[180px] h-[246px] rounded-md  transition-transform duration-300  transform hover:scale-105 px-5 sm:w-[250px] sm:h-[350px] m-5 flex flex-col justify-between'>
                                                    
    <NavLink to={`/offerdetails/${item._id}`}
    state={item}
    key={index}
    >
                                   <div className="h-[110px] sm:h-[240px]">
                                    <img className='h-[180px] ' src={item.image} alt="Loading..." />
                                   </div>
                                <div className="border-t-2 p-2">
                                    <p className=' sm:text-xl font-semibold -mt-3'>{item.title}</p>
                                    <p className='text-xs sm:text-base -mt-1 text-green-400 line-through'>${item.cost} </p>
                                    <p className=' sm:text-xl font-semibold mt-0'>{item.offerRate}<span className='text-red-400'>(25%)</span></p>
                                </div>
                            </NavLink>
                           

                                  
                        <div className='flex justify-around'>


                        { parseInt(item?.quantity) === 1 ? 'out of stock' : <button onClick={() => handleAddToCart(item._id,true)}  className=' flex justify-around p-2 rounded border-green-300 bg-green-800 text-white -mt-2 -ms-5  pt-2 h-[54px] w-[270px]'>
                               Add to Cart

                                <div className='mt-2'>
                                <BsFillHandbagFill />

                                   </div>
                                  </button>}
                                  </div>


                                </Card>
                        
                        </>
                    )
                })
              }
            
        </div>
    
    </>
  )
}

export default Offer
