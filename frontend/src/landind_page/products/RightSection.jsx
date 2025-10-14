import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 p-3 p-md-5 mt-4 mt-md-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-12 col-md-6 text-center text-md-start">
          <img src={imageURL} style={{maxWidth:"100%", height:"auto"}} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;