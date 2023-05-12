// prettier-ignore
import { AboutUs, Banner, Location, Products, Service } from "@//components/home";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Service />
      <Location />
      <Products />
    </div>
  );
};

export default Home;
