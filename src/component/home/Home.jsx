import React from 'react'
import Data from './data/Data'
import Button from './buttons/Button'
import Button1 from './button1/Button1'
import Data1 from './data1/Data1'
import Black from './black/Black'
import Linke from './link/Linke'
import Blog from './blog/Blog'
import { nproduct } from './product data/Nproduct'
import Card from './cards/Card'
import { pproduct } from './popularproduct/Pproduct'
import { tproduct } from './tproduct/Tproduct'
import { mproduct } from './mproduct/Mproduct'
import { uproduct } from './uproduct/Uproduct'
// import Product from '../home/product/Product'
// import Data from './data/Data'

const Home = () => {
  return (
<>

<div className="">
  <Linke/>
 </div>


 <div className="">
  <Data/>
  </div>

 <div className="">
  <Button/>
 </div>
 
 <div className='text-xl font-bold ms-28 my-5'>
      <h1>New Product</h1>
      </div>

  <div className="flex flex-wrap justify-center gap-10 my-20">
        {nproduct.map((item, index) => <Card name={item.title} amount={item.price} img={item.image} key={index} />)}
      </div>

    <div className='text-xl font-bold ms-28 my-5'>
      <h1>Popular Product</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-10 my-20">
        {pproduct.map((item, index) => <Card name={item.title} amount={item.price} img={item.image} key={index} />)}
      </div>


  

 <div>
  <Black/>
 </div>


 <div className='text-xl font-bold ms-28 my-5'>
      <h1>Top Product</h1>
      </div>
 
 <div className="flex flex-wrap justify-center gap-10 my-20">
        {tproduct.map((item, index) => <Card name={item.title} amount={item.price} img={item.image} key={index} />)}
      </div>



      <div>
  <Button1/>
 </div>


 <div className='text-xl font-bold ms-28 my-6'>
      <h1>Medical Product</h1>
      </div>

 <div className="flex flex-wrap justify-center gap-10 my-20">
        {mproduct.map((item, index) => <Card name={item.title} amount={item.price} img={item.image} key={index} />)}
      </div>



      <div className='text-xl font-bold ms-28 my-5'>
      <h1>Upcoming Product</h1>
       </div>

      <div className="flex flex-wrap justify-center gap-10 my-20">
        {uproduct.map((item, index) => <Card name={item.title} amount={item.price} img={item.image} key={index} />)}
      </div> 



 <div>
  <Data1/>
 </div>


 <div>
  <Blog/>
 </div>


    </>
  )
}

export default Home