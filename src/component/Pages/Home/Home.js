import React from "react";
import Banner from "./Banner";
import Faq from "./Faq";
import Testimonials from "./Testimonials";
import Subscribe from "./Subscribe";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import Hero from "./Hero";
import Section from "./Section";
import Features from "./Features";
import Team from "./Team";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Hero />
      <Section />
      {/* <Features /> */}
      <Testimonials />
      <Team />
      <Faq />
      <Subscribe />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
