import axios from "axios";
import React, { useEffect, useState } from "react";
import { errorToast, successToast } from "../../toast";
import { NavLink } from "react-router-dom";


function Adver1() {
  const [Banner, setBanner] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    fetchAPI();
  }, [refresh]);

  const fetchAPI = async (e) => {
    try {
      const response = await axios.get("http://localhost:3000/api/banner", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("id")} `,
        },
      });
      console.log(response, "res");

      setBanner(response.data.Banner);
    } catch (error) {
      setBanner([]);
      errorToast(error.response.data.message || error.message || "error try again");
    }
  };


  const handleDelete = async(id)=>{
    try {
      const response = await axios.delete(`http://localhost:3000/api/banner/${id}`,{headers:{
            'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
          }})

          setRefresh(!refresh)
      successToast("Deleted Succesfully");
    } catch (error) {
      errorToast(error.response.data.message || error.message || "error try again");
    }
  }


  return (
    <>
    {
      Banner.map((item)=>{
        return(
          <>
      <div className="flex flex-col w-[500px] bg-green-100 hover:bg-green-200 m-3 rounded-3xl p-6 sm:p-10 sm:items-center justify-around">
        <div className="py-5 sm:py-1 text-left">
          <p className="bg-green-900 text-white w-20 text-center rounded-lg p-1">
            {item.percentage} OFF
          </p>
          <p className="text-lg sm:text-2xl font-bold">{item.title}</p>
          <p className="text-sm sm:text-lg">{item.description}</p>
          <p className="font-thin line-through">{item.rate}</p>
          <p className="font-semibold">
            {item.offerRate}
            <span className="font-thin">Including Tax</span>
          </p>
        </div>

        <div className="">
          <img src={item.image} alt="" className="w-[40vh] sm:w-[350px]" />
        </div>

        <NavLink
                          to={`/admin/editadver1/${item._id}`}
                          state={item}
                        >
                          <button className="text-white bg-emerald-950 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
                            Edit
                          </button>
                        </NavLink>

        <button onClick={()=>handleDelete(item._id)} className='border border-green-900 px-3 py-1 my-2 hover:bg-green-900 hover:text-white text-xs sm:text-base'>Delete</button>

      </div>
          </>
        )
      })
    }

    </>
  );
}

export default Adver1;
