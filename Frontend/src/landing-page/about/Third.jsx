function Third() {
  return (
    <div className="container m-5">
      <h2 className="text-center">People</h2>
      <div className="row mt-5 p-5">
        <div className="col-6 text-center ps-5">
          <img className="rounded-circle" src="./media/image/about-first.jpg" alt="image" style={{ width: "50%" }} />
          <h5 className="my-3">Nithin Kamath</h5>
          <p>Founder, CEO</p>
        </div>
        <div className="col-6 pe-5 mt-5">
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> / <a href="#">Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Third;