import React from "react";
import HeroSection from "../compounds/heroSection";
import Header from "../compounds/Header";
import AboutMe from "../compounds/about-me";
import Portfolio from "../compounds/Portfolio";
import Services from "../compounds/Services";
import Contact from "../compounds/Contact";
import Footer from "../compounds/Footer";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Portfolio />
      <AboutMe />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
