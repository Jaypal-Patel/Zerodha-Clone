import React from "react";

import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Forth from "./Forth";
import Five from "./Five";

import Navbar from "../Navbar";
import Footer from "../Footer";
import AddCard from "../AddCard";

function Home() {
  return (
    <div>
      <Navbar />
      <First />
      <AddCard />
      <Second />
      <Third />
      <Forth />
      <Five />
      <AddCard />
      <Footer />
    </div>
  );
}

export default Home;
