import React, { useState } from 'react';
import { Link } from "react-router-dom";
import secureLocalStorage from 'react-secure-storage';
 
 function Header({isLoggedIn,setIsLoggedIn}) {

  console.log('randomstring',isLoggedIn)
  return (
    <div className='container-fuild'>
  {/* Navbar Start */}
  <nav className="navbar navbar-expand-lg  sticky-top p-0">
    <Link 
      to="/"
      className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
    >
      <h1 className="m-0 text-info">JobEntry</h1>
    </Link >
    <button
      type="button"
      className="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <Link  to="/" className="nav-item nav-link active text-info">
          Home
        </Link >
        <Link  to="/about" className="nav-item nav-link text-info">
          About
        </Link >
        <div className="nav-item dropdown">
          <Link 
            to="#"
            className="nav-link dropdown-toggle text-info"
            data-bs-toggle="dropdown"
          >
            Jobs
          </Link >
          <div className="dropdown-menu rounded-0 m-0">
            <Link  to="/JobList" className="dropdown-item text-info">
              Job List
            </Link >
         
          </div>
        </div>
        <div className="nav-item dropdown">
          <Link 
            to="#"
            className="nav-link dropdown-toggle text-info"
            data-bs-toggle="dropdown"
          >
            Pages
          </Link >
          <div className="dropdown-menu rounded-0 m-0">
            <Link  to="/jobcategory" className="dropdown-item text-info">
              Job Category
            </Link >
            <Link  to="/slider" className="dropdown-item text-info">
              Testimonial
            </Link >
           
          </div>
        </div>
        <Link  to="/contact" className="nav-item nav-link text-info">
          Contact
        </Link >
        
        { !isLoggedIn&&   <Link  to="/login" className="nav-item nav-link text-info">
          Login
        </Link > 
 }

    { isLoggedIn&& <Link  to="/"onClick={()=>{
      setIsLoggedIn(null)
      secureLocalStorage.removeItem('key')}} className="nav-item nav-link text-info">
          Logout
        </Link > }

        { !isLoggedIn&& <Link  to="/signup" className="nav-item nav-link text-info">
          Signup
        </Link > }
      </div>
      <Link  to="/postjobform"
        className="btn btn-info rounded-0 py-4 px-lg-5 d-none d-lg-block text-white "
      >
        Post A Job
        <i className="fa fa-arrow-right ms-3" />
      </Link >
    </div>
  </nav>
  {/* Navbar End */}
    </div>
  )
}
export default Header;
