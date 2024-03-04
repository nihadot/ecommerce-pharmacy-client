import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (

 
 <div>
  <div className="header">
  <Header/>
  </div>

<div className="outlety">

<Outlet/>
</div>


<Footer/>


 </div>
 
 
  )
}

export default UserLayout