import { Container } from "@/components/Shared";
import { Banner, Form } from "@/components/checkout";
import React from "react";

const Checkout = () => {
  return (
    <Container className="my-20">
      <Banner />
      <Form />
    </Container>
  );
};

export default Checkout;
