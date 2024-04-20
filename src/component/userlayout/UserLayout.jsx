import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Detail from '../home/details/Detail'
import { product } from '../home/productlist/Product'

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