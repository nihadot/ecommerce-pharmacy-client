import React from 'react'
import Addressview from './Addressview'
import Addressview2 from './Addressview2'
import { Link } from 'react-router-dom'

const Addressviewpage = () => {
  return (
    <>

    <div className='text-center text-green-600 font-bold mt-8'>
        <h1>Select your delivery address</h1>
    </div>
    <Link to={'/ordering'} >
    <div className=''>
        <Addressview/>
    </div>
    </Link>
    <Link to={'/ordering'} >
    <div className=''>
        <Addressview2/>
    </div>
    </Link>
    </>
  )
}

export default Addressviewpage