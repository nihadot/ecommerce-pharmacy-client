import React from 'react'
import { useParams } from 'react-router-dom'
// import { product } from '../productlist/Product'


const Detail = () => {

const {name}=useParams()

  return (
   <>
   <div>
   <p>details</p>
     <h1>{name}</h1>
     </div>
   </>
  )
}

export default Detail