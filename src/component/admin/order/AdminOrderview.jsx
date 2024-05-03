import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminOrderview = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
  
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3000//api/geetorders');
        setOrders(response.data.result);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className='text-green-700 mt-8 border-2 border-green-950 mx-8 h-[500px] w-[500px]'>
      <h1 className='mt-5 ms-8 font-extrabold text-center text-green-700 underline 
      '> View Order Page</h1>
      <table>
        <thead>
          <tr className='flex gap-7 ms-2 underline'>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Total Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.addressId}</td>
              <td>{order.fullame}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrderview;
