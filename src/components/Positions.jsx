import React, { useEffect, useState } from "react";

function Positions() {
  const API = "https://mocki.io/v1/b50793dd-ccc4-4f12-9768-f022df0c37b8";
  const [stocks, setStocks] = useState([]);

  const fatchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setStocks(data);
    } catch (err) {
      console.log(`error = ${err}`);
    }
  };

  useEffect(() => {
    fatchApiData(API);
  }, []);

  return (
    <>
      <h3 className="title">Positions ({stocks.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {stocks.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Positions;
