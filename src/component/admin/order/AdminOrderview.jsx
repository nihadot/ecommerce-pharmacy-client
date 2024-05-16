// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AdminOrderview = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
  
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000//api/geetorders');
//         setOrders(response.data.result);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className='text-green-700 mt-8 border-2 border-green-950 mx-8 h-[500px] w-[500px]'>
//       <h1 className='mt-5 ms-8 font-extrabold text-center text-green-700 underline 
//       '> View Order Page</h1>
//       <table>
//         <thead>
//           <tr className='flex gap-7 ms-2 underline'>
//             <th>Order ID</th>
//             <th>Customer Name</th>
//             <th>Total Amount</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map(order => (
//             <tr key={order.id}>
//               <td>{order.addressId}</td>
//               <td>{order.fullame}</td>
//               <td>{order.total}</td>
//               <td>{order.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminOrderview;
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// const AdminOrderview = () => {
//   const [users, setUsers] = useState([]);
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/users');
//         setUsers(response.data.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/geetorders');
//         setOrders(response.data.data);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       }
//     };

//     fetchUsers();
//     fetchOrders();
//   }, []);

//   return (
//     <div className='text-green-700 mt-8 mx-8'>
//       <h1 className='font-extrabold text-center text-green-700 underline'>Admin Dashboard</h1>

//       <div className='mt-8'>
//         <h2 className='font-bold text-lg mb-4'>User Details</h2>
//         <table className='border-collapse border border-green-500'>
//           <thead>
//             <tr className='bg-green-200'>
//               <th className='border border-green-500 px-4 py-2'>User ID</th>
//               <th className='border border-green-500 px-4 py-2'>Full Name</th>
//               {/* Add more user details headers if needed */}
//             </tr>
//           </thead>
//           <tbody>
//             {users.map(user => (
//               <tr key={user._id} className='bg-green-100'>
//                 <td className='border border-green-500 px-4 py-2'>{user._id}</td>
//                 <td className='border border-green-500 px-4 py-2'>{user.fullname}</td>
//                 {/* Add more user details cells if needed */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className='mt-8'>
//         <h2 className='font-bold text-lg mb-4'>Order Details</h2>
//         <table className='border-collapse border border-green-500'>
//           <thead>
//             <tr className='bg-green-200'>
//               <th className='border border-green-500 px-4 py-2'>Order ID</th>
//               <th className='border border-green-500 px-4 py-2'>Customer Name</th>
//               <th className='border border-green-500 px-4 py-2'>Total Amount</th>
//               <th className='border border-green-500 px-4 py-2'>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map(order => (
//               <tr key={order._id} className='bg-green-100'>
//                 <td className='border border-green-500 px-4 py-2'>{order._id}</td>
//                 <td className='border border-green-500 px-4 py-2'>{order.fullname}</td>
//                 <td className='border border-green-500 px-4 py-2'>{order.total}</td>
//                 <td className='border border-green-500 px-4 py-2'>{order.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminOrderview;