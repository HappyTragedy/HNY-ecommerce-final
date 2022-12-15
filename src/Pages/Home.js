import React from "react";
import Hero from "../components/Hero/Hero";
import Recientes from "../components/Recientes/Recientes";
import Data from "../components/Data/Data";
import PaymentMethods from "../components/PaymentMethods/PaymentMethods";

const Home = () => {
  return (
    <>
      <Hero />
      <Recientes />
      <Data />
      <PaymentMethods />
    </>
  );
};

export default Home;
