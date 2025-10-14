import React from 'react';
function Education() {
    return (
       <div className="container mt-5 education-section">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start">
            <img src='media/images/education.svg'  style={{maxWidth:"100%", height:"auto"}}></img>
          </div>
          
          <div className="col-12 col-md-6 mt-4 mt-md-0">
            <h1 className='mb-5 fs-4'>Free and open market education</h1>
            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href=''  style={{textDecoration:"none"}}>Varsity<i className="fa-solid fa-arrow-right"></i></a>
            <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
           <a href=''  style={{textDecoration:"none"}}>TradingQ&A<i className="fa-solid fa-arrow-right"></i></a>
          </div>   
        </div>
       </div>
      );
}

export default Education;