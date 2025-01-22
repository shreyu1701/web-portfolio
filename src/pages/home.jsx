import React from "react";
import HeroSection from "../compounds/heroSection";
import Header from "../compounds/Header";
import AboutMe from "../compounds/about-me";
import Portfolio from "../compounds/Portfolio";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Portfolio />
      <AboutMe />
    </div>
  );
}

export default Home;
