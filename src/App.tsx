import React from "react";
// components //
import {
  Header,
  Nav,
  Hero,
  Marquee,
  About,
  Portfolio,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Hero id="hero" />
      <Marquee />
      <About id="about" />
      <Portfolio id="portfolio" />
      <Footer />
    </>
  );
}

export default App;
