import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import HomeContainer from "../Pages/Home/HomeContainer/HomeContainer";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import MySelelectedClass from "../Dashboard/MySelelectedClass/MySelelectedClass";
import Payment from "../Dashboard/Payment/Payment";
import EnrolledClass from "../Dashboard/EnrolledClass/EnrolledClass";

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
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'selectedclass',
          element:<MySelelectedClass></MySelelectedClass>,
        },
        {
          path:'enrolledclass',
          element:<EnrolledClass></EnrolledClass>,
        },
        {
          path:'payment',
          element:<Payment></Payment>,
        },
      ]
    }
  ]);