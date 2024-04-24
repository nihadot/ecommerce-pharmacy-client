import React, { useContext } from 'react'
import { FaClinicMedical } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BsMinecartLoaded } from "react-icons/bs";
import Avatarr from '../Avatar/Avatarr';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Card } from '@mui/material';
// import { Dropdown } from '../home/dropdown/Dropdown';
import { RiLuggageCartFill } from "react-icons/ri";
import axios from 'axios'
import { Context } from '../../App';
const Header = () => {
  const { cart } = useContext(Context)



  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [wishlist, setWishlist] = useState([])
  // const [refresh, setRefresh] = useState(true)
  const [count, setCount] = useState(0);



  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
     
      const response___ = await axios.get(`http://localhost:3000/api/wishlist/listWishlist/${JSON.parse(localStorage.getItem("userDetails"))._id}`)
      setWishlist(response___?.data?.data?.length)
      // console.log(response.data.result.length);
      // setData(response.data.data);
    } catch (error) {
      console.log(error);
    }


  }




  const handleSubmitSearch = async (srch) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/product/search?name=${srch}`)
      setSearchResult(response.data.product)
    } catch (error) {
      console.log(error);
    }
  }








  return (
    <div className='shadow-md w-full h-[100px] flex  justify-between items-center'>
      {/* <div className='md:px-10 py-4 px-7 bg-white '> */}
      <div className='text-green-700 ms-7'>
        <FaClinicMedical className='w-7 h-7 text-green-700' />
        <span className='text-green-700'>Medico Store</span>
      </div>

      {/* </div> */}

      {/* <div className="flex">
        <div className=''>
          <NavLink to={"/login"} > <button className='bg-green-800 h-[30px] rounded-md w-[50px]  text-white'>Login</button>
          </NavLink>
        </div>

        <div className=''>
          <NavLink to={"/signup"} >

            <button className='bg-green-800 h-[30px] rounded-md ms-3 w-[80px]  text-white'>Sign Up</button>
          </NavLink>
        </div>
      </div> */}


      {/* //search button */}

      <div className='flex items-center  gap-5 ms-20'>
        <form action="" className=' flex'>
          <div className=''>
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                handleSubmitSearch(e.target.value)
              }}
              placeholder="Search medicine, medical products"
              className="border border-green-300 px-3 py-1 rounded-lg focus:outline-none focus:border-green-500 pe-3 w-[400px] "
            />
          </div>
          <div className=''>
            <button type="submit" onClick={handleSubmitSearch} className="bg-green-800 text-white ms-4  h-[33px] px-4 py-2 rounded-lg  hover:shadow-white">Search</button>
          </div>
        </form>
      </div>
      {
        search?.length > 0 && <div className='max-h-80 overflow-y-scroll absolute top-[91px] bg-white w-[200px] left-[200px]  px-6'>
          {
            searchResult.map((item) => {
              return (

                <Card className='border w-[100px] m-3 sm:w-[100px] sm:h-[150px]  flex flex-col shadow justify-between hover:translate-x-1 '>
                  <Link to={`/productdetails/${item._id}`} state={item} >
                    <div className="h-[130px] sm:h-[240px] mt-4 ms-2">
                      <img className=' w-[60px]  h-[60px]' src={item.mainimage} alt="Loading..." />
                    </div>
                    <div className="border-t-2 p-2">
                      <p className='text-xs sm:text-xl font-bold'>{item.name}</p>
                      <p className='text-xs sm:text-base'>{item.price}</p>
                    </div>

                  </Link>
                </Card>
              )

            })
          }
        </div>
      }








      <div className="flex justify-around items-center gap-6 ms-52">

        <NavLink to={"wishlist"}>
          <div className='  '>
            <BsFillSuitHeartFill className='text-green-700  ' />
            {wishlist}
          </div>
        </NavLink>
        <NavLink to={"cart"}>
          <div className='  '>
            <BsMinecartLoaded className='text-green-700' />
            {cart?.length}

          </div>
        </NavLink>
        <NavLink to={"orderdetails"}>
          <div className='  '>
            <RiLuggageCartFill className='text-green-700' />
          </div>
        </NavLink>





        {/* </div> */}






      </div>
      <div className="flex me-12">

        {localStorage.getItem("userDetails") ? (
          <>
            Hello {JSON.parse(localStorage.getItem("userDetails")).Fname}
          </>
        ) : (
          <div>
            <div className=''>
              <NavLink to={"/login"} > <button className='bg-green-800 h-[30px] rounded-md w-[50px]  text-white'>Login</button>
              </NavLink>
            </div>

            <div className=''>
              <NavLink to={"/signup"} >

                <button className='bg-green-800 h-[30px] rounded-md ms-3 w-[80px]  text-white'>Sign Up</button>
              </NavLink>
            </div>

          </div>
        )}



        <div className=' text-green-500 pt-2 '>
          <Avatarr className="w-[30px] h-[10px]" />
        </div>
      </div>
    </div>

















  )
}

export default Header