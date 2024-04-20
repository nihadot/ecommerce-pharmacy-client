import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { errorToast, successToast } from "../../toast";
import axios from "axios";

function Asignup() {

  const [email,setEmail] = useState('')
  const [Fname,setFName] = useState('')
  const [Lname,setLName] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit =async (e) => {
    e.preventDefault();

    try {
            const response = await axios.post('http://localhost:3000/api/admin/register',{email:email,password:password,Fname:Fname,Lname:Lname})
            successToast('created')

    } catch (error) {
      errorToast(error.response.data.message)
    }
  };

  

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <form
        onSubmit={handleSubmit}
    
        className="w-[50%] rounded-md bg-white h-[400px] border-2 border-green-300 text-green-400 flex justify-center flex-col gap-5 items-center "
      >
        <h2 className="text-green-400 text-2xl font-bold">Register</h2>
       
        <input type="text" placeholder="FName" onChange={(e)=>setFName(e.target.value)} />
        <input type="text" placeholder="LName" onChange={(e)=>setLName(e.target.value)} />
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button
          type="submit"
          className="border-solid border-2 border-green-600 rounded h-[40px] w-[100px] text-green-500">SIGN UP</button>
        
      <NavLink to={"/login"}>
        <p className="text-green-300 font-bold text-xs underline "> login </p>
      </NavLink>
      </form>
    </div>
  );
}
export default Asignup;