import React, { useEffect, useState } from "react";
import axios from "axios";
import { errorToast } from "../../toast";

import Adver1 from "./Adver1";
import Adver2 from "./Adver2";
import Adver3 from "./Adver3";

function Bannerview() {
  const [Banner, setBanner] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async (e) => {
    try {
      const response = await axios.get("http://localhost:3000/api/banner", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("id")} `,
        },
      });
      setBanner(response.data.Banner);
    } catch (error) {
      errorToast(
        error.response.data.message || error.message || "error try again"
      );
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center mt-5">
        <Adver1 />

        <div className="">
          <Adver2 />
          <Adver3 />
        </div>
      </div>
    </>
  );
}

export default Bannerview;
