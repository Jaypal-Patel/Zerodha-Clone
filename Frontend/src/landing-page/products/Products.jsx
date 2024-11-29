import React from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Forth from "./Forth";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Products() {
  return (
    <div>
      <Navbar />
      <First />
      <Second
        imageURL="media/image/productFirst.png"
        ProductName="Kite"
        ProductDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Third
        imageURL="media/image/productFor.png"
        ProductName="Console"
        ProductDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo=""
      />
      <Second
        imageURL="media/image/productFive.png"
        ProductName="Coin"
        ProductDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Third
        imageURL="media/image/productSix.png"
        ProductName="Kite Connect API"
        ProductDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo=""
      />
      <Second
        imageURL="media/image/productSeven.png"
        ProductName="Varsity mobile"
        ProductDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Forth />
      <Footer />
    </div>
  );
}

export default Products;
