import React from 'react'
import Banners from './Banners'
import { Link, Outlet } from 'react-router-dom'

function BannerLayout() {
  return (
<>
    <div className="border-b-2 border-green-900 flex justify-center">
      <Link to={'/admin/bannerview'}>
        <button className='border border-green-900 px-3 py-1 my-2 hover:bg-green-900 hover:text-white text-xs sm:text-base'>View</button>
      </Link>
    </div>
    <Banners/>
    <Outlet/>
    </>
  )
}

export default BannerLayout
