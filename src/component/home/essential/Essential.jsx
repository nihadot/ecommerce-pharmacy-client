import React from 'react'
import Header from '../../header/Header'
import { Eproduct } from '../essentialmedicin/Eproduct'
import Cardtwo from '../Cardtwo/Cardtwo'
import Medicine from '../Medicine/Medicine'

const Essential = () => {
  return (
    <>

<div className=''>
    <Medicine/>
</div>

  <div className="flex flex-wrap justify-center gap-10 my-20">
        {Eproduct.map((item, index) => <Cardtwo name={item.title} amount={item.price} img={item.image}offerprice={item.offerprice} key={index} />)}
      </div>


    </>
  )
}

export default Essential