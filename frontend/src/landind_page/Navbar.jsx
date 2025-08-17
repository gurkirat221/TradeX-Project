import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    
      <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom  " style={{backgroundColor:"#e3f2fd"}}>
        <div class="container p-2">
          <Link class="navbar-brand" to="/">
            <img src="media/images/TradeXlogo.png" alt="logo" style={{width:"50%"}}></img>
            {/* <h1 style={{color: "#0d6efd", fontSize:"30px"}}>TradeX</h1> */}
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form class="d-flex" role="search">
             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link active" to="/product">
                  Product
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link active" to="/support">
                  Support
                </Link>
              </li>
               <li class="nav-item">
                <a class="nav-link active" href="  http://localhost:5174/" target="_blank">
                  Dashboard
                </a>
              </li>
            
            </ul>
            </form>
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
