import React from 'react';

function Second() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="./media/image/homeSecond.svg" alt="second image" style={{ width: "80%" }} />
        </div>
        <div className="col-6 p-5">
          <h2 className="">Largest stock broker in India</h2>
          <p className="mt-4">1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
          <div className="row mt-5 mb-3">
            <div className="col">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src="./media/image/homeSecond2.png" alt="second image" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default Second;