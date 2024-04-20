import React from 'react';
import emptywishlist from "../images/emptywishlist.png"

const EmptywishList = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img
        className="w-48 mb-4"
        src={emptywishlist}
        alt="Empty Wish List"
      />
      <h2 className="text-lg text-gray-800 mb-2">Your wish list is empty.</h2>
      <p className="text-gray-600 mb-4">Start adding items to your wish list!</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Item
      </button>
    </div>
  );
};
export default EmptywishList;