import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { errorToast, successToast } from "../../toast";

function ProductEdit() {


    const [products, setProducts] = useState([])
    const [refresh, setRefresh] = useState(false);


    useEffect(() => {
        fetchdata()
    }, [refresh])

    const fetchdata = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/product')

            setProducts(response.data.product)

        } catch (error) {
            errorToast(error.response.data.message, 'error')
        }
    }
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/product/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("adminToken")} `
                }
            })
            successToast(response.data.message)
            setRefresh(!refresh)
        } catch (error) {
            errorToast(error.message)
        }
    }




    return (
        <div>
            <Link to={'/admin/addproduct'} className='hover:underline   mx-10'>Add Product</Link>



            <div className="relative overflow-x-auto mt-16 ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='bg-green-200'>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delivery Cost
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                images
                            </th>

                            <th scope="col" className="px-6 ms-4 py-3">
                                Edit Status
                            </th>
                            <th scope="col" className="px-6  py-3">
                                Delete Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => {
                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    key={index}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item?.deliveryCost}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.quantity}
                                    </td>
                                    <td className="px-6 py-4">
                                        <img src={item.mainimage} alt="" className=' w-[100px] sm:w-[50px] sm:h-[50px]' />
                                    </td>


                                    <td className="px-6 py-4">
                                        {/* {item.categoriesInfo.name}  */}
                                        {/* {item.categoriesInfo[0].name} */}
                                        {item.categoriesInfo ? item.categoriesInfo[0]?.name : 'N/A'} 
                                    </td>

                                    <td className="flex mt-3 gap-1 justify-center">
                                        {
                                            item.image.map((item) => {
                                                return (
                                                    <> <img src={item.image} className='bg-slate-300 
                   w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]' alt="Loading..." />
                                                    </>
                                                )
                                            })
                                        }
                                    </td>



                                    <NavLink to={`/admin/editform/${item._id}`}
                                        state={item}>
                                        <th className="text-green-600  bg-green-200  mt-6 ms-4 border-2 rounded h-[30px] w-[50px]"
                                        // alert(_id)
                                        >

                                            Edit

                                        </th>
                                    </NavLink>
                                    <th className="text-green-600  bg-green-200  mt-6 ms-8 border-2 rounded h-[30px] w-[50px]" onClick={() => { handleDelete(item._id) }}>Delete

                                    </th>
                                </tr>
                            )
                        })}
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                stethescope
                            </th>
                            <td class="px-6 py-4">
                                Digital
                            </td>
                            <td class="px-6 py-4">
                                $2800
                            </td>
                            <td class="px-6 py-4">
                                $1999
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                Nebulizer
                            </th>
                            <td className="px-6 py-4">
                                white
                            </td>
                            <td className="px-6 py-4">
                                $2400
                            </td>
                            <td className="px-6 py-4">
                                $999
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/*  */}
        </div>
    )
}

export default ProductEdit