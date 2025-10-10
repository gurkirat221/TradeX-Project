import React from "react";

const Summary = () => {
  return (
    <div className="fade-in">
      {/* Welcome Section */}
      <div className="username">
        <h6>Welcome back{localStorage.getItem("username") ? `, ${localStorage.getItem("username")}` : ""}! 👋</h6>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-2)' }}>
          Here's your portfolio overview
        </p>
        <hr className="divider" />
      </div>

      {/* Equity Section */}
      <div className="section">
        <span>
          <p>💰 Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>₹3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>₹0</span>
            </p>
            <p>
              Opening balance <span>₹3.74k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      {/* Holdings Section */}
      <div className="section">
        <span>
          <p>📈 Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              ₹1.55k <small>+5.20%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>₹31.43k</span>
            </p>
            <p>
              Investment <span>₹29.88k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      {/* Quick Stats Cards */}
      <div className="row">
        <div className="col">
          <h5>₹29,875.<span>55</span></h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>₹31,428.<span>95</span></h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>₹1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;