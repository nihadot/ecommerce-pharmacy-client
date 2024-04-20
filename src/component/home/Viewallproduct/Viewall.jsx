import axios from "axios";
import { useEffect, useState } from "react";
import {  errorToast } from "../../toast";
import { NavLink } from "react-router-dom";

const Viewall = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/product");
      setProducts(response.data.product);
    } catch (error) {
      console.log(error);
      errorToast(error.response.data.message || "Try Again");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="font-sans">
      
      <p className="text-[30px]  text-green-700 font-semibold pt-[20px] ps-[42%] font-sans ">
        Start Shopping
      </p>
      <p className="ms-[6%] mt-[1%]">
        <NavLink to={"/home"}>
          <span className="text-green-500 text-decoration-underline  ">Home</span>
        </NavLink>{" "}
      
      </p>

      <div className="ms-[12%] my-[30px] flex gap-[40px]  font-sans ">
        <div className="my-[30px] flex flex-wrap gap-[40px]">
          {products.map((item, index) => {
            return (
              <>
                <div
                  className="shadow-2xl w-[230px] h-[230px] rounded-md  transition-transform duration-300 transform hover:scale-105 "
                  key={index}
                >
                  {/* <span className="" onClick={toggleLike}>
                    {liked ? (
                      <FaHeart style={{ color: "red" }} />
                    ) : (
                      <FaRegHeart className="" />
                    )}
                  </span> */}
                  <div className="">
                    <div className="ps-[22px]">
                      <img
                        className="w-[200px] h-[170px] object-contain"
                        src={item.mainimage}
                        alt=""
                      />
                    </div>

                    <div className="ps-[8px]">
                          <p>{item.name}</p>
                          <div className="flex flex-wrap">
                            <p className="">{item.price}</p>
                            {/* <p className="ps-[13px]">{item.offerPrice}</p> */}
                          </div>
                        </div>
                        <NavLink to={`/productdetails/${item._id}`}
                          state={item}
                          key={index}
                            >
                    <button className="w-[230px] py-[2px] bg-emerald-950 text-white font-sans">
                        Add To Cart
                      </button>
                      </NavLink>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Viewall;