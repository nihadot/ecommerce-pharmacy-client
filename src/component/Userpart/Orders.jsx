import { Card } from "@mui/material";
import { LuIndianRupee } from "react-icons/lu";
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
// import { errorToast, successToast } from '../../toast';
import { errorToast } from "../toast";
import { Context } from "../../App";



const Orders = () => {
  const [refresh, setRefresh] = useState(false);
  const [user, setUser] = useState([]);
  const [address, setAddress] = useState();
  const { id } = useParams();
  const { state } = useLocation();
  const { cart } = useContext(Context);
  const [data, setData] = useState([])

  console.log(state, "cart");

  let total = 0;
  let totalAmount=0;

  // const fetchAddress = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:3000/api/address/getById/${id}`
  //     );
  //     setAddress(response.data.result);
  //     console.log(response.data.result, "qqqqq");
  //   } catch (error) {
  //     console.log(error);
  //     errorToast(error.response.data.message || "Try Again");
  //   }
  // };



  // useEffect(()=>{
  //   fetchAPI()
  // },[refresh])

//   const fetchAPI = async(e) =>{
//     try {
//         const response = await axios.get("http://localhost:3000/api/buttons",{headers:{
//           'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
//         }})
//         console.log(response,"res");
  
//         setData(response.data.Offercard)
//       } catch (error) {
//         errorToast(error.message);
//       }
// }





  // useEffect(() => {
  //   fetchAddress();
  // }, [refresh]);

  // const userData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:3000/api/users${
  //         // JSON.parse(localStorage.getItem("userDetails"))._id
  //         localStorage.getItem("id")
  //       }`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("userToken")} `,
  //         },
  //       }
  //     );

  //     setUser(response.data.details);
  //     console.log(response.data.details);
  //   } catch (error) {
  //     errorToast(error.message);
  //   }
  // };

  // useEffect(() => {
  //   userData();
  // }, [refresh]);

  return (
    <div className="w-[700px] h-fit mx-[16%]">
      <p className="ps-[40%] pt-[20px] text-[27px]">Order Summary</p>
      <div className="ps-[36px] font-sans pt-[17px] w-[580px] h-fit\">
        {/* <p className="text-[22px] ">Hello {user.Fname} </p> */}
        <p className="text-[19px] ">Thank you for your purchase!</p>
        <p className="font-light">
          {" "}
          Your order will be processed within 24 hours during woring days, We
          will notify you by email once your order has been shipped.
        </p>

        <p>

        <ul>
                    <li>{state.addressInfo?.fullname}</li>
                    <li>{state.addressInfo?.buildingName}</li>
                    <li>{state.addressInfo?.roadName}</li>
                    <li>{state.addressInfo?.houseNo}</li>
                    <li>{state.addressInfo?.pinCode}</li>
                    <li>{state.addressInfo?.phoneNumber}</li>
                  </ul>
        </p>
      </div>
      <div className="pb-[40px]">
        <Card className="w-[850px] h-auto m-7">
          <div className="w-[850px] h-[80px] pt-[20px] ps-[20px] shadow-md flex justify-between bg-green-50">
            <div className="w-[150px] ">
              <p className="font-sans font-semibold">Order: {state._id}</p>
              <p className="font-sans font-semibold">OrderDate: {new Date(state.createdAt).getDate() + ' / ' + new Date(state.createdAt).getMonth() + '/' + new Date(state.createdAt).getFullYear()}</p>
            </div>
            <div className="font-sans pe-[30px]">
              <button
                onClick={() => window.print()}
                type="submit"
                className="text-white bg-green-800 hover:bg-emerald-950 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-950 dark:hover:bg-emerald-950 dark:focus:ring-emerald-950"
              >
                Print
              </button>
            </div>
          </div>
          <div>
            <div>
              <div className="w-[850px] flex px-[10%] py-[5%] gap-[40px] font-sans bg-blue-200">
                <div className="w-[340px]">
                  <p className="font-semibold text-[17px]">
                    Your order will be send to:
                  </p>
             
                </div>
                <div className="w-[340px]">
                  <p>
                    <span className="font-semibold text-[17px]">
                      Payment method
                    </span>
                    : Cash on 
                    Delivary
                  </p>
                  <p>
                    <span className="font-semibold text-[17px]">
                      Shipping Charge
                    </span>
                    : 40 per Order <br />
                  </p>
                </div>
              </div>
              <div className="w-[850px] space-y-4 px-[50px] bg-green-300 flex flex-wrap gap-[20px]">
                {cart.map((item, index) => {
                
                  return (
                    <>
                      <div className="flex flex-wrap pt-[10px]">
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
                               
                                </p>
                              </div>
                              
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

          <div className="px-[30px] py-[20px] font-sans font-semibold bg-green-50">
            <div className="flex flex-wrap justify-between">
              <p>Amount:</p>
              <div className="flex">
                <p className="pt-[5px]">
                  <LuIndianRupee />
                </p>
                <p>{state.total}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Orders;