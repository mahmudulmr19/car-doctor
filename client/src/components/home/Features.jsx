import React from "react";
import { Container } from "../shared";
import { features } from "@/constant";

const Features = () => {
  return (
    <Container className="mt-20">
      <div className="text-center space-y-2">
        <h3 className="text-[#FF3811] text-lg font-semibold">Core Features</h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151515]">
          Why Choose Us
        </h2>
        <p className="text-[#737373] max-w-screen-md w-full mx-auto capitalize">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#E8E8E8] py-8 rounded-lg text-center space-y-1.5 cursor-pointer w-full hover:-translate-y-2 transition-all"
          >
            <img src={item.image} alt={item.title} className="mx-auto" />
            <h2 className="font-bold text-[#444444] text-lg">{item.title}</h2>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Features;
