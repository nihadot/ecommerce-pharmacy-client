
import React,{ useState } from "react";
import { NavLink, json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../../toast";
// import { userLogin } from "../../api/admin";
// import { userLogin } from "../../api/user";
import axios from "axios";

const Login = () => {

   
  const navigate = useNavigate();
  const [email,setEmail] = useState('')
  const [Password,setPassword] = useState('')
  
  const handleSubmit =async (e) => {
    e.preventDefault();

    try {
            const response = await axios.post('http://localhost:3000/api/users/login',{email:email,Password:Password})
            successToast('logged')
            console.log(response,'ppp');
            localStorage.setItem("userToken",response.data.token)
            localStorage.setItem("userDetails",JSON.stringify(response.data.details))
            localStorage.setItem("id",response.data.details._id)

            navigate('/home')
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
          <h2 className=" text-green-800 font-bold text-2xl">User Login</h2>
          
         
        
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
     {/* <NavLink to={'/home'}> */}
          <button
            type="submit"
            className="text-green-500 border-solid border-2 border-green-600 rounded w-[100%]">SUBMIT</button>
          {/* </NavLink> */}
          <NavLink to={'/signup'}>
          <button  className="text-green-500 font-bold mb-2 text-xs underline "> Signup  </button>
          </NavLink>
        </form>
      </div>
      </>
  )
}

export default Login