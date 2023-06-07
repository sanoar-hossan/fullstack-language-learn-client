import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import HomeContainer from "../Pages/Home/HomeContainer/HomeContainer";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<HomeContainer></HomeContainer>,
        },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/register',
            element:<Register></Register>,
        },
        
      ]
    },
  ]);