import React from 'react'
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
const Header = () => {



  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [wishlist, setWishlist] = useState([])
  const [refresh, setRefresh] = useState(true)
  const [count, setCount] = useState(0);



  useEffect(() => {
    fetchdata();
  }, [refresh]);

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/cart/listCart/${JSON.parse(localStorage.getItem("userDetails"))._id
        }`
      );
      console.log(response.data.result.length);
      setCount(response.data.result.length);
      // setData(response.data.data);
    } catch (error) {
      console.log(error);
    }


  }

 
// const fetchData = async () => {
//   try {
//       const response = await axios.get(`http://localhost:3000/api/wishlist/viewall/${JSON.parse(localStorage.getItem("userDetails"))._id}`
//   );
//       setWishlist(response.data.result.length)
//   } catch (error) {
//     console.log(error);
//   }


// useEffect(() => {
// fetchData()
// }, [refresh])






//   }

const fetchData = async () => {
  try {
      const response = await axios.get(`http://localhost:3000/api/wishlist/listWishlist/${JSON.parse(localStorage.getItem("userDetails"))._id }`)
      setWishlist(response.data.data)
  } catch (error) {
    console.log(error);
  }


useEffect(() => {
fetchData()
}, [refresh])

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
    <div className='shadow-md w-full  flex gap-6'>
      {/* <div className='md:px-10 py-4 px-7 bg-white '> */}
        <div className='text-green-700'>
          <FaClinicMedical className='w-7 h-7 text-green-700' />
          <span className='text-green-700'>Medico Store</span>
        </div>

      {/* </div> */}

      <div className=''>
        <NavLink to={"/login"} > <button className='bg-green-800 h-[30px] rounded-md w-[50px] mt-8 text-white'>Login</button>
        </NavLink>
      </div>

      <div className=''>
        <NavLink to={"/signup"} >

          <button className='bg-green-800 h-[30px] rounded-md ms-3 w-[80px] mt-8 text-white'>Sign Up</button>
        </NavLink>
      </div>


      {/* //search button */}

       <div className='flex gap-5'>
      <form action="" className=' ms-28 flex'>
        <div className=''>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            handleSubmitSearch(e.target.value)
          }}
          placeholder="Search medicine, medical products"
          className="border border-green-300 px-3 py-1 mt-[30px] rounded-lg focus:outline-none focus:border-green-500 pe-3   "
        />
        </div>
       <div className='pt-[30px]'>
       <button type="submit" onClick={handleSubmitSearch} className="bg-green-800 text-white ms-4  h-[33px] px-4 py-2 rounded-lg  hover:shadow-white">Search</button>
       </div>
      </form>
      </div>
      {
        search?.length > 0 && <div className='max-h-80 overflow-y-scroll absolute top-16 bg-white w-[400px] px-4'>
          {
            searchResult.map((item) => {
              return(

              <Card className='border w-[130px] sm:w-[250px] sm:h-[350px] m-5 flex flex-col shadow justify-between hover:translate-x-1 '>
                <Link to={`/productdetails/${item._id}`} state={item} >
                  <div className="h-[130px] sm:h-[240px]">
                    <img className='h-full w-full' src={item.mainimage} alt="Loading..." />
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








    
     <NavLink to={"wishlist"}>
        <div className=' mt-11 ms-[60px]'>
          <BsFillSuitHeartFill className='text-green-700 mt-11 ' />
          {wishlist.length}
        </div>
      </NavLink>
      <NavLink to={"cart"}>
        <div className=' mt-11 ms-[3]'>
          <BsMinecartLoaded className='text-green-700' />
          {count}

        </div>
      </NavLink>


      <NavLink to={"orderdetails"}>
        <div className=' mt-11 ms-[3]'>
          <RiLuggageCartFill className='text-green-700' />
          

        </div>
      </NavLink>





      <div className='  mt-9 w-[0px] h-[0px] ms-[320px] text-green-500'>
        <Avatarr />
      </div>
     </div>

  















  )
}

export default Header