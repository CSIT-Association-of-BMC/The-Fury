import React from "react";
import Hero from "./_components/Hero";
import Testimonials from "./_components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="background absolute top-0 left-0 w-full h-full -z-10"></div>
      <Testimonials />
    </>
  );
};

export default Home;
