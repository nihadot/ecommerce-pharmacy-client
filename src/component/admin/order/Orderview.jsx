import React from 'react';
import { Link } from 'react-router-dom';

function OrderViewPage() {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-green-700">Admin Order View</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Shipped Orders */}
        <div className="bg-green-200 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-green-800">Shipped Orders</h2>
          <Link to="/admin/orders/shipped" className="text-green-900 hover:underline">View Shipped Orders</Link>
        </div>

        {/* Delivered Orders */}
        <div className="bg-green-300 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-green-800">Delivered Orders</h2>
          <Link to="/admin/orders/delivered" className="text-green-900 hover:underline">View Delivered Orders</Link>
        </div>

        {/* Not Delivered Orders */}
        <div className="bg-green-400 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-green-800">Not Delivered Orders</h2>
          <Link to="/admin/orders/not-delivered" className="text-green-900 hover:underline">View Not Delivered Orders</Link>
        </div>

        {/* Processing Orders */}
        <div className="bg-green-500 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-green-800">Processing Orders</h2>
          <Link to="/admin/orders/processing" className="text-green-900 hover:underline">View Processing Orders</Link>
        </div>

        {/* Cancelled Orders */}
        <div className="bg-green-600 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-green-800">Cancelled Orders</h2>
          <Link to="/admin/orders/cancelled" className="text-green-900 hover:underline">View Cancelled Orders</Link>
        </div>
      </div>
    </div>
  );
}

export default OrderViewPage;