import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./landing-page/home/Home";
import Signup from "./landing-page/signup/Signup";
import About from "./landing-page/about/About";
import Products from "./landing-page/products/Products";
import Pricing from "./landing-page/pricing/Pricing";
import Support from "./landing-page/support/Support";
import NotFound from "./landing-page/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
