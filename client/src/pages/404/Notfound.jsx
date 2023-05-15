import { Container } from "@/components/Shared";
import { Header } from "@/components/Shared";
import React from "react";
import notfoundImage from "@/assets/images/404/notfound.svg";
const Notfound = () => {
  return (
    <div>
      <Header />
      <Container className="my-8">
        <img src={notfoundImage} alt="notfound image" className="mx-auto" />
      </Container>
    </div>
  );
};

export default Notfound;
