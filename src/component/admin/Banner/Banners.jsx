import { NavLink } from "react-router-dom"

const Banners = () => {
    return (
      <div className="ms-[40%] mt-[5%] font-sans">
        
       
          <NavLink to={'/admin/viewbannerone'}>
          <div className="rounded-3xl shadow-md  w-[300px] h-[50px] bg-green-200 hover:bg-green-400">
             <p className="pt-[10px] ps-[110px] text-[18px] text-green-950 "> Banner 1</p>
          </div>
          </NavLink>
          <br />
          <NavLink to={'/admin/viewbannertwo'}>
          <div className="rounded-3xl shadow-md  w-[300px] h-[50px] bg-green-200 hover:bg-green-400">
             <p className="pt-[10px] ps-[110px] text-[18px] text-green-950"> Banner 2</p>
          </div>
          </NavLink>
         
      </div>
    )
  }
  
  export default Banners