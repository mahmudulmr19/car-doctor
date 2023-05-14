import { useTitle } from "@/hooks";
// prettier-ignore
import { AboutUs, Banner, Features, Location, Products, Service, Team, Testimonial } from "@/components/home";
import React from "react";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <AboutUs />
      <Service />
      <Location />
      <Products />
      <Team />
      <Features />
      <Testimonial />
    </div>
  );
};

export default Home;
