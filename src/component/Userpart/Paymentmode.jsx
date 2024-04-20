
import { useState } from "react";

// import { NavLink } from "react-router-dom";

const Paymentmode = () => {
  const [paymentMode, setPaymentMode] = useState("");

  const handlePaymentModeChange = (mode) => {
    setPaymentMode(mode);
  };

  const handlePayment = () => {
  
    console.log("Payment processed successfully!");
  };


  return (
    <div className="flex flex-wrap ps-40 bg-green-50">
      <div className="w-[500px] h-auto container py-8">
        <h1 className="text-2xl ps-28 font-bold mb-4">Choose Payment Mode</h1>
        <div className="flex justify-center space-x-4">
          <button
            className={`px-4 py-2 rounded ${
              paymentMode === "online"
                ? "bg-emerald-700 text-white"
                : "bg-gray-300 text-emerald-700"
            }`}
            onClick={() => handlePaymentModeChange("online")}
          >
            Online Payment
          </button>
          <button
            className={`px-4 py-2 rounded ${
              paymentMode === "cashOnDelivery"
                ? "bg-emerald-700 text-white"
                : "bg-gray-300 text-emerald-700"
            }`}
            onClick={() => handlePaymentModeChange("cashOnDelivery")}
          >
            Cash on Delivery
          </button>
        </div>
        {paymentMode === "online" && (
          <div className="ps-[40px] w-[450px] h-[550px]">
            <p className="ps-16 py-4 text-[19px]">
              Selected Payment Mode: <strong>Online</strong>
            </p>
            <div className="ps-36">
              <button
                className="mt-4 bg-emerald-700 text-white px-4 py-2 rounded"
                onClick={handlePayment}
              >
                Pay Now
              </button>
            </div>
          </div>
        )}
        {paymentMode === "cashOnDelivery" && (
          <div className="ps-[40px] w-[450px] h-[550px]">
            <p className="ps-14 py-4 text-[19px]">
              Selected Payment Mode: <strong>Cash On Delivery</strong>
            </p>
            {/* <Addressview/> */}
          </div>
        )}
      </div>

     <div className="ps-[30px] pt-[4%]">
     {/* <OrderDetails/> */}
     </div>
    </div>
  );
};

export default Paymentmode;