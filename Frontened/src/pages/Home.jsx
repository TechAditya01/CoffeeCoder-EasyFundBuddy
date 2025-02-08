import React from "react";
import HeroSection from "../components/sections/Hero";
import Features from "../components/sections/Features";
import About from "../components/sections/About";
import Footer from "../components/sections/Footer";


const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <HeroSection />
      <Features />
      <About />
    
      <Footer />
    </div>
  );
};

export default Home;
