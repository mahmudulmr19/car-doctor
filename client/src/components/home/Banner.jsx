import React from "react";
import { Container } from "@/components/shared";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselInfo } from "@/constant";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const Banner = () => {
  const slider = React.useRef(null);
  const settings = {
    infinite: true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Container className="my-5 py-4 overflow-hidden relative">
        <Slider ref={slider} {...settings}>
          {carouselInfo.map((item, index) => (
            <div key={index} className="relative rounded-md overflow-hidden">
              <div className="relative">
                <img
                  src={item.image}
                  alt={`carousel - ${index}`}
                  className="h-[500px] border border-white w-full object-cover"
                />
                <div className="h-full w-full bg-gradient-to-r from-gray-900 to-transparent absolute top-0" />
              </div>
              <div className="absolute top-0 flex flex-col justify-center h-full text-white w-full pl-4 space-y-5">
                <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl max-w-lg">
                  Affordable Price For Car Servicing
                </h1>
                <p className="max-w-lg">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex items-center gap-x-6">
                  <button className="py-3.5 px-5 rounded bg-[#FF3811] text-white hover:bg-[#e6320f] transition-all">
                    Discover More
                  </button>
                  <button className="py-3.5 px-5 rounded border border-white text-white hover:bg-[#FF3811] transition-all hover:border-transparent">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="absolute right-12 bottom-14">
          <div className="flex items-center gap-x-5 text-white">
            <button
              onClick={() => slider?.current?.slickPrev()}
              className="w-10 h-10 flex items-center justify-center bg-gray-900/90 rounded-full"
            >
              <HiArrowLeft />
            </button>
            <button
              onClick={() => slider?.current?.slickNext()}
              className="w-10 h-10 flex items-center justify-center bg-[#FF3811] rounded-full"
            >
              <HiArrowRight />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
