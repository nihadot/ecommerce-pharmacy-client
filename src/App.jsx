import { createBrowserRouter, RouterProvider } from "react-router-dom"
import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";
import UserLayout from "./component/userlayout/UserLayout"
import Home from "./component/home/Home"
import Data from "./component/home/data/Data"
import Detail from "./component/home/details/Detail"
import Error from "./component/home/error/Error"
import Login from "./component/home/login/Login"
import Register from "./component/home/register/Register"
// import Adminlayout from "./component/admin/admin layout/Adminlayout"
import Asignup from "./component/admin/Admin signup/Asignup"
import Alogin from "./component/admin/AdminLogin/Alogin"
import Protected from "./component/admin/protected/Protected"
import Adminlayout from "./component/admin/admin layout/Adminlayout"
// import { product } from "./component/home/productlist/Product"
import Userprofile from "./component/admin/profileview/Userprofile"
import Productadd from "./component/admin/product/Productadd"
import Shopping from "./component/home/shopping/Shopping"
import ProductEdit from "./component/admin/product view/ProductEdit"
import ViewOrderPage from "./component/admin/order/AdminOrderview"
import Editform from "./component/admin/editform/Editform"
import Essential from "./component/home/essential/Essential"
import Productdetails from "./component/home/productdetails/Productdetails"
import Addadver1 from "./component/admin/Adverticing/Addadver1"
import Addadver2 from "./component/admin/Adverticing/Addadver2"
import Addadver3 from "./component/admin/Adverticing/Addadver3"
import BannerLayout from "./component/admin/Adverticing/Bannerlayout"
import Bannerview from "./component/admin/Adverticing/Bannerview"
import Editblog from "./component/admin/blog/Editblog"
import Viewblog from "./component/admin/blog/Viewblog"
import Blogg from "./component/admin/blog/Blogg"
import Blogs from "./component/admin/blog/Blogs"
import Addcategory from "./component/admin/Categories/Addcategory"
import Viewcategory from "./component/admin/Categories/Viewcategory"
import Category from "./component/admin/Categories/Category"
import Editcategory from "./component/admin/Categories/Editcategory"
import Linklayout from "./component/home/link/Linklayout"
import Buttonlayout from "./component/admin/home/Buttonlayout/Buttonlayout"
import Buttons from "./component/admin/Button/Buttons"
import Buttonadd from "./component/admin/Button/Buttonadd"
import Buttonview from "./component/admin/Button/Buttonview"
import Buttonedit from "./component/admin/Button/Buttonedit"
import Accountview from "./component/Useraccount/Accountview"
import Emptycart from "./component/Userpart/Emptycart"
import Editbannerone from "./component/admin/Banner/Editbannerone"
import Viewbannerone from "./component/admin/Banner/Viewbannerone"
import Addbannerone from "./component/admin/Banner/Addbannerone"
import Banners from "./component/admin/Banner/Banners"
import Addbannertwo from "./component/admin/Banner2/Addbannertwo"
import Editbannertwo from "./component/admin/Banner2/Editbannertwo"
import Viewbannertwo from "./component/admin/Banner2/Viewbannertwo"
import Cart from "./component/Userpart/Cart"
import Products from "./component/admin/Products/Products"
import Viewall from "./component/home/Viewallproduct/Viewall"
import Wishlist from "./component/Userpart/Wishlist"
import AccountSettings from "./component/Useraccount/Accountsettings"
import Editadver1 from "./component/admin/Adverticing/Editadver1"
import Editadver2 from "./component/admin/Adverticing/Editadver2"
import Editadver3 from "./component/admin/Adverticing/Editadver3"
import Offer from "./component/home/offer/Offer"
import Offerdetails from "./component/home/offer/Offerdetails"
import OrderViewPage from "./component/admin/order/Orderview"
import Cartt from "./component/Userpart/Cartt"
import Addressform from "./component/Userpart/Addressform";
import Addressview from "./component/Userpart/Addressview";
import Orders from "./component/Userpart/Orders";
import Wishlists from "./component/Userpart/Wishlist";
import Addressform2 from "./component/Userpart/Addressform2";
import Addressview2 from "./component/Userpart/Addressview2";
import Addressviewpage from "./component/Userpart/Addressviewpage";
import Ordering from "./component/Userpart/Ordering";
import Paymentmode from "./component/Userpart/Paymentmode";
import Orderdetails from "./component/Userpart/Orderdetails";
import AdminOrderview from "./component/admin/order/AdminOrderview";


export const Context = React.createContext()


