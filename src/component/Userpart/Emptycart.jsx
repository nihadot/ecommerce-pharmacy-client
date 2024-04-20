import React from 'react';
import cart from "../images/cart.png"
<div styleName="" />

const Emptycart = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-center">
        <img src={cart} alt="Empty Cart" className="mx-auto mt-6 mb-4 h-[300px] w-[300px] " />
        <p className="text-gray-600 font-black  mb-2">Your cart is empty</p>
        <p className="text-sm text-gray-500">Add some items to continue shopping.</p>
      </div>
    </div>
  );
};

export default Emptycart;