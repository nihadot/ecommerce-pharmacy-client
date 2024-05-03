import React, { useContext, useEffect, useState } from 'react';
import { Card } from '@mui/material'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { successToast } from '../toast';
import { Context } from '../../App';


function Wishlist () {

  const { cart,wishlist,refresh,setRefresh } = useContext(Context)





  // remove 
  const handleRemoveQuantity = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/wishlist/removewishlist/${JSON.parse(localStorage.getItem("userDetails"))._id}/${id}`)
      successToast("Removed succesfully")
      setRefresh(!refresh)
    } catch (error) {
      console.log(error);
      setRefresh(!refresh)

    }
  }

  return (
    <>
      <p className=" text-center p-2" >
        <Link to={"/home"} > <span className='hover:text-green-500'><i class="fa-solid fa-chevron-left text-xs text-center"></i> <i class="fa-solid fa-chevron-left text-xs text-center"></i> Home</span></Link>

      </p>
      <div className="p-2 flex flex-wrap lg:flex-col p-sm-2     justify-center items-center ">
        {/* {
          cart?.length > 0 ? */}
            <div className="flex flex-wrap justify-center">
              <div className="bg-green-100 m-4 border shadow p-5 rounded-lg lg:w-[700px]  md:w-[550px]  ">
                <div className="flex justify-between items-center">
                  <p className='font-bold'>Wishlist</p>
                  <p className='font-bold'>{wishlist.length} items</p>
                </div>
                <div className="m-3 flex flex-wrap justify-center" >
                  {
                    wishlist.map((item,index) => {

                      return (
                        <>
                          <Card className='w-[330px] m-2 p-2 hover:translate-x-1'>
                          {/* <Link to={`/productdetails/${item._id}`}  */}
                          {/* state={item} */}
                          {/* key={index} > */}
                            <div className="flex ">
                              <img src={item.productInfo.mainimage} alt="" className='w-[100px] m-1' />
                              <div className="mt-3 p-2">
                                <p>{item.productInfo.name}</p>
                                <div className="mt-3 flex justify-between p-3 gap-5 ">
                                  <p className='font-bold text-xs sm:text-base'>{item.price}</p>   
                                  {/* item.productInfo.price * item.quantity */}
                                  
                                </div>
                                
                                
                                <button className=' text-teal-800 text-lg text-center hover:translate-x-1' onClick={() => handleRemoveQuantity(item.productInfo._id)}><i class="fa-solid fa-trash"></i></button>
                              </div>
                            </div>
                            {/* </Link> */}
                           
                          </Card>
                        </>
                      )
                    })
                  }

                 
                </div>
                
              </div>
            </div>

           
      </div>


    </>
  );
};

export default Wishlist;
