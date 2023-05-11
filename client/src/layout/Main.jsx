import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/components/shared";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
