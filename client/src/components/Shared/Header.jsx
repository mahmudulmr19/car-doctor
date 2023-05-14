import React, { Fragment } from "react";
import Container from "./Container";
import logo from "@/assets/shared/logo.svg";
import { headerMenu, mobileMenu } from "@/constant";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag, HiMagnifyingGlass } from "react-icons/hi2";
import { HiMenu, HiX } from "react-icons/hi";
import { Popover, Transition } from "@headlessui/react";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="shadow-sm bg-white sticky top-0 z-50">
      <Container className="flex items-center justify-between py-3">
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer h-16"
          title="Car Doctor"
        >
          <span className="sr-only">Car Doctor</span>
          <img src={logo} alt="Car Doctor" className="w-full h-full" />
        </div>
        {/* desktop devices */}
        <div className="hidden lg:flex lg:items-center lg:gap-10 lg:ml-6">
          {headerMenu.map((item) => (
            <Link
              to={item.name == "home" ? "/" : item.name}
              key={item.id}
              className="capitalize text-base text-[#444444] font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          <HiOutlineShoppingBag className="w-6 h-6 text-[#444444] cursor-pointer" />
          <HiMagnifyingGlass className="w-6 h-6 text-[#444444] cursor-pointer" />
          <button className="font-medium py-3.5 px-7 hover:bg-[#FF3811] hover:text-white transition-all border border-[#FF3811] text-[#FF3811] rounded">
            Appointment
          </button>
        </div>

        {/* Mobile Device*/}
        <Popover className="relative lg:hidden">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? "" : "text-opacity-90"}
              group inline-flex items-center rounded-md bg-[#FF3811] px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                {open ? <HiX /> : <HiMenu />}
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-4"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-4"
              >
                <Popover.Panel className="absolute z-10 mt-7 right-0 ">
                  <div className="overflow-hidden rounded shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative gap-8 bg-white p-7 flex flex-col">
                      {mobileMenu.map((item) => (
                        <Link
                          key={item.name}
                          to={item.name}
                          className="capitalize -m-3 flex items-center rounded-lg px-4 py-2 pr-16 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="ml-4">
                            <p className="text-sm font-medium text-[#444444]">
                              {item.name}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </Container>
    </div>
  );
};

export default Header;
