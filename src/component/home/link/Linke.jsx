// import React from 'react'
// import { Link } from 'react-router-dom'

// const Linke = () => {
//   return (
//     <>
//     <div className='flex flex-wrap bg-white justify-around font-thin border-spacing-1 border-green-200 border text-green-700 font-sans'>
//       <Link to="/details/Pain Relief" className='p-2'> 
//        <p>Pain Relief</p></Link>
      
    
//      <Link to="/details/Cold and Flue" className='p-2'>
//      <p>Cold and Flu</p>
//      </Link>
//      <Link to="/details/Diabetes Care" className='p-2'>
//      <p>Diabetes Care</p>
//      </Link>

//      <Link to="/details/Digestive Health" className='p-2'>
//      <p>Digestive Health</p>
//      </Link>

      
//      <Link to="/details/First Aid" className='p-2'>
//      <p>First Aid</p>
//      </Link>
      
//      <Link to="/details/Skin Care" className='p-2'>
//      <p>Skin Care</p>
//      </Link>
      
//      <Link to="/details/Child And Care" className='p-2'>
//      <p>Child And Baby Care</p>
//      </Link>
      
//      <Link to="/details/" className='p-2'>
//      <p>Child And Baby Care</p>
//      </Link>
      
//      <Link to="/details/Heart Health" className='p-2'>
//      <p>Heart Health</p>
//      </Link>
     
     
//      <Link to="/details/Eye ear Care" className='p-2'>
//      <p>Eye and Ear Care</p>
//      </Link>
     
      
      
//      <Link to="/details" className='p-2'>
//      <p>Respiratory Health</p>
//      </Link>
     
      
      
     
     
//     </div>
    
    
    
    
    
//     </>
//   )
// }

// export default Linke

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { errorToast, successToast } from '../../toast';

function Linke() {
  const [showCategories, setShowCategories] = useState(false);
  const [ categories,setCategories ] = useState([]);
  
  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  
  useEffect(()=>{
    fetchAPI()
  },[])


  const fetchAPI = async(e) =>{
    try {
        const response = await axios.get("http://localhost:3000/api/category",{headers:{
          'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
        }})
        console.log(response,"res");
  
        setCategories(response.data.Category)
      } catch (error) {
        errorToast(error.message)
      }
}

  return (
    <>
     {/* header-start */}
     <div className="flex flex-col sm:flex-row justify-between gap-3 p-4 text-green-900">


        <div className="hidden sm:flex flex-wrap justify-center gap-5 m-auto w-[full]">

        { categories && categories.map((item,i)=>{
                return(
                <> 
                <Link to={`/linklayout/${item._id}` } className='hover:bg-green-100 p-2 rounded-lg'>
                      <p>{item.name}</p>
                </Link>
                </>
                )
              })
            }
       

         
        </div>



       {/* Toggle button */}
       <button onClick={toggleCategories} className='border p-2 rounded-lg sm:hidden text-sm'>
          {showCategories ? <p className='text-xl'><i class="fa-solid fa-circle-xmark"></i></p> : 'Show Categories'}
        </button>
{/* to smaller scrn */}
        {
        showCategories && (
          <div className="flex flex-wrap gap-3 justify-center sm:justify-between p-4 text-green-900">


          <Link to={`/linklayout/${'pain-releif'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>Pain Relief</p>
          </Link>

          <Link to={`/linklayout/${'coldandflu'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>Cold and Flu</p>
          </Link>

          <Link to={`/linklayout/${'diabetes'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>Diabetes Care</p>
          </Link>

          <Link to={`/linklayout/${'digestive-health'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>Digestive Health</p>
          </Link>

          <Link to={`/linklayout/${'firstaid'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>First Aid</p>
          </Link>

          <Link to={`/linklayout/${'skincare'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>Skin Care</p>
          </Link>

          <Link to={`/linklayout/${'child-babycare'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>Child and Baby Care</p>
          </Link>

          <Link to={`/linklayout/${'heart-health'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>Heart Health</p>
          </Link>

          <Link to={`/linklayout/${'eye-earcare'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>Eye and Ear Care</p>
          </Link>

          <Link to={`/linklayout/${'respiratory-health'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>Respiratory Health</p>
          </Link>

          </div>
        )
}

        </div>
        {/* header-end */}

    </>
  )
}

export default Linke
