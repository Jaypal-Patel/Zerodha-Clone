import React from 'react';

function Five() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 ps-5">
          <img style={{ width: "80%" }} src="./media/image/homeFive.svg" alt="image five" />
        </div>
        <div className="col-6 p-5">
          <h3>Free and open market education</h3>
          <p className="mt-4">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href="#">See pricing  <i class="fa-solid fa-arrow-right"></i></a>
          <p className="mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="#">See pricing  <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Five;