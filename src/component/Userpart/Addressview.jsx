import { NavLink, useParams } from "react-router-dom";
import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { errorToast } from "../toast";


const Addressview = () => {
  const [address, setAddress] = useState();
  const [refresh, setRefresh] = useState("");
  const { id } = useParams();
  
  // const { state } = useLocation();

  // const address = state;

  const fetchData = async () => {
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
    fetchData();
  }, [refresh]);

  return (
    <div className="ps-6">
      <>
        <Card className="my-4 ps-5">
          <div className="w-[355px] flex justify-between">
            <p className="block my-2 text-[20px] font-semibold">Delivery To:</p>
          </div>

          <div className="text-[18px] font-sans ">
            <p> Name:{address?.fullname}</p>
            <p>Mobile no:{address?.phoneNumber}</p>
            <p>Pincode:{address?.pinCode}</p>
            <p>Building Name:{address?.buildingName}</p>
            <p>Road Name:{address?.roadName}</p>
            <p>House No:{address?.houseNo}</p>
            <p>City:{address?.city}</p>
            <p>State:{address?.state}</p>
          </div>
          {/* <NavLink to={`/order/${id}`}>
            <button
              type="submit"
              className="my-4 bg-green-800 text-white px-4 py-2 rounded"
            >
              Place Order
            </button>
          </NavLink> */}
        </Card>
      </>
    </div>
  );
};

export default Addressview;