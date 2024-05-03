import React from 'react'
import Data from './data/Data'
import Button from './buttons/Button'
import Button1 from './button1/Button1'
import Data1 from './data1/Data1'
import Black from './black/Black'
import Linke from './link/Linke'
import { nproduct } from './product data/Nproduct'
import Card from './cards/Card'
import { mproduct } from './mproduct/Mproduct'
import { uproduct } from './uproduct/Uproduct'
import Black2 from './black/Black2'
import Black3 from './black/Black3'
import Maincard from './maincard/Maincard'
import Blog1 from './blog/Blog1'
import Maincard1 from './maincard/Maincard1'
import Maincard2 from './maincard/Maincard2'
import Maincard3 from './maincard/Maincard3'
import Maincard4 from './maincard/Maincard4'
import  Blog from './blog/Blog'
import Firstaid from './maincard/Firstaid'


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

      <Maincard/>
      {/* <Maincard2/> */}
      <Firstaid/>

      <div className=" flex justify-around mb-8 mt-12 ">
        <Black/>
        <div className="flex-col ms-28 w-[500px]">
          <Black2/>
          <Black3/>
        </div>
      </div>


<Maincard1/>

      <div>
  <Button1/>
 </div>


<Maincard3/>
<Maincard4/>

 <div>
  <Data1/>
 </div>


 <div>
  {/* <Blog/> */}
   <Blog1/> 
 </div>


    </>
  )
}

export default Home