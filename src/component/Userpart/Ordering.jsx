import { Card } from "@mui/material";
import { LuIndianRupee } from "react-icons/lu";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { errorToast } from "../toast";
import { Context } from "../../App";
import Addressview from "./Addressview";
import { Link } from 'react-router-dom'

const Ordering = () => {
  const [refresh, setRefresh] = useState(false);
  const [user, setUser] = useState([]);
  const [address, setAddress] = useState();
  const { id } = useParams();
  const { cart } = useContext(Context);

  // console.log(cart, "cart");

  let total = 0;
  let totalAmount=0;
  let offerprice=0;
   let itemtotal =0;

  const fetchAddress = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/address/getById/${id}`
      );
      setAddress(response.data.result);
      console.log(response.data.result, "qqqqq");
    } catch (error) {
      console.log(error);
      errorToast(error.response.data.message || "Try Again");
    }
  };

  useEffect(() => {
    fetchAddress();
  }, [refresh]);

  const userData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/users${
          // JSON.parse(localStorage.getItem("userDetails"))._id
          localStorage.getItem("id")
        }`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")} `,
          },
        }
      );

      setUser(response.data.details);
      console.log(response.data.details);
    } catch (error) {
      errorToast(error.message);
    }
  };

  useEffect(() => {
    userData();
  }, [refresh]);

  return (
    <div className="w-[700px] h-auto mx-[16%]">
      <p className="ps-[40%] pt-[20px] text-[27px]">Order Summary</p>
      <div className="ps-[36px] font-sans pt-[17px] w-[580px] h-[140px]">
        <p className="text-[22px] ">Hello {user.Fname} </p>
    
      </div>

      <div className="">
        <h1 className="font-bold text-left text-xxl-start text-green-500">Your Delivery Address is:</h1>
        <Addressview/>
      </div>
    
          
          <div>
            <div>
              {/* <div className="w-[850px] flex px-[10%] py-[5%] gap-[40px] font-sans bg-blue-200">
                <div className="w-[340px]">
                  <p className="font-semibold text-[17px]">
                    Your order will be send to:
                  </p>
                  <ul>
                    <li>{address?.fullname}</li>
                    <li>{address?.buildingName}</li>
                    <li>{address?.roadName}</li>
                    <li>{address?.houseNo}</li>
                    <li>{address?.pinCode}</li>
                    <li>{address?.phoneNumber}</li>
                  </ul>
                </div>
               
              </div> */}
              <div className="w-[690px]  px-[50px] bg-green-700  ms-4 rounded mt-12 overflow  flex flex-col gap-[15px]">
                <h1 className="text-white">Your order items</h1>
                {cart.map((item, index) => {
                  totalAmount =
                    totalAmount +
                    item?.productInfo?.price * item?.quantity;
                    total=totalAmount+40;
                  return (
                    <>
                      <div className="flex flex-col pt-[10px]">
                        <Card
                          className="w-[250px] h-[150px] px-[20px] py-[20px]"
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

                            <div className="pt-[30px] font-sans">
                              <p>{item.productInfo.name}</p>
                              <div className="flex">
                                <p className="pt-[5px]">
                                  <LuIndianRupee />
                                </p>
                                <p>
                                 
                                  {item?.productInfo?.price *
                                    item?.quantity}
                                </p>
                              </div>
                              <p>Qty:{item.quantity}</p>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>

{/* pricedetails */}




  
<div className="px-[30px] py-[20px] font-sans font-semibold bg-blue-200 rounded mt-12 w-[690px] ms-4">
           
           <div className="flex justify-between">
            
           <div className="">
            <div className="flex justify-between">
              <p> Order Total:</p>
              <div className="flex">
                <p className="pt-[5px]">
                  <LuIndianRupee />
                </p>
                <p> {totalAmount}</p>
              </div>
            </div>


            <div className="flex  gap-15 justify-between">
              <p> Item Discount:</p>
              <div className="flex">
                <p className="pt-[5px]">
                  <LuIndianRupee />
                </p>
                <p> {offerprice}</p>
              </div>
            </div>

            <div className="flex  gap-15 justify-between">
              <p> Item Total:</p>
              <div className="flex">
                <p className="pt-[5px]">
                  <LuIndianRupee />
                </p>
                <p> {itemtotal}</p>
              </div>
            </div>




            <div className="flex  gap-15 justify-between">
              <p> shipping Charge:  </p>
              <div className="flex">
                <p className="pt-[5px]">
                  <LuIndianRupee />
                </p>
                <p> 40</p>
              </div>
            </div>

           
            <div className="flex  gap-15 justify-between">
              <p> Total:  </p>
              <div className="flex">
                <p className="pt-[5px]">
                  <LuIndianRupee />
                </p>
                <p>{total}</p>
              </div>
            </div>



            </div>
            </div>
            </div>






          <div className="px-[30px] py-[20px] font-sans font-semibold bg-green-200 rounded mt-12 w-[690px] ms-4">
           
           <div className="flex justify-between">
            
           <div className="">
            <div className="flex-col justify-between">
              <p> TotalAmount:</p>
              <div className="flex">
                <p className="pt-[5px]">
                  <LuIndianRupee />
                </p>
                <p>{total}</p>
              </div>
            </div>
            </div>
            <Link to={'/paymentmode'} >
            <button className="border-r-2 bg-green-800 rounded w-[220px] h-[40px] text-white">Proceed to pay</button>
             </Link>
            </div>
          </div>
        
      </div>
    
  );
};

export default Ordering;