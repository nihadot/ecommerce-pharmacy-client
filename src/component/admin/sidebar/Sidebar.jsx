import React from 'react'
import { NavLink , Routes,useNavigate} from "react-router-dom";
import Blogg from '../blog/Blogg';
import { FaClinicMedical } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const logoutAdmin = ()=>{
    localStorage.removeItem("adminToken")
    localStorage.removeItem("adminDetails")
    navigate('/alogin')
}
  // const logoutAdmin = async(e) => {

    // e.preventDefault();
    // console.log(formFiled);
    // try {
    //   const response = await Login(formFiled)
 
    //    successToast(response.data.message)

    //    console.log(response.data);

    //    if(response.data){
    //     return errorToast('logout is success')
    //    }
      
    //   } catch (error) {
    //     errorToast(error.response.data.message,'not logout')
    //   }

    //  }




  return (
   <>
  <div className=" rounded-r-xl bg-green-600 -mt-20 overflow-auto w-[280px] h-screen ">
  <div className='text-white-700 mt-20  ms-5'>
        <FaClinicMedical className='w-7 h-7 text-white-700 mx-3 ' />
         <span className='text-white-700 mt-1'>Medico Store</span> 
        </div>
      <ul className="mt-6">
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 sm:text-base py-3 hover:bg-green-100">
          <NavLink to={"/home"}> Home </NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto  sm:text-base px-9 py-3 hover:bg-green-100">
          <NavLink to={"/admin/products"}> Product </NavLink>
        </li>
       
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto  sm:text-base px-9 py-3 hover:bg-green-100">
          <NavLink to={"/admin/category"}> Category </NavLink>
        </li>



        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto sm:text-base px-9 py-3 hover:bg-green-100">
          <NavLink to={"/admin/vieworder"}> Orders </NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] sm:text-base m-auto px-9 py-3 hover:bg-green-100">
          <NavLink to={"/admin/blogs"}> Blog </NavLink>

        </li>

        <NavLink to={'/admin/banner'}>
            <li className= "text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 sm:text-base hover:bg-green-100">Banner</li>
        </NavLink>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 sm:text-base py-3 hover:bg-green-100">
          <NavLink to={"/admin/payment"}> Payments </NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 sm:text-base hover:bg-green-100">
          <NavLink to={"/admin/productedit"}> ProductView </NavLink>
        </li>

        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 sm:text-base hover:bg-green-100">
          <NavLink to={"/admin/buttons"}> Buttons </NavLink>
        </li>
        
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 sm:text-base hover:bg-green-100">
          <NavLink to={"/admin/banners"}> Banners </NavLink>
        </li>





        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 sm:text-base hover:bg-green-100">
          <NavLink to={"/admin/profile"}> Profile</NavLink>
        </li>

        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 sm:text-base hover:bg-green-100">
          <NavLink onClick={logoutAdmin} > Logout </NavLink>
        </li>
      </ul>
    </div>
    
        <Routes path="/blog" component={Blogg} /> {/* Render the Blog component when the /blog route is matched */}
      

   </>
  )
}

export default Sidebar