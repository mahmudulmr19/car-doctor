// prettier-ignore
import { AboutUs, Banner, Location, Products, Service, Team } from "@//components/home";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Service />
      <Location />
      <Products />
      <Team />
    </div>
  );
};

export default Home;