function App() {


  const [count, setCount] = useState(0)
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [refresh, setRefresh] = useState(true)
  const [offerCartCount, setOfferCartCount] = useState(0)
  // const[offerwishlist,setOfferWishlist]=useState(0)


  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,

      children: [
        {
          path: "home",
          element: <Home />
        },
        {
          path: "data",
          element: <Data />
        },
        {
          path: "linklayout/:name",
          element: <Linklayout />

        },
        {
          path: "buttonlayout/:layout",
          element: <Buttonlayout />
        },


        {
          path: "productdetails/:id",
          element: <Productdetails />

        },
        {
          path: "offerdetails/:name",
          element: <Offerdetails />

        },


        {
          path: "account",
          element: <Accountview />

        },
        {
          path: "essential",
          element: <Essential />

        },
        {
          path: "emptycart",
          element: <Emptycart />

        },
        {
          path: "cart",
          element: <Cart />

        },
        {
          path: "cartt",
          element: <Cartt />

        },
        {
          path: "viewall",
          element: <Viewall />

        },

        {
          path: "wishlist",
          element: <Wishlists />

        },


        {
          path: "accountsettings",
          element: <AccountSettings />

        },

        {
          path: "offer",
          element: <Offer />

        },

        {
          path: "addaddress",
          element: <Addressform />

        },
        {
          path: "addaddress2",
          element: <Addressform2 />

        },
        {
          path: "addressview/:id",
          element: <Addressview />

        },

        {
          path: "addressview2",
          element: <Addressview2 />

        },
        {
          path: "addressviewpage",
          element: <Addressviewpage />

        },
        {
          path: "ordering",
          element: <Ordering />

        },
        {
          path: "paymentmode",
          element: <Paymentmode />

        },
        {
          path: "order",
          element: <Orders />

        },
        {

          path: "orderdetails",
          element: <Orderdetails />

        },





      ]
    },

    {
      path: '*',
      element: <Error />,

    },
    {
      path: 'shopping',
      element: <Shopping />,

    },
    {
      path: "login",
      element: <Login />

    }, {
      path: "signup",
      element: <Register />

    },

    {
      path: "admin",
      element: <Adminlayout />,
      children: [



        {
          path: "/admin/profile",
          element: <Userprofile />,

        },
        {
          path: "/admin/addproduct",
          element: <Productadd />,

        },
        {
          path: "/admin/productedit",
          element: <ProductEdit />,

        },
        {
          path: "/admin/products",
          element: <Products />,

        },
        {
          path: "/admin/vieworder",
          element: <ViewOrderPage />,

        },
        {
          path: "/admin/editform/:id",
          element: <Editform />,

        },
        {
          path: "/admin/banner",
          element: <BannerLayout />,
        },
        {
          path: "/admin/bannerview",
          element: <Bannerview />
        },
        {
          path: "/admin/addbanner1",
          element: <Addadver1 />
        },
        {
          path: "/admin/addbanner2",
          element: <Addadver2 />
        },
        {
          path: "/admin/addbanner3",
          element: <Addadver3 />
        },
        {
          path: "/admin/editadver1/:id",
          element: <Editadver1 />
        },
        {
          path: "/admin/editadver2/:id",
          element: <Editadver2 />
        },
        {
          path: "/admin/editadver3/:id",
          element: <Editadver3 />
        },


        {
          path: "/admin/blogs",
          element: <Blogs />
        },
        {
          path: "/admin/editblog/:id",
          element: <Editblog />
        },
        {
          path: "/admin/blogview",
          element: <Viewblog />
        },

        {
          path: "/admin/addblog",
          element: <Blogg />,

        },
        {
          path: "/admin/addcategory",
          element: <Addcategory />,

        },
        {
          path: "/admin/viewcategory",
          element: <Viewcategory />,

        },
        {
          path: "/admin/editcategory/:id",
          element: <Editcategory />,

        },
        {
          path: "/admin/category",
          element: <Category />,

        },
        {
          path: "/admin/buttons",
          element: <Buttons />,

        },
        {
          path: "/admin/buttonadd",
          element: <Buttonadd />,

        },
        {
          path: "/admin/buttonview",
          element: <Buttonview />,

        },
        {
          path: "/admin/buttonedit/:id",
          element: <Buttonedit />,

        },
        {
          path: "/admin/editbannerone/:id",
          element: <Editbannerone />,

        },
        {
          path: "/admin/viewbannerone",
          element: <Viewbannerone />,

        },
        {
          path: "/admin/addbannerone",
          element: <Addbannerone />,

        },
        {
          path: "/admin/banners",
          element: <Banners />,

        },
        {
          path: "/admin/editbannertwo/:id",
          element: <Editbannertwo />,

        },
        {
          path: "/admin/viewbannertwo",
          element: <Viewbannertwo />,

        },
        {
          path: "/admin/addbannertwo",
          element: <Addbannertwo />,

        },
        {
          path: "/admin/orderview",
          element: <AdminOrderview />,

        },








      ]

    },
    {
      path: "asignup",
      element: <Asignup />,

    },
    {
      path: "alogin",
      element: <Alogin />,

    },



  ]);





  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/cart/listCart/${JSON.parse(localStorage.getItem("userDetails"))._id}`);
      setCart(response.data.result);
     
    } catch (error) {
      setCart([]);

      console.log(error);
    }
  };




  const fetchdata = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/api/wishlist/listWishlist/${JSON.parse(localStorage.getItem("userDetails"))._id }`)
        setWishlist(response.data.data)
    } catch (error) {
      setWishlist([])
  
      console.log(error);
    }
  }
  
  useEffect(() => {
  fetchdata()
  }, [refresh])
  
  







  return (
    <>
      <Context.Provider value={{ count, setCount, cart, setCart, wishlist,setOfferCartCount, offerCartCount,setWishlist, refresh, setRefresh, }}>
        < RouterProvider router={router} />
      </Context.Provider>
    </>
  )
}

export default App
