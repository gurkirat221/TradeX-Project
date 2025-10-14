import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center text-md-start">
          <img src={imageURL} style={{maxWidth:"100%", height:"auto"}} />
        </div>
        <div className="col-12 col-md-6 p-3 p-md-5 mt-4 mt-md-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div className="d-flex flex-wrap gap-3">
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore}>
              Learn More
            </a>
          </div>
          <div className="mt-3 d-flex flex-wrap align-items-center gap-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" style={{height:"40px", width:"auto"}} />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" style={{height:"40px", width:"auto"}} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;