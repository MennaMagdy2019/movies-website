import React, {useState , useEffect } from 'react'
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import axios from 'axios';
import Navbar from '../components/Navbar';
import Home from '../components/Pages/Home';
import MovieDetails from '../components/Pages/MovieDetails';
import Error from '../components/Pages/Error';
import Details from '../components/Pages/Details';
import LoginForm from '../components/Pages/LoginForm';

const router = createBrowserRouter([
  { path: "/", element: <LoginForm/> }, 
    {path: "/", element: <Navbar /> ,children:[
      { path: "home", element: <Home/> },   
     { path: "/home/:id", element: <Details />},
      { path: "details", element: <MovieDetails/>},
      {path: "*", element: <Error />},
    ]},
    ])

function MovieModule() {


  return (
   
   
    <RouterProvider router={router} >
      <Outlet></Outlet>
    </RouterProvider>
  

  )
}

export default MovieModule