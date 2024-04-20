import React from 'react';
import { Link,useNavigate  } from 'react-router-dom'; 
// Assuming you're using React Router for navigation
import { useState,useEffect } from 'react';
import axios  from 'axios';

const Accountview = () => {

  const [user,setUser] = useState([])
  useEffect(()=>{
    fetchData()
  },[])


  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/users/${
          localStorage.getItem("id")
        }`,
        {
          headers: {
            Authorization:` Bearer ${localStorage.getItem("userToken")}` ,
          },
        }
      );

      setUser(response.data.details);
      console.log(response.data.details);
    } catch (error) {
      errorToast(error.message);
    }
  };


  const navigate = useNavigate()
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-green-600 ms-64 mb-4">Hello,{JSON.parse(localStorage.getItem("userDetails")).Fname}  <span>{JSON.parse(localStorage.getItem("userDetails")).Lname}</span></h1>
      <div className="bg-green-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 ms-60 w-[40%]">
        <div className="mb-6">
          <label className="block text-green-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={user.Lname}
            placeholder="Your Name"
              // {JSON.parse(localStorage.getItem("userDetails")).Fname} 
            />
             <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={user.Fname}
            placeholder="Your Name"
              // {JSON.parse(localStorage.getItem("userDetails")).Fname} 
            />
         
            
            
        </div>
        <div className="mb-6">
          <label className="block text-green-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            value={user.email}
            placeholder="Your Email"
          //  {JSON.parse(localStorage.getItem("userDetails"))}
            />
        </div>
        <div className="flex justify-between items-center mb-4">
          <Link
            to="/wishlist"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Wishlist
          </Link>
          <Link
            to="/order"
            className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Orders
          </Link>
        </div>
        <div className="mb-4">
          <Link
            to="address"
            className="text-green-600 hover:underline"
          >
            Manage Addresses
          </Link>
        </div>
        <div className="mb-4">
          <Link
            to="/accountsettings"
            className="text-green-600 hover:underline"
          >
            Account Settings
          </Link>
        </div>
        <div className="mb-4">
          <Link
            to="/help"
            className="text-green-600 hover:underline"
          >
            Help & Support
          </Link>
        </div>
        <div className="mb-4">
        <p onClick={() => {
                localStorage.removeItem("userDetails")
                localStorage.removeItem("id")
                localStorage.removeItem("usertoken")
                navigate('/login')
            }} className="text-lg hover:text-green-300 text-green-600 hover:underline" >Logout</p>
        </div>

      </div>
    </div>
  );
};

export default Accountview;