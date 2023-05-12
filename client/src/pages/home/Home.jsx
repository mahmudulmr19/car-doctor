// prettier-ignore
import { AboutUs, Banner, Features, Location, Products, Service, Team } from "@//components/home";
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
      <Features />
    </div>
  );
};

export default Home;
