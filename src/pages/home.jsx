import React from "react";
import HeroSection from "../compounds/heroSection";
import Header from "../compounds/Header";
import AboutMe from "../compounds/about-me";
import Portfolio from "../compounds/Portfolio";
import Services from "../compounds/Services";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Portfolio />
      <AboutMe />
      <Services />
    </div>
  );
}

export default Home;
