import { Card } from "@mui/material";
import { LuIndianRupee } from "react-icons/lu";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { errorToast } from "../toast";
import { Context } from "../../App";
import Addressview from "./Addressview";
import { Link } from "react-router-dom";

const Orderdetails = () => {
  const [refresh, setRefresh] = useState(false);
  const [user, setUser] = useState([]);
  const [address, setAddress] = useState();
  const { id } = useParams();
  const { cart } = useContext(Context);

  const fetchAddress = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/geetorders/getById/${
          JSON.parse(localStorage.getItem("userDetails"))?._id
        }`
      );
      setAddress(response.data.data);

      const response___ = await axios.get(
        `http://localhost:3000/api/user/getById/${
          JSON.parse(localStorage.getItem("userDetails"))?._id
        }`
      );
      setUser(response___.data.data);
      // console.log(response.data.data, "qqqqq");
    } catch (error) {
      console.log(error);
      errorToast(error.response.data.message || "Try Again");
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  return (
    <div className="w-[700px] h-auto mx-[16%]">
      <p className="ps-[40%] pt-[20px] text-[27px]">Order Summary</p>
      <div className="ps-[36px] font-sans pt-[17px] w-[580px] h-[140px]">
        <p className="font-bold text-xl">Hello,</p>
        {user.Fname} {user.Lname}
      </div>

      {/* <div className="">
        <h1 className="font-bold text-left text-xxl-start text-green-500">Your Delivery Address is:</h1>
    
      </div> */}

      <div>
        <div className="">
          <div className="w-[690px]  bg-green-800     items-center  rounded   flex flex-wrap flex-col ">
            {address &&
              address.map((item, index) => {
                return (
                  <div className="border-white m-6 p-3  bg-emerald-500">
                    <div className=" font-sans bg-green-300 m-3 p-6  flex items-center text-white">
                      <div className="">
                        <p className="font-semibold text-[17px]">
                          Your order will be send to:
                        </p>
                        <ul>
                          <li>{item?.addressInfo?.areaColony}</li>
                          <li>{item?.addressInfo?.buildingName}</li>
                          <li>{item?.addressInfo?.roadName}</li>
                          <li>{item?.addressInfo?.houseNo}</li>
                          <li>{item?.addressInfo?.pinCode}</li>
                          <li>{item?.addressInfo?.phoneNumber}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="m-3 flex items-center flex-col">
                      
                    <h1 className="text-white font-bold m-3 ">Your order items</h1>
                    <p>totals amt:{item.total}</p>

                    <div className="flex flex-col pt-[10px]">
                      {item?.productsArray &&
                        item?.productsArray.map((i) => {
                          {
                            console.log(i, "--");
                          }
                          return (
                            <Card
                              className="w-[250px] h-[150px] pb-12 px-[20px] py-[20px]"
                              key={index}
                            >
                              <div className="flex flex-wrap justify-between">
                                <div className=" pb-[10px] w-[130px] h-[130px]">
                                  <img
                                    src={i?.mainimage}
                                    alt="loading"
                                    className="w-full h-full"
                                  />
                                </div>

                                <div className="pt-[30px] font-sans">
                                  <p>{i?.name}</p>
                                  <div className="flex">
                                    <p className="pt-[5px]">
                                      <LuIndianRupee />
                                    </p>
                                    <p>
                                      <p>{i?.price}</p>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          );
                        })}
                    </div>

                    <p>
                      {" "}
                      {user.Fname} {user.Lname}
                    </p>

                    <Link to={"/order"} state={item}>
                      <button className=" bg-white p-2 rounded ">print</button>
                    </Link>
                    </div>

                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderdetails;
