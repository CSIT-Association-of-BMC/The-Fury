import React from "react";
import Hero from "./_components/Hero";
import Testimonials from "./_components/Testimonials";
import HowItWorks from "@/components/HowItWorks";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="background absolute top-0 left-0 w-full h-full -z-10"></div>
      <HowItWorks />
      <Testimonials />
    </>
  );
};

export default Home;
