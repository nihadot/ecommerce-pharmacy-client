import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Aheader from "../adminheader/Aheader";

const Adminlayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("id");
    if (!isAdmin) {
      navigate("/alogin");
    }
  }, [navigate]);

  return (
    <>
      <div className="">
        <Aheader />
        <div className="flex">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Adminlayout;
