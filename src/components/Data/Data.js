import React from "react";
import { Container } from "./Styled";
import valor from "../../assets/images/valor.png";
import world from "../../assets/images/world.png";
import payment from "../../assets/images/payment.png";
import security from "../../assets/images/security.png";
import help from "../../assets/images/help.png";

const Data = () => {
  return (
    <Container>
      <ul>
        <li>
          <a className="icon" href="#/">
            <img alt="valor" src={valor}></img>
          </a>
          <strong>Great Value</strong>
          <span>We offer competitive prices on our entire range of products.</span>
        </li>
        <li>
          <a className="icon" href="#/">
            <img alt="valor" src={world}></img>
          </a>
          <strong>Nationwide Delivery</strong>
          <span>We ship to all of Argentina, without added balance.</span>
        </li>
        <li>
          <a className="icon" href="#/">
            <img alt="valor" src={payment}></img>
          </a>
          <strong>Safe Payment</strong>
          <span>Pay with the world's most popular and secure payment methods.</span>
        </li>
        <li>
          <a className="icon" href="#/">
            <img alt="valor" src={security}></img>
          </a>
          <strong>Shop with Confidence</strong>
          <span>Our Buyer Protection covers you from click to delivery.</span>
        </li>
        <li>
          <a className="icon" href="#/">
            <img alt="valor" src={help}></img>
          </a>
          <strong>24/7 Help Center</strong>
          <span>Round-the-clock assistance for a smooth shopping experience.</span>
        </li>
      </ul>
    </Container>
  );
};

export default Data;
