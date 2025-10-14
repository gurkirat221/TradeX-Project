import React from 'react';
function Pricing() {
    return (
       <div className="container pricing-section">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 mb-4 mb-md-0">
            <h1 className='mb-3 fs-4'>Unbeatable pricing</h1>
            <p >We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a href=''  style={{textDecoration:"none"}}>See Pricing<i className="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="col-12 col-md-7">
            <div className="row text-center g-3">
              <div className="col-12 col-sm-6 border p-3">
                <h1 className='mb-3'><i className="fa-solid fa-indian-rupee-sign"></i>0</h1>
                <p>Free equity delivery and <br></br>direct mutual funds</p>
              </div>
              <div className="col-12 col-sm-6 border p-3">
                <h1 className='mb-3'><i className="fa-solid fa-indian-rupee-sign"></i>20</h1>
                <p>Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
       </div>
      );
}

export default Pricing;