import {
    createBrowserRouter,
  } from "react-router-dom";


import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Home/Menu/Menu";
import Order from "../Pages/Home/Menu/Order/Order";
import Login from "../Pages/Home/Login/Login";
import SignUp from "../Pages/Home/SignUp/SignUp";
import Secret from "../Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/DashBoard/MyCart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AddItem from "../Pages/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/AddItem/ManageItem/ManageItem";
import Payment from "../Pages/DashBoard/PayMent/Payment";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";


   export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'order/:category',
          element:<Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
     
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'userhome',
          element:<UserHome></UserHome>
       },
        {
          path:'mycart',
          element:<MyCart></MyCart>
        },
        //admin routes
        {
         path:'adminhome',
         element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:'payment',
          element:<Payment></Payment>

        },
        {
          path:'allusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'addItem',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path:'manageitems',
          element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
        }
      ]
    }
  ]);