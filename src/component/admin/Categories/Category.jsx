import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Category() {
  return (
    <>
    <div className="flex gap-5 m-3 mt-5 border-b-2 justify-center border-green-900">
        <Link to={'/admin/addcategory'}><button className='border border-green-900 px-3 py-1 my-2 hover:bg-green-900 hover:text-white text-xs sm:text-base'>Add category</button></Link>
        <Link to={'/admin/viewcategory'}><button  className='border border-green-900 px-3 py-1 my-2 hover:bg-green-900 hover:text-white text-xs sm:text-base'>View Category</button></Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Category