import React from "react";
import { Container } from "../shared";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "@/constant";
import { AiFillStar } from "react-icons/ai";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import quote from "@/assets/icons/quote.svg";
const Testimonial = () => {
  const slider = React.useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container className="mt-20 mb-10">
      <div className="text-center space-y-2">
        <h3 className="text-[#FF3811] text-lg font-semibold">Testimonial</h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151515]">
          What Customer Says
        </h2>
        <p className="text-[#737373] max-w-screen-md w-full mx-auto capitalize">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="mt-10 mb-10 relative">
        <Slider ref={slider} {...settings} className="overflow-hidden">
          {reviews.map((item, index) => (
            <div
              className="bg-white border relative border-[#F3F3F3] rounded-lg p-5 flex flex-col"
              key={index}
            >
              {/* top */}
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} />
                <div className="flex flex-col">
                  <h2 className="font-bold text-[#444444] text-xl">
                    {item.name}
                  </h2>
                  <h5 className="font-semibold text-[#737373]">
                    {item.occupation}
                  </h5>
                </div>
              </div>

              {/* bottom */}
              <div className="flex flex-col gap-2 mt-3">
                <p className="text-[#737373]">{item.review}</p>
                <div className="flex items-center gap-1 text-[#FF912C] text-lg font-bold">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
              <div className="absolute right-10 top-5">
                <img src={quote} alt="quote icon" />
              </div>
            </div>
          ))}
        </Slider>
        <div className="absolute w-full top-[50%]">
          <div className="flex items-center justify-between text-white -mx-4">
            <button
              onClick={() => slider?.current?.slickPrev()}
              className="w-10 h-10 flex items-center justify-center bg-[#F3F3F3] text-gray-900 rounded-full"
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
      </div>
    </Container>
  );
};

export default Testimonial;
