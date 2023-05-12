import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
const ProductItem = ({ item }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      key={item.id}
      className="border border-[#E8E8E8] rounded-lg p-5 shadow-sm"
    >
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="bg-[#F3F3F3] rounded-lg p-3 w-full h-60 cursor-pointer relative"
      >
        <img src={item.image} alt={item.name} className="h-full mx-auto" />

        <Transition
          show={show}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute top-5 right-5 border bg-white shadow-sm w-10 h-10 flex items-center justify-center rounded-md">
            <HiOutlineShoppingBag className="text-[#FF3811] text-lg" />
          </div>
        </Transition>
      </div>
      <div className="text-center mt-3 space-y-1">
        <div className="flex items-center justify-center text-[#FF912C]">
          <AiFillStar className="text-lg" />
          <AiFillStar className="text-lg" />
          <AiFillStar className="text-lg" />
          <AiFillStar className="text-lg" />
          <AiFillStar className="text-lg" />
        </div>
        <h4 className="text-[#444444] font-bold text-xl">{item.name}</h4>
        <h4 className="text-[#FF3811] font-semibold">${item.price}</h4>
      </div>
    </div>
  );
};

export default ProductItem;
