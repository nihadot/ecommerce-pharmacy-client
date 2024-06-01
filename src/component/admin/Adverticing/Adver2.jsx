import axios from "axios";
import React, { useEffect, useState } from "react";
import { errorToast, successToast } from "../../toast";
import { NavLink } from "react-router-dom";
//import image2 from "../../../../ExternalComponents/Images/charcoaltoothpaste.png";

function Adver2() {
  const [Banner2, setBanner2] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    fetchAPI();
  }, [refresh]);

  const fetchAPI = async (e) => {
    try {
      const response = await axios.get("http://localhost:3000/api/banner2", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("id")} `,
        },
      });
      console.log(response, "banner2");

      setBanner2(response.data.Banner2);
    } catch (error) {
      setBanner2([]);
      errorToast(error.response.data.message || error.message || "error try again");
    }
  };


  const handleDelete = async(id)=>{
    try {
      const response = await axios.delete(`http://localhost:3000/api/banner2/${id}`,{headers:{
            'Authorization':`Bearer ${localStorage.getItem("id")} `
          }})

          setRefresh(!refresh)
      successToast("Deleted Succesfully");
    } catch (error) {
      errorToast(error.response.data.message || error.message || "error try again");
    }
  }



  return (
    <>
      {Banner2.map((item) => {
        return (
          <>
            <div className="flex bg-green-100 hover:bg-green-200 m-3 rounded-3xl p-10 items-center">
              <div className="">
                <p className="bg-green-900 text-white w-20 text-center rounded-lg p-1">
                  {item.percentage} OFF
                </p>
                <p className="text-base sm:text-xl">{item.title}</p>
                <p className="font-thin line-through">{item.rate}</p>
                <p className="font-semibold">
                  {item.offerRate}
                  <span className="font-thin">Including Tax</span>
                </p>
              </div>

              <div className="">
                <img src={item.image} alt="" className="w-[30vh]" />

                
        <NavLink
                          to={`/admin/editadver2/${item._id}`}
                          state={item}
                        >
                          <button className="text-white bg-emerald-950 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
                            Edit
                          </button>
                        </NavLink>


                <button
                  onClick={() => handleDelete(item._id)}
                  className="border border-green-900 px-3 py-1 my-2 hover:bg-green-900 hover:text-white text-xs sm:text-base"
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Adver2;
