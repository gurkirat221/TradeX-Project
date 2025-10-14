import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => typeof window !== 'undefined' && !!localStorage.getItem('authToken'));
  const [username, setUsername] = useState(() => (typeof window !== 'undefined' && localStorage.getItem('username')) || "");
  const [userId, setUserId] = useState(() => (typeof window !== 'undefined' && localStorage.getItem('userId')) || "");
  const [token, setToken] = useState(() => (typeof window !== 'undefined' && localStorage.getItem('authToken')) || "");
  const dashboardHref = useMemo(() => {
    const u = encodeURIComponent(username || "");
    return `https://tradex-dashboard.netlify.app/?token=${token || ''}&userId=${userId || ''}&username=${u}`;
  }, [token, userId, username]);
  useEffect(() => {
    const syncAuth = () => {
      const t = localStorage.getItem('authToken');
      const uid = localStorage.getItem('userId') || "";
      setIsLoggedIn(!!t);
      setToken(t || "");
      setUserId(uid);
      setUsername(localStorage.getItem('username') || "");
    };
    syncAuth();
    const onStorage = (e) => {
      if (e.key === 'authToken' || e.key === 'username') {
        syncAuth();
      }
    };
    const onAuthChanged = () => syncAuth();
    window.addEventListener('storage', onStorage);
    window.addEventListener('auth-changed', onAuthChanged);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('auth-changed', onAuthChanged);
    };
  }, []);
  const handleLogout = () => {
    try {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('username');
      localStorage.removeItem('email');
      window.location.reload();
    } catch {}
  };
  return (
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom fixed-top  " style={{backgroundColor:"#e3f2fd"}}>
        <div className="container p-2">
          <Link className="navbar-brand" to="/">
            <img src="media/images/TradeXlogo.png" alt="logo" style={{maxWidth:"160px", width:"40vw", height:"auto"}}></img>
            {/* <h1 style={{color: "#0d6efd", fontSize:"30px"}}>TradeX</h1> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="d-flex" role="search">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
              {isLoggedIn && (
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href={dashboardHref}
                    target="_blank"
                  >
                    Dashboard
                  </a>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <a className="nav-link active" href="#" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              )}
            
            </ul>
            </form>
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
