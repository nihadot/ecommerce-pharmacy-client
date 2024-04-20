import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { errorToast, successToast } from '../../toast';
import axios from "axios";

function Linklayout() {
  const { name} = useParams();
  // console.log(page);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async (e) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/product/getproducts-bycat/${name}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")} `,
          },
        }
      );
      console.log(response, "res");

      setProducts(response.data.product);
    } catch (error) {
      errorToast(error.message);
    }

    console.log(products, "products");
  };
  return (
    <>
      {name}
      <div className="flex flex-wrap justify-center">
      {products.map((item,index) => {
        return (
          <>
            <Card className="border w-[130px] sm:w-[250px] sm:h-[350px] m-5">
                                                             
    <Link to={`/productdetails/${item._id}`}
    state={item}
    key={index}
    >

                <div className="h-[130px] sm:h-[240px]">
                  <img className="h-full w-full" src={item.mainimage} alt="Loading..." />
                </div>
                <div className="border p-2">
                  <p className="text-xs sm:text-xl font-bold">{item.name}</p>
                  <p className="text-xs sm:text-base">{item.price}</p>
                </div>
              </Link>
              <div className="">
                <button className="bg-green-900 text-white text-xs sm:text-base rounded w-full py-2">
                  Add to Cart <i class="fa-solid fa-bag-shopping"></i>
                </button>
              </div>
            </Card>
          </>
        )
      })}
      </div>
    </>
  );
}

export default Linklayout;
