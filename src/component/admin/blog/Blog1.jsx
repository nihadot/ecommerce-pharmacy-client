import axios from "axios";
import { useEffect, useState } from "react";
import { errorToast } from "../../../Toast";
import { NavLink } from "react-router-dom";


const Blog1 = () => {


    const [blog, setBlog] = useState([]);

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/blog/1");
        setBlog(response.data.result);
      } catch (error) {
        console.log(error);
        errorToast(error.response.data.message || "Try Again");
      }
    };
  
    useEffect(() => {
      fetchData();
    },[]);


  return (
    <div>
      {blog.map((item, index) => {
          return (
            <>
              <div className="shadow-2xl rounded-s-md">
                <div className="w-[100%] h-[60%]" key={index}>
                  <img src={item.image} className="w-[405px] h-[300px]" alt="" />
                </div>
                <div className="pb-[40px] ps-[20px]">
                  <div className="flex gap-[30px] py-[8px]">
                    <a className="bg-slate-100 text-emerald-700 text-sm w-[60px] ps-3 rounded-md">
                      Doctor
                    </a>
                    <a className="text-sm text-pink-600">{item.date}</a>
                  </div>
                  <div>
                    <p className="text-[25px] leading-8">{item.title}</p>
                  </div>
                  <div>
                    <p className="text-[13px] text-gray-500 leading-4">
                      {item.content1}
                    </p>
                  </div>
                  <div className="pt-[20px]">
                    <NavLink  to={`/blogs/${item._id}`}
                      state={item}>
                      <button className="flex justify-center align-middle gap-[7px] bg-emerald-900  rounded-md text-sm w-[100px] h-[35px]">
                        <span className="text-white pt-[5px] ">Read More</span>
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  )
}

export default Blog1