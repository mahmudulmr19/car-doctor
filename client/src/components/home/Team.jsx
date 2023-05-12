import React from "react";
import { Container } from "../shared";
import { teams } from "@/constant";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const Team = () => {
  return (
    <Container className="mt-20">
      <div className="text-center space-y-2">
        <h3 className="text-[#FF3811] text-lg font-semibold">Team</h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151515]">
          Meet Our Team
        </h2>
        <p className="text-[#737373] max-w-screen-md w-full mx-auto capitalize">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map((item, index) => (
          <div
            key={index}
            className="border border-[#E8E8E8] rounded-lg p-5 shadow-sm"
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover rounded-lg h-64 w-full"
            />
            <div className="mt-3 text-center space-y-1">
              <h3 className="text-[#444444] font-bold text-xl">{item.title}</h3>
              <h5 className="text-[#737373] text-lg">{item.subtitle}</h5>
              <div className="flex items-center justify-center gap-3">
                <div className="cursor-pointer w-8 h-8 bg-[#395185] inline-flex items-center justify-center rounded-full">
                  <FaFacebookF className="text-white" />
                </div>
                <div className="cursor-pointer w-8 h-8 bg-[#55ACEE] inline-flex items-center justify-center rounded-full">
                  <FaTwitter className="text-white" />
                </div>
                <div className="cursor-pointer w-8 h-8 bg-[#0A66C2] inline-flex items-center justify-center rounded-full">
                  <FaLinkedinIn className="text-white" />
                </div>
                <div className="cursor-pointer w-8 h-8 bg-gradient-to-r from-yellow-500 to-pink-500 inline-flex items-center justify-center rounded-full">
                  <FaInstagram className="text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Team;
