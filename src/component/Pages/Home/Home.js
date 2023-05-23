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
import Header from "../Header/Header";
import DevelopmentProcess from "./DevelopmentProcess";
import ContactUs from "./ContactUs";
import Solutions from "./Solutions";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <Hero />
      <ContactUs />
      <Section />
      {/* <Features /> */}

      <DevelopmentProcess />
      <Solutions />
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
