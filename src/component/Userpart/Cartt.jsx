import { Card } from "@mui/material";
import axios from "axios";
 import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import Emptycart from "./Emptycart";
import { LuIndianRupee } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
 import { Context } from "../../App";

const Cartt = () => {


   
  const { cart, setCart, refresh, setRefresh } = useContext(Context);



  const handleIncrementQuantity = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/cart/increment-cart/${
          JSON.parse(localStorage.getItem("userDetails"))._id
        }/${id}`
      );

      setCart(response.data.data);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecrementQuantity = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/cart/decrement-cart/${
          JSON.parse(localStorage.getItem("userDetails"))._id
        }/${id}`
      );

      setCart(response.data.result);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveitem = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/cart/remove-cart/${
          JSON.parse(localStorage.getItem("userDetails"))._id
        }/${id}`
      );

      setCart(response.data.result);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };
  let totalAmount = 0;

  return (
    <>
      <p className="px-[20px] text-[20px]">
        <NavLink to={"/home"}>
          <span className="text-green-500">Home</span>
        </NavLink>{" "}
      </p>
      <div>
        {console.log("cart", cart)}
        {cart?.length > 0 ? (
          <div className="w-auto h-auto  font-sans">
            <div className="ps-36 pb-[40px] flex gap-[30px] ">
              <Card className="w-[600px] h-auto m-7 ">
                <div className="w-[600px] h-[80px] pt-[20px] ps-[20px] shadow-md">
                  <div className="w-[600px] flex flex-wrap justify-between px-[30px]">
                    <p className="font-sans font-semibold text-[20px]">
                      Your Cart
                    </p>
                    <p className="font-sans font-semibold text-[20px]">
                      {cart.length} items
                    </p>
                  </div>
                </div>
                <div className="w-[600px] py-[20px] space-y-4 px-[50px] bg-slate-50">
                  {cart.map((item, index) => {
                    totalAmount =
                      totalAmount +
                      item?.productInfo?.offerRate * item?.quantity;
                    console.log(item?.quantity, "item?.quantity");

                    return (
                      <>
                        <Card
                          className="w-[400px] px-[20px] py-[20px]"
                          key={index}
                        >
                          <div className="flex flex-wrap justify-between">
                            <div className=" pb-[10px] w-[130px] h-[130px]">
                              <img
                                src={item.productInfo.mainimage}
                                alt=""
                                className="w-full h-full"
                              />
                            </div>
                            <div className="pt-[30px]">
                              <ul>
                                <li>{item.productInfo.name}</li>
                                <li className="flex gap-[10px]">
                                  <div className="flex">
                                    <p className="pt-[5px] text-red-600">
                                      <LuIndianRupee />
                                    </p>
                                    <div className="text-red-600">
                                      {item?.productInfo.price}
                                    </div>
                                  </div>
                                  {/* <div className="flex">
                                    <p className="pt-[5px]">
                                      <LuIndianRupee />
                                    </p>
                                    <p>{item?.productInfo.offerRate}</p>
                                  </div> */}
                                </li>
                                <li>
                                  <div className="flex flex-wrap w-[85px] h-[25px] gap-[15px] pb-[10px]">
                                    <button
                                      className="text-red-600 text-[20px] font-semibold"
                                      onClick={() => {
                                        handleDecrementQuantity(
                                          item.productInfo._id
                                        );
                                      }}
                                      disabled={item.quantity === 1}
                                    >
                                      -
                                    </button>
                                    <p className="pt-[5px]">{item.quantity}</p>
                                    <button
                                      style={{
                                        color: "green",
                                        fontSize: "16px",
                                        paddingTop: "4px",
                                      }}
                                      onClick={() => {
                                        handleIncrementQuantity(
                                          item.productInfo._id
                                        );
                                      }}
                                    >
                                      +
                                    </button>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="pt-[30px] flex">
                              <p className="pt-[5px]">
                                {" "}
                                <LuIndianRupee />
                              </p>
                              <div>
                                <p className="">
                                  {item?.productInfo?.offerRate *
                                    item?.quantity}
                                </p>
                              </div>
                            </div>
                            <div>
                              <button
                                className="text-blue-600"
                                onClick={() => {
                                  handleRemoveitem(item.productInfo._id);
                                }}
                              >
                                <RxCross2 />
                              </button>
                            </div>
                          </div>
                        </Card>
                      </>
                    );
                  })}
                </div>
              </Card>

              <div className="mt-[30px]">
                <Card className="w-[400px] h-[360px]">
                  <div className="h-[300px] px-[30px] py-[20px] font-sans font-semibold space-y-3">
                    <div className="flex flex-wrap justify-between h-[40px] px-[10px] items-center">
                      <p>ORDERS</p>
                    </div>

                    <div className="flex flex-wrap justify-between h-[40px] px-[10px] items-center">
                      <p className="font-extrabold">Total:</p>
                      <p className="flex">
                        <p className="pt-[5px]">
                          <LuIndianRupee />
                        </p>
                        <p>{totalAmount}</p>
                      </p>
                    </div>
                  </div>
                  <div className="w-[370px] h-[40px] ps-9">
                    <NavLink to={"/add-address"}>
                      <button className="bg-emerald-800 text-white w-full h-[40px] font-sans">
                        Continue
                      </button>
                    </NavLink>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        ) : (
          <Emptycart />
        )}
      </div>
    </>
  );
};

export default Cartt;