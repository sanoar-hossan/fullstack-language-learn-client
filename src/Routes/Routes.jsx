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

import EnrolledClass from "../Dashboard/EnrolledClass/EnrolledClass";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import AddClass from "../Dashboard/AddClass/AddClass";
import Classes from "../Pages/Home/Classes/Classes";
import Instructor from "../Pages/Home/Instructors/Instructor";
import MyClasses from "../Dashboard/MyClasses/MyClasses";
import ManageClass from "../Dashboard/ManageClass/ManageClass";
import Payment from "../Dashboard/Payment/Payment";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import PrivateRoute from "./PrivateRoute";
import PaymentHistory from "../Dashboard/Payment/PaymentHistory/PaymentHistory";


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
        {
            path:'/class',
            element:<Classes></Classes>,
        },
        {
            path:'/instructor',
            element:<Instructor></Instructor>,
        },
        
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'selectedclass',
          element:<PrivateRoute><MySelelectedClass></MySelelectedClass></PrivateRoute>,
        },
        {
          path:'enrolledclass',
          element:<EnrolledClass></EnrolledClass>,
        },
        {
          path:'payment/:id',
          element:<Payment></Payment>,
        },
        {
          path:'paymenthistory',
          element:<PaymentHistory></PaymentHistory>,
        },
        {
          path:'allusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>,
        },
        {
          path:'addclass',
          element:<InstructorRoute><AddClass></AddClass></InstructorRoute>,
        },
        {
          path:'myclass',
          element:<InstructorRoute><MyClasses></MyClasses></InstructorRoute>,
        },
        {
          path:'manageclass',
          element:<AdminRoute><ManageClass></ManageClass></AdminRoute>,
        },
      ]
    }
  ]);