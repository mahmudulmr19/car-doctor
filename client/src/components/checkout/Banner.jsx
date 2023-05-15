import React from "react";
import checkout from "@/assets/images/checkout/checkout.png";
import { useLoaderData } from "react-router-dom";
const Banner = () => {
  const data = useLoaderData();
  return (
    <div className="relative">
      <img
        src={checkout}
        alt="checkout"
        className="h-full w-full object-cover"
      />
      <div className="bg-gradient-to-r from-gray-900 to-transparent absolute top-0 h-full w-full rounded-lg">
        <div className="flex flex-col justify-center h-full pl-14">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
            Check Out / {data.title}
          </h1>
        </div>
        <div className="absolute bottom-0 w-full text-center">
          <button className="text-white mx-auto bg-[#FF3811] py-2.5 px-8 tracking-wider">
            Home/Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
