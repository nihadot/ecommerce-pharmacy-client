import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import Aheader from '../adminheader/Aheader'

const Adminlayout = () => {
  return (
   <>

 
   <div className=''>
   <Aheader/>
   <div className='flex'>
    <Sidebar/>
    <Outlet/>
    </div>

   </div>
   
   
   
   </>
  )
}

export default Adminlayout