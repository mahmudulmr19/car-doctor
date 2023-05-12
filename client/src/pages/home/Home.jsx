import { AboutUs, Banner, Location, Service } from "@//components/home";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Service />
      <Location />
    </div>
  );
};

export default Home;
