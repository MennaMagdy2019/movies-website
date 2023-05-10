import { Link, Outlet } from "react-router-dom";
import {Avatar } from '@mui/material';
import { useEffect, useState } from "react";
const Navbar = () => {
  var [name,setName]= useState("")
  useEffect(()=>{
    var std = localStorage.getItem("std")
    setName(std)
  },[])
    return ( 
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="details">Details</Link>
        </li>
        <li class="nav-item">
          <Link  class="nav-link" to="login">LogOut</Link>
        </li>
        <li class="nav-item">
          <Link  class="nav-link" to="*">error</Link>
        </li>
       
      </ul>
      
      <div>
        <Avatar sx={{bgcolor:'primary.main'}}>{name.substring(0,1).toUpperCase()}</Avatar>
      </div>
    </div>
  </div>
</nav>
<Outlet></Outlet>
        </>
     );
}
 
export default Navbar;