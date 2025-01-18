import React from "react";
import HeroSection from "../compounds/heroSection";
import Header from "../compounds/Header";
import AboutMe from "../compounds/about-me";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutMe />
    </div>
  );
}

export default Home;
