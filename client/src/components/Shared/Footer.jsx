import React from "react";
import Container from "./Container";
import logo from "@/assets/shared/logof.svg";
import { footerSocialIcon } from "@/constant";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#151515] text-[#E8E8E8]">
      <Container className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:justify-items-center">
        <div className="flex flex-col items-start space-y-4">
          <img
            src={logo}
            alt="Car Doctor"
            className="h-16 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <p className="text-sm">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
          <div className="flex flex-row items-center gap-x-2">
            {footerSocialIcon.map((item) => (
              <div
                key={item.name}
                className="w-8 cursor-pointer h-8 inline-flex items-center justify-center bg-[#2c2c2c] hover:bg-[#2c2c2c]/90 rounded-full"
              >
                <item.Icon className="text-[#FFFFFF]" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-[#FFFFFF] text-lg">About</h1>
          <div className="flex flex-col items-start mt-8 gap-y-2">
            <h5 className="cursor-pointer">Home</h5>
            <h5 className="cursor-pointer">Service</h5>
            <h5 className="cursor-pointer">Contact</h5>
          </div>
        </div>

        <div>
          <h1 className="text-[#FFFFFF] text-lg">Company</h1>
          <div className="flex flex-col items-start mt-8 gap-y-2">
            <h5 className="cursor-pointer">Why Car Doctor</h5>
            <h5 className="cursor-pointer">About</h5>
          </div>
        </div>

        <div>
          <h1 className="text-[#FFFFFF] text-lg">Support</h1>
          <div className="flex flex-col items-start mt-8 gap-y-2">
            <h5 className="cursor-pointer">Support Center</h5>
            <h5 className="cursor-pointer">Feedback</h5>
            <h5 className="cursor-pointer">Accesbility</h5>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
