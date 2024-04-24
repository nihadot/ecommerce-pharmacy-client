import React from 'react';
import{Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {  successToast } from "../../toast";
import { Card } from '@mui/material';
function Productdetails() {
  const [data, setData] = useState([])

  const navigate = useNavigate()


  const { id } = useParams();
  const { state } = useLocation();

  const item = state;

  const handleAddToWishlist = async (idOf) => {
    try {
      console.log('api');
      const response = await axios.post('http://localhost:3000/api/wishlist/addToWishlist', { productId: idOf, userId: JSON.parse(localStorage.getItem("userDetails"))?._id });
      console.log(response);


      successToast("Succesfully Added into Wishlist")

    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = async (idOf) => {
    try {
      console.log('api');
      const response = await axios.post('http://localhost:3000/api/cart/addToCart', { productId: idOf, userId: JSON.parse(localStorage.getItem("userDetails"))?._id });
      console.log(response);
      successToast("Succesfully Added into Cart")
      navigate('/cart')
     

    } catch (error) {
      console.log(error);
    }
  };

  const fetchdata = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/product/get-one-product/${id}`)
      setData(response.data.product);
      console.log(response,'response');
    } catch (error) {
      console.log(error, 'error');
    }
  }

  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <>
      <p className=" hover:text-green-500 p-2" >
        <Link to={"/home"} >  <span className=''><i class="fa-solid fa-chevron-left text-xs text-center"></i> Home</span></Link>
      </p>
      {id}
      <div className="flex flex-wrap justify-center items-center">
        <div className="m-4">
          <img src={data?.mainimage} alt="" className='bg-slate-100 w-[200px] sm:w-[400px] sm:h-[400px]' />
          <div className="flex">
            {
              data?.image?.map((image) =>
                <img src={image?.image} alt="" className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]' />)
            }
          </div>
          <div className="flex">
       
            <button type='button' onClick={() => handleAddToWishlist(data._id)} className='bg-green-700 py-1 px-2 sm:py-2 sm:px-8 m-2 rounded hover:bg-green-200 text-white text-xs sm:text-base'><i class="fa-regular fa-heart"></i> ADD TO WISHLIST</button>
          
            <p
          >
            <button type='button' onClick={() => handleAddToCart(data._id)} className='bg-green-700 py-1 px-2 sm:py-2 sm:px-8 m-2 rounded hover:bg-green-200 text-white text-xs sm:text-base'><i class="fa-solid fa-cart-shopping"></i> ADD TO CART</button>

            </p>
          </div>
        </div>

        <div className="">
          <div className="border-b-2 p-5">
            <p className='text-teal-900 text-lg sm:text-xl font-semibold'>{data?.name}</p>
            <p className='text-teal-900 text-xs sm:text-base'><i class="fa-duotone fa-indian-rupee-sign"></i>{data?.price}</p>
            <p className='text-teal-900 text-xs sm:text-base'><i class="fa-thin fa-truck-container"></i>40 rupee for Delivery</p>
          </div>

          <div className="mt-3">
            <p className='text-green-900 text-xs sm:text-base'><i class="fa-duotone fa-turn-down-left"></i> Easy returns and exchanges</p>
            <p className='text-green-900 text-xs sm:text-base'><i class="fa-solid fa-truck"></i>Cash on Delivery Available</p>
          </div>

          <div className="mt-10">
            <p className='sm:text-2xl text-green-500'>Product Details</p>
            <p className='text-xs sm:text-base'>name :{data?.name}</p>
            <p className='text-xs sm:text-base'>price : {data?.price}</p>
            <p className='text-xs sm:text-base'>Details :{data?.description} </p>
            <p className='text-xs sm:text-base'>Available</p>
          </div>

        </div>
      </div>
      <hr />
      <div className="p-2 flex-wrap flex">
        <p>You may also like</p>




        <div className="flex justify-center overflow-x-scroll">
            {/* {
            data.map((item, index) => {
              return (
                <> 
                  <Card className=' border-green-200 border mt-[40px] w-[160px] sm:w-[120px] sm:h-[250px] m-3 flex  shadow justify-between items-center hover:translate-x-1 '>
                    <Link to={`/productdetails/${item._id}`} state={item} 
    >
                      <button type='button' onClick={() => {
                        handleAddToWishlist(data._id)
                      }} className={`py-1 px-2 sm:py-2 sm:px-8 m-2 rounded absolute text-green-400 -mt-8 ms-12 text-xs sm:text-base `}
                      ><i class="fa-regular text-lg fa-heart"  ></i> </button>

                      <div key={index} className="h-[130px] sm:h-[140px]">
                        <img className='h-full w-full' src={data?.mainimage} alt="Loading..." />
                      </div>
                      <div className="border-t-2 p-2">
                        <p className='  font-bold'>{data?.name}</p>
                        <p className=' sm:text-base'>${data?.price}</p>
                      </div>
                    </Link>
                   
                  </Card>
                  </>
               )
            }) 
          }  */}
        </div>
      </div>
    </>
  
)
}

export default Productdetails
