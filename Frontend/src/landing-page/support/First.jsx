import React from 'react';
import "./support.css";

function First() {
  return (
    <div className="hero text-white" style={{backgroundColor: "#387ED1"}}>
      <div className="container p-5">
        <div className="row mb-5">
          <div className="col-6">
            <h3>Support Portal</h3>
          </div>
          <div className="col-6 text-end">
            <p><a className="text-white" href="#">Track tickets</a></p>
          </div>
        </div>
        <div className="row">
        <div className="col-6 px-3">
          <h3>Search for an answer or browse help topics to create a ticket</h3>
          <input className='fs-5 px-3 py-2 my-4' type="text" placeholder="Eg: how do i activate F&O, why is my order getting reject...." /><i class="fa-solid fa-magnifying-glass"></i>
          <p><a href="#">Track account opening</a><a href="#">Track segment activation</a><a href="#">Intraday margins</a></p>
          <p><a href="#">Kite user manual</a></p>
        </div>
        <div className="col-6 px-3">
          <h3 className='mt-5'>Featured</h3>
          <ol>
            <li className='mb-3'><a href='#'>Current Takeovers and Delisting - June 2024</a></li>
            <li><a href='#'>Latest Intraday leverages and Square-off timings</a></li>
          </ol>
        </div>
        </div>
      </div>
    </div>
  );
}

export default First;