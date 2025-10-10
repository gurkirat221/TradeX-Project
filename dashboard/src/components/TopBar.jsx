import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  const username = typeof window !== 'undefined' ? localStorage.getItem("username") : null;
  const initials = username ? username.trim().split(/\s+/).map(s => s[0]?.toUpperCase()).slice(0,2).join("") : "ZU";
  return (
    <div className="topbar-container">
      <div className="topbar-header">
        <div className="brand">
          <img src="/media/logo.png" alt="logo" className="brand-logo" />
          <span className="brand-title">TradeX Dashboard</span>
        </div>
        <div className="topbar-right">
          <Menu />
          <div className="profile" style={{ marginLeft: 16 }}>
            <div className="avatar">{initials}</div>
            <p className="username">{username || "USER"}</p>
          </div>
        </div>
      </div>

      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">19,832.05</p>
          <p className="percent">+0.51%</p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">66,473.05</p>
          <p className="percent">+0.48%</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;