import React from 'react'
import { Link } from 'react-router-dom'

const Linke = () => {
  return (
    <>
    <div className='flex bg-white justify-around font-thin border-spacing-1 border-green-200 border text-green-700 '>
      <Link to="/details/Pain Relief"> 
       <p>Pain Relief</p></Link>
      
    
     <Link to="/details/Cold and Flue">
     <p>Cold and Flu</p>
     </Link>
     <Link to="/details/Diabetes Care">
     <p>Diabetes Care</p>
     </Link>

     <Link to="/details/Digestive Health">
     <p>Digestive Health</p>
     </Link>

      
     <Link to="/details/First Aid">
     <p>First Aid</p>
     </Link>
      
     <Link to="/details/Skin Care">
     <p>Skin Care</p>
     </Link>
      
     <Link to="/details/Child And Care">
     <p>Child And Baby Care</p>
     </Link>
      
     <Link to="/details/">
     <p>Child And Baby Care</p>
     </Link>
      
     <Link to="/details/Heart Health">
     <p>Heart Health</p>
     </Link>
     
     
     <Link to="/details/Eye ear Care">
     <p>Eye and Ear Care</p>
     </Link>
     
      
      
     <Link to="/details">
     <p>Respiratory Health</p>
     </Link>
     
      
      
     
     
    </div>
    
    
    
    
    
    </>
  )
}

export default Linke