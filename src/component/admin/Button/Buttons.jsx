import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Buttons() {
  return (
    <>
    <div className="flex gap-5 m-3 mt-5 border-b-2 justify-center border-green-900">
        <Link to={'/admin/buttonadd'}><button className='border border-green-900 px-3 py-1 my-2 hover:bg-green-900 hover:text-white text-xs sm:text-base'>Add</button></Link>
        <Link to={'/admin/buttonview'}><button  className='border border-green-900 px-3 py-1 my-2 hover:bg-green-900 hover:text-white text-xs sm:text-base'>View</button></Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Buttons