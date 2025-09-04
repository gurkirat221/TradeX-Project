import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate("/signup");
  };

  return (
    <div className="row text-center mt-5">
      <h1 className="mt-5">Open a TradeX account</h1>
      <p>
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
        F&O trades.
      </p>
      <button
        onClick={handleSubmit}
        className="p-2 btn btn-primary fs-5 mb-5"
        style={{ width: "20%", margin: "0 auto" }}
      >
        Sign up Now
      </button>
    </div>
  );
}

export default OpenAccount;
