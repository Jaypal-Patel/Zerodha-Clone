import React from 'react';

function Forth() {
  return (
    <div className="container">
      <div className="row me-5 ms-5">
        <div className="col-4 ps-5">
          <h2 className="ps-5">Unbeatable pricing</h2>
          <p className="mt-4 mb-5 ps-5" >We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a className="ps-5" href="#">See pricing  <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 pe-5">
          <div className="row text-center pe-5 mb-5">
            <div className="col border p-3">
              <h1 className="mb-5">₹0</h1>
              <p>Free equity delivery and<br /> direct mutual funds</p>
            </div>
            <div className="col border p-3">
              <h1 className="mb-5">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forth;