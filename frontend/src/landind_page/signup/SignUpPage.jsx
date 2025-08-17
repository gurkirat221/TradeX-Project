import React from "react";
function SignUpPage() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-6 p-3">
          <img
            src="/media/images/open.svg"
            style={{ width: "90%" }}
            className="ml-5"
          ></img>
        </div>
        <div className="col-6">
          <h1 className="fs-4 mt-5">SignUP Now</h1>
          <p className="text-muted mt-3">Or track your existing application</p>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India Flag"
                style={{width:"20px", height:"14px"}}
                className="me-1"
              />
              +91
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your mobile number"
            />
          </div>

          <button className="btn btn-primary w-100 mb-3">Get OTP</button>

          <p className="text-muted small mb-0">
            By proceeding, you agree to the Zerodha
            <a href="#"> terms</a> & <a href="#">privacy policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
