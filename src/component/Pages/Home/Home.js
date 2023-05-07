import React from "react";
import Banner from "./Banner";
import Faq from "./Faq";
import Testimonials from "./Testimonials";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <div>
      <Banner />
      <Testimonials />
      <Faq />
      <Subscribe />
    </div>
  );
};

export default Home;
