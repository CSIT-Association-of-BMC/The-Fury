import React from "react";
import Hero from "./_components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="background absolute top-0 left-0 w-full h-full -z-10"></div>
    </>
  );
};

export default Home;
