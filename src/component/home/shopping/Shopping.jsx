import React from 'react'
import Header from '../../header/Header'
import { nproduct } from '../product data/Nproduct'
import { pproduct } from '../popularproduct/Pproduct'
import { tproduct } from '../tproduct/Tproduct'
import { mproduct } from '../mproduct/Mproduct'
import { uproduct } from '../uproduct/Uproduct'
import Card from '../cards/Card'
import Footer from '../../footer/Footer'


const Shopping = () => {
  return (
    <>
    <div className=''>

        <Header/>
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

    
 <div className='text-xl font-bold ms-28 my-5'>
      <h1>Top Product</h1>
      </div>
 
 <div className="flex flex-wrap justify-center gap-10 my-20">
        {tproduct.map((item, index) => <Card name={item.title} amount={item.price} img={item.image} key={index} />)}
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

 <div className=''>

<Footer/>

 </div>
    
    </>
  )
}

export default Shopping