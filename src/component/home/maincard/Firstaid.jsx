import { Card } from "@mui/material";
import React, { useEffect, useState,useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { errorToast, successToast } from '../../toast';
import axios from "axios";
import { Context } from '../../../App';

function Firstaid() {
  const { name} = useParams();
  // console.log(page);

  const [products, setProducts] = useState([]);
  const [productLimit, setProductLimit] = useState(4)
  const { refresh,setRefresh } = useContext(Context)

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async (e) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/product/getproducts-bycat/6603119f873d5b2d857ad2bc",
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







  
  const handleAddToCart = async (idOf,status) => {
    try {
      console.log('api');
      const response = await axios.post('http://localhost:3000/api/cart/addToCart', { productId: idOf, userId: JSON.parse(localStorage.getItem("userDetails"))?._id,offer:status });
      console.log(response);
      successToast("Succesfully Added into Cart")
      setRefresh(!refresh)

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>

<div className="p-5 mx-16 mt-5">
        <h1 className='text-2xl sm:text-4xl font-semibold'>First Aid Products</h1>
      </div>
      <div className="text-right  mr-20">
        <Link to={'/viewall'}><button className='text-green-600  sm:text-sm font-mono'>View All <i class="fa-solid fa-arrow-right"></i></button></Link>
      </div>





      {name}
      <div className="flex flex-wrap justify-center">
      {products.map((item,index) => {
        return (
          <>

{index < productLimit &&
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
              {parseInt(item?.quantity) === 1 ? 'out of stock' : 
                <button onClick={() => handleAddToCart(item._id, false)} className="bg-green-900 text-white text-xs sm:text-base rounded w-full py-2">
                  Add to Cart <i class="fa-solid fa-bag-shopping"></i>
                </button>}
              </div>

            </Card>
      }
          </>
        )
      })}
      </div>
    </>
  );
}

export default Firstaid;
