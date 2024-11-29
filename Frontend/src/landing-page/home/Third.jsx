import React from 'react';

function Third() {
  return (
    <div className="container p-5">
      <div className="row pe-5 ps-5">
        <div className="col-6 p-5 ">
          <h2>Trust with confidence</h2>
          <h4 className="mt-5">Customer-first always</h4>
          <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>
          <h4 className="mt-5">No spam or gimmicks</h4>
          <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
          <h4 className="mt-5">The Zerodha universe</h4>
          <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          <h4 className="mt-5">Do better with money</h4>
          <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className="col-6 p-5">
          <img className="mb-5" src="./media/image/homeThird.png" style={{ width: "100%" }} />
          <a className="me-5 ms-5" href="#">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
          <a href="#">Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Third;