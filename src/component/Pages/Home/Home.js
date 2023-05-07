import React from "react";
import Banner from "./Banner";
import Faq from "./Faq";
import Testimonials from "./Testimonials";
import Subscribe from "./Subscribe";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import Hero from "./Hero";
import Section from "./Section";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Hero />
      <Section />
      <Testimonials />
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
