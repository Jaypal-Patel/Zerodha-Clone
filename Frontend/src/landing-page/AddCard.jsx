import React from 'react';
import "./home/Home.css";

function AddCard() {
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <h2 className="fs-1">Invest in everything</h2>
        <p className="fs-4">Online platform to invest in stocks, derivatives, mutual funds, and more</p>
        <button className="addCardBtn btn btn-lg mt-4">Sign up now</button>
      </div>
    </div>
  );
}

export default AddCard;