import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UserLayout from "./component/userlayout/UserLayout"
import Home from "./component/home/Home"
import Data from "./component/home/data/Data"
import Detail from "./component/home/details/Detail"
import Error from "./component/home/error/Error"
 import Login from "./component/home/login/Login"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,

      children:[
        {      
          path:"home",
          element:<Home/>
        },
        {      
          path:"data",
          element:<Data/>
        },
        {
        path:"details/:name",
        element:<Detail/>

        },
       
      ]
    },
    
    {
      path:'*',
      element:<Error/>,
     
    },
    {
      path:"login",
      element:<Login/>

    },
  
 ]);

  return (
    < RouterProvider router={router} />

  )
}

export default App
