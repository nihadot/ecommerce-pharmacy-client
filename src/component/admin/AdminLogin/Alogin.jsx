
import React,{ useState,useEffect } from "react";
import { NavLink, json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../../toast";
import { adminLogin } from "../../api/admin";
import axios from "axios";

const Alogin = () => {

 const [ tokenState, setTokenState ] = useState(Boolean(localStorage.getItem("adminToken")));
   
   const navigate = useNavigate();
  const [email,setEmail] = useState('')
  const [Password,setPassword] = useState('')


  useEffect(() => {
    if(!tokenState) {
      navigate('/admin')
    }
  }, [navigate, tokenState]);

  
  const handleSubmit =async (e) => {
    e.preventDefault();

    try {
            const response = await axios.post('http://localhost:3000/api/admin/login',{email:email,Password:Password})
            successToast('logged')
            localStorage.setItem("adminToken",response.data.token)
            localStorage.setItem("adminDetails",JSON.stringify(response.data.details))
      navigate('/admin')

    } catch (error) {
      errorToast(error.response.data.message)
    }
  };
  
  
    return (
      <>
      <div className="flex justify-center items-center flex-col h-screen">
        <form
          onSubmit={handleSubmit}
          action=""
          className="w-[40%] rounded-md bg-white border-green-300 border-2 h-[250px] flex justify-center flex-col gap-5 items-center">
          <h2 className=" text-green-800 font-bold text-2xl">Admin Login</h2>
          
         
        
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
     
          <button
            type="submit"
            className="text-green-500 border-solid border-2 border-green-600 rounded w-[30%]">SUBMIT</button>
          
          <NavLink to={'/asignup'}>
          <button className="text-green-500 font-bold mb-2 text-xs underline "> Signup  </button>
          </NavLink>
        </form>
      </div>
      </>
  )
}

export default Alogin