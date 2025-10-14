import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The TradeX Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-12 col-sm-6 col-md-4 p-3 mt-4">
          <img src="media/images/smallcaseLogo.png" style={{maxWidth:"100%", height:"auto"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-4">
          <img src="media/images/smallcaseLogo.png" style={{maxWidth:"100%", height:"auto"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-4">
          <img src="media/images/smallcaseLogo.png" style={{maxWidth:"100%", height:"auto"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-4">
          <img src="media/images/smallcaseLogo.png" style={{maxWidth:"100%", height:"auto"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-4">
          <img src="media/images/smallcaseLogo.png" style={{maxWidth:"100%", height:"auto"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-4">
          <img src="media/images/smallcaseLogo.png" style={{maxWidth:"100%", height:"auto"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "100%", maxWidth: "280px", margin: "0 auto" }}
          onClick={() => {
            if (localStorage.getItem('authToken')) {
              alert('You are already logged in.');
            } else {
              window.location.href = '/signup';
            }
          }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;