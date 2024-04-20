import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Emptycart from "./Emptycart";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState([])







  useEffect(() => {
    fetchAPI()
  }, [])

  const fetchAPI = async (e) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/offercard/${JSON.parse(localStorage.getItem("userDetails"))._id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("adminToken")} `
        }
      })
      console.log(response, "res");

      setData(response.data.result)
    } catch (error) {
      errorToast(error.message);
    }
  }




  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/cart/listCart/${JSON.parse(localStorage.getItem("userDetails"))._id}`);
      setCart(response.data.result);
      setRefresh(!refresh);
    } catch (error) {
      setCart([]);

      console.log(error);
    }
  };

  const handleIncrementQuantity = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/cart/increment-cart/${JSON.parse(localStorage.getItem("userDetails"))._id
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
        `http://localhost:3000/api/cart/decrement-cart/${JSON.parse(localStorage.getItem("userDetails"))._id
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
        `http://localhost:3000/api/cart/remove-cart/${JSON.parse(localStorage.getItem("userDetails"))._id
        }/${id}`
      );

      setCart(response.data.result);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };
  let totalAmount = 0
  let subtotal = 0;
  let total = 0;
  let offerprice=0
  return (
    <>
      <p className="ps-[14px] pt-[5px] font-sans">
        <NavLink to={"/home"}>
          <span className="text-green-500">Home</span>
        </NavLink>{" "}
      </p>
      {cart?.length > 0 ? (
        <div>
          <p className="text-[29px] font-medium font-sans ps-[43%] pt-[30px]">
            Shopping Cart
          </p>
          {/* <p className="font-sans">
            <NavLink to={"/home"}>
              <span className="text-green-500 ps-[43%]">Home</span>
            </NavLink>{" "}
            / Your Shopping Cart
          </p> */}
          <div className="relative overflow-x-auto mt-[20px] font-sans py-[30px]">
            <table className=" w-[80%] text-sm text-left rtl:text-right h-[180px] ms-[190px]">
              <thead className="text-xs uppercase underline">
                <tr>
                  <p scope="col" className=" font-bold px-6 py-3">
                    Product
                  </p>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                    Offer Price
                  </th> */}
                  {/* <th scope="col" className="px-6 py-3">
                    Delivary Cost
                  </th> */}
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>

                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>

              <tbody>
                {cart.map((item, index) => {

                  totalAmount = totalAmount + (item.productInfo.price * item.quantity)
                  subtotal = totalAmount + (item.productInfo.price * item.quantity)
                  total = (subtotal + 40)
                  return (
                    <>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          key={index}
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-[20px]"
                        >
                          <div className="w-[80px] h-[80px]">
                            <img
                              src={item.productInfo.mainimage}
                              className="w-full h-full"
                            />
                          </div>
                          <div>
                            <p>{item.productInfo.name}</p>
                            <button
                              className=" text-green-700 border-red-200 mt-6 rounded bg-red-500 text-md w-full sm:w-auto text-center"
                              onClick={() => {
                                handleRemoveitem(item.productInfo._id);
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div>
                            <p>{item?.productInfo?.price}</p>
                          </div>
                        </th>
                        {/* <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div>
                            <p>{item?.productInfo.offerRate}</p>
                          </div>
                        </th> */}
                        {/* <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div>
                            <p>{item?.productInfo.deliveryCost}</p>
                          </div>
                        </th> */}

                        <th
                          scope="row"
                          className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div>
                            <div className="flex w-[100px] h-[30px] border gap-[30px]">
                              <button
                                className=" text-red-700 bg-white text-md w-full sm:w-auto text-[30px] text-center"
                                onClick={() => {
                                  handleDecrementQuantity(
                                    item.productInfo._id
                                  );
                                }}
                              >
                                -
                              </button>
                              <p className="text-[18px] pt-[5px]">
                                {item.quantity}
                              </p>
                              <button
                                className=" text-green-700 bg-white text-md w-full sm:w-auto text-[22px] text-center"
                                onClick={() => {
                                  handleIncrementQuantity(item.productInfo._id);
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div>
                            <p className="text-[15px] font-semibold">
                              {/* {item.productInfo?.price} */}
                              {totalAmount}
                            </p>
                          </div>
                        </th>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>



            <div className="relative overflow-x-auto mt-[20px] font-sans py-[30px]">
            <table className=" w-[80%] text-sm text-left rtl:text-right h-[180px] ms-[190px]">
              <thead className="text-xs uppercase underline">
                <tr>
                  <p scope="col" className=" font-bold px-6 py-3">
                    Product
                  </p>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Offer Price
                  </th> 
                  {/* <th scope="col" className="px-6 py-3">
                    Delivary Cost
                  </th> */}
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>

                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>

              <tbody>
                {data && data.map((item, index) => {
                
                  totalAmount = totalAmount + (item.productInfo?.offerRate* item.quantity)
                  subtotal = totalAmount + (item.productInfo?.offerRate * item.quantity)
                  total = (subtotal + 40)
                  return (
                    <>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          key={index}
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-[20px]"
                        >
                          <div className="w-[80px] h-[80px]">
                            <img
                              src={item?.productInfo?.image}
                              className="w-full h-full"
                            />
                          </div>
                          <div>
                            <p>{item.productInfo?.title}</p>
                            <button
                              className=" text-green-700 border-red-200 mt-6 rounded bg-red-500 text-md w-full sm:w-auto text-center"
                              onClick={() => {
                                handleRemoveitem(item.productInfo._id);
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div>
                            <p>{item?.productInfo?.cost}</p>
                          </div>
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div>
                            <p>{item?.productInfo?.offerRate}</p>
                          </div>
                        </th>
                        {/* <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div>
                            <p>{item?.productInfo.deliveryCost}</p>
                          </div>
                        </th> */}

                        <th
                          scope="row"
                          className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div>
                            <div className="flex w-[100px] h-[30px] border gap-[30px]">
                              <button
                                className=" text-red-700 bg-white text-md w-full sm:w-auto text-[30px] text-center"
                                onClick={() => {
                                  handleDecrementQuantity(
                                    item.productInfo._id
                                  );
                                }}
                              >
                                -
                              </button>
                              <p className="text-[18px] pt-[5px]">
                                {item.quantity}
                              </p>
                              <button
                                className=" text-green-700 bg-white text-md w-full sm:w-auto text-[22px] text-center"
                                onClick={() => {
                                  handleIncrementQuantity(item.productInfo._id);
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div>
                            <p className="text-[15px] font-semibold">
                              {/* {item.productInfo?.price} */}
                              {totalAmount}
                            </p>
                          </div>
                        </th>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>







{/*  
            <div className=" w-[350px] mt-[15%] ms-[10%]">
              <div className="flex justify-between font-sans font-semibold">
                <p>Subtotal :</p>
                <p>{subtotal}</p>
              </div>
              <div className="flex justify-between font-sans font-semibold">
                <p>Delivary Cost :</p>
                <p>40</p>
              </div>
              <div className="flex justify-between font-sans font-semibold">
                <p>Total :</p>
                <p>{total}</p>
              </div>
              <div className="">
                <NavLink to={"/addaddress"}>
                  <button
                    type="button"
                    className="w-[100%] h-[40px] text-white bg-green-800 rounded-lg text-md px-5 text-center me-2 mb-2 font-semibold"
                  >
                    Place Order
                  </button>
                </NavLink>
              </div>
            </div> */}
          </div>
 




            <div className=" w-[350px] mt-[15%] ms-[10%]">
              <div className="flex justify-between font-sans font-semibold">
                <p>Subtotal :</p>
                <p>{subtotal}</p>
              </div>
              <div className="flex justify-between font-sans font-semibold">
                <p>Delivary Cost :</p>
                <p>40</p>
              </div>
              <div className="flex justify-between font-sans font-semibold">
                <p>Total :</p>
                <p>{total}</p>
              </div>
              <div className="">
                <NavLink to={"/addaddress"}>
                  <button
                    type="button"
                    className="w-[100%] h-[40px] text-white bg-green-800 rounded-lg text-md px-5 text-center me-2 mb-2 font-semibold"
                  >
                    Place Order
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

         
        </div>
      ) : (
        <Emptycart />
      )}


      {

      }
    </>
  );
};

export default Cart;