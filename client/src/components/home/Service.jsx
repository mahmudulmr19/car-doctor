import React from "react";
import { Container } from "../shared";
import { services } from "@//constant";
import { HiArrowRight } from "react-icons/hi2";

const Service = () => {
  return (
    <Container className="mt-20">
      <div className="text-center space-y-2">
        <h3 className="text-[#FF3811] text-lg font-semibold">Service</h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151515]">
          Our Service Area
        </h2>
        <p className="text-[#737373] max-w-screen-md w-full mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((item) => (
          <div
            key={item._id}
            className="border border-[#E8E8E8] rounded-lg p-5 shadow-sm"
          >
            <img
              src={item.img}
              alt={item.title}
              className="object-cover rounded-lg h-64"
            />
            <h4 className="text-[#444444] font-bold text-lg md:text-xl mt-3">
              {item.title}
            </h4>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[#FF3811] md:text-lg">
                Price : ${item.price}
              </h3>
              <HiArrowRight className="text-[#FF3811] cursor-pointer font-bold text-lg" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Service;
