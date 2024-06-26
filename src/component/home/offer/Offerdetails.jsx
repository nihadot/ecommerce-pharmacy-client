import React from 'react';
import{Link, useLocation, useParams } from 'react-router-dom';
import { useState,useEffect,useContext } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {  successToast } from "../../toast";
import { Card } from '@mui/material';
import { Context } from '../../../App';
function Offerdetails() {
  const [data, setData] = useState([])
  const { refresh,setRefresh } = useContext(Context)

  const { name } = useParams();
  const { state } = useLocation();

  const item = state;
  const navigate = useNavigate()

  const handleAddToWishlist = async () => {
    try {
      console.log('api');
      const response = await axios.post('http://localhost:3000/api/wishlist/addToWishlist', { productId: item._id, userId: JSON.parse(localStorage.getItem("userDetails"))?._id });
      console.log(response);

      setRefresh(!refresh)
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
      setRefresh(!refresh)
      navigate('/cart')

    } catch (error) {
      console.log(error);
    }
  };

  const fetchdata = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/buttons")
      setData(response.data.Offercard);
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
      <div className="flex  justify-center items-center">
        <div className="m-4">
          <img src={item?.image} alt="" className='bg-slate-100 w-[200px] sm:w-[400px] sm:h-[400px]' />
          <div className="flex">
           
                <img src={item?.image} alt="" className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]' />
                <img src={item?.image} alt="" className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]' />
            
          </div>
          <div className="">
          <Link
            to="/wishlist">
            <button type='button' onClick={() => handleAddToWishlist(item._id)} className='bg-green-700 py-1 px-2 sm:py-2 sm:px-8 m-2 rounded hover:bg-green-200 text-white text-xs sm:text-base'><i class="fa-regular fa-heart"></i> ADD TO WISHLIST</button>
            </Link>
            <Link
            to="/cart">
            <button type='button' onClick={() => handleAddToCart(item._id)} className='bg-green-700 py-1 px-2 sm:py-2 sm:px-8 m-2 rounded hover:bg-green-200 text-white text-xs sm:text-base'><i class="fa-solid fa-cart-shopping"></i> ADD TO CART</button>
            {/* <Link to={"/checkout"} >
              <button className='bg-green-600 py-1 px-2 sm:py-2 sm:px-10 m-2 rounded hover:bg-green-200 text-white text-xs sm:text-base'> BUY NOW</button>

            </Link> */}
            </Link>
          </div>
        </div>

        <div className="">
          <div className="border-b-2 p-5">
            <p className='text-teal-900 text-lg sm:text-xl font-semibold'>{item?.title}</p>
            <p className='text-teal-900 text-xs sm:text-base'><i class="fa-duotone fa-indian-rupee-sign"></i>{item?.cost}</p>
            <p className='text-teal-900 text-xs sm:text-base'><i class="fa-thin fa-truck-container"></i>Free Delivery</p>
          </div>

          <div className="mt-3">
            <p className='text-teal-900 text-xs sm:text-base'><i class="fa-duotone fa-turn-down-left"></i> Easy returns and exchanges</p>
            <p className='text-teal-900 text-xs sm:text-base'><i class="fa-thin fa-truck-container"></i>Cash on Delivery Available</p>
          </div>

          <div className="mt-10">
            <p className='sm:text-2xl text-green-500'>Product Details</p>
            <p className='text-xs sm:text-base'>name :{item?.title}</p>
            <p className='text-xs text-green-500 line-through sm:text-base'>price : {item?.cost}</p>
            <p className='text-xs sm:text-base'>Offer Rate : {item?.offerRate}<span className='text-red-400'>(25%)</span></p>
            <p className='text-xs sm:text-base'>Details :{item?.description} </p>
            <p className='text-xs sm:text-base'>Available</p>
          </div>

        </div>
      </div>
      <hr />
      <div className="p-2 flex-wrap flex">
        <p>You may also like</p>

        <div className="flex justify-center overflow-x-scroll">
          {
            data.map((item, index) => {
              return (
                <>
                  <Card className=' border-green-200 border mt-[40px] w-[160px] sm:w-[120px] sm:h-[250px] m-3 flex  shadow justify-between items-center hover:translate-x-1 '>
                    <Link to={`/offerdetails/${item._id}`} state={item} >
                      <button type='button' onClick={() => {
                        handleAddToWishlist(item._id)
                      }} className={`py-1 px-2 sm:py-2 sm:px-8 m-2 rounded absolute text-green-400 -mt-8 ms-12 text-xs sm:text-base `}
                      ><i class="fa-regular text-lg fa-heart"  ></i> </button>

                      <div key={index} className="h-[130px] sm:h-[140px]">
                        <img className='h-full w-full' src={item.image} alt="Loading..." />
                      </div>
                      <div className="border-t-2 p-2">
                        <p className='  font-bold'>{item.title}</p>
                        <p className=' sm:text-base'>{item.cost}</p>
                      </div>
                    </Link>
                   
                  </Card>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  
)
}

export default Offerdetails
