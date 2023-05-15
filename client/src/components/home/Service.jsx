import React, { useEffect, useState } from "react";
import { Container } from "../shared";
import { HiArrowRight } from "react-icons/hi2";
import LazyLoad from "react-lazyload";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchService = async () => {
      const response = await fetch(
        "https://api-car-doctor.vercel.app/api/v1/services"
      );
      const data = await response.json();
      setServices(data);
    };

    fetchService();
  }, []);

  return (
    <Container className="mt-20">
      <div className="text-center space-y-2">
        <h3 className="text-[#FF3811] text-lg font-semibold">Service</h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151515]">
          Our Service Area
        </h2>
        <p className="text-[#737373] max-w-screen-md w-full mx-auto capitalize">
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
            <LazyLoad offset={0}>
              <img
                src={item.img}
                alt={item.title}
                className="object-cover rounded-lg h-64 w-full"
              />
            </LazyLoad>
            <h4 className="text-[#444444] font-bold text-lg md:text-xl mt-3">
              {item.title}
            </h4>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[#FF3811] md:text-lg">
                Price : ${item.price}
              </h3>
              <HiArrowRight
                onClick={() => navigate(`checkout/${item._id}`)}
                className="text-[#FF3811] cursor-pointer font-bold text-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Service;
