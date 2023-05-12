import React from "react";
import { Container } from "../shared";
import { popularProduct } from "@//constant";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <Container className="mt-20">
      <div className="text-center space-y-2">
        <h3 className="text-[#FF3811] text-lg font-semibold">
          Popular Products
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151515]">
          Browse Our Products
        </h2>
        <p className="text-[#737373] max-w-screen-md w-full mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularProduct.map((item) => (
          <ProductItem item={item} />
        ))}
      </div>
    </Container>
  );
};

export default Products;
