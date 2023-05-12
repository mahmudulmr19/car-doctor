import React from "react";
import { Container } from "../shared";
import calendar from "@/assets/icons/calendar.svg";
import phone from "@/assets/icons/phone.svg";
import location from "@/assets/icons/location.svg";

const Location = () => {
  return (
    <Container className="mt-20 mb-10">
      <div className="bg-[#151515] text-white rounded-lg px-8 py-12 flex flex-wrap gap-5 justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={calendar} alt="calendar icon" />
          <div className="flex flex-col">
            <h5 className="font-medium text-sm">We are open monday-friday</h5>
            <h2 className="font-semibold text-2xl">7:00 am - 9:00 pm</h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img src={phone} alt="phone icon" />
          <div className="flex flex-col">
            <h5 className="font-medium text-sm">Have a question?</h5>
            <h2 className="font-semibold text-2xl">+2546 251 2658</h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img src={location} alt="location icon" />
          <div className="flex flex-col">
            <h5 className="font-medium text-sm">Need a repair? our address</h5>
            <h2 className="font-semibold text-2xl">Liza Street, New York</h2>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Location;
