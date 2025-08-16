import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-5   border-top">
        <h1 className="fs-4 text-center  mt-3 ">People</h1>
      </div>
      <div className="row p-5 text-center fs-4">
        <div className="col-6">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          ></img>
          <h4 className="mt-3 fs-5">Nithin Kamath</h4>
          <h6 className="text-muted fs-6">Founder,CEO</h6>
        </div>
        <div className="col-6 p-3  fs-6">
          <p>
            Nithin bootstrapped and founded TradeX in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            TradeX has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committe (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
