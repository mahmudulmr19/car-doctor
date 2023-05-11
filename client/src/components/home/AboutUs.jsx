import React from "react";
import { Container } from "../shared";
import about from "@/assets/images/about_us/about.png";
const AboutUs = () => {
  return (
    <div>
      <Container className="mt-20 flex items-center flex-col lg:flex-row justify-between gap-4">
        <div className="w-full">
          <img src={about} alt="about" />
        </div>
        <div className="w-full space-y-5">
          <h3 className="text-[#FF3811] text-lg font-semibold">About Us</h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151515]">
            We are qualified & of experience in this field
          </h2>
          <p className="text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className="text-[#737373]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="py-3.5 px-5 rounded font-semibold bg-[#FF3811] hover:bg-[#e6320f] transition-all text-white">
            Get More Info
          </button>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
