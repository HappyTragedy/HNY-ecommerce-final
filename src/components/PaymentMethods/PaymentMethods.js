import React from "react";
import { Container } from "./Styled";
import pp from "../../assets/images/paypal.png";
import visa from "../../assets/images/visa.png";
import mc from "../../assets/images/mastercard.png";
import ae from "../../assets/images/americanexpress.png";
import ap from "../../assets/images/applepay.png";
import gp from "../../assets/images/googlepay.png";

const PaymentMethods = () => {
  return (
    <Container>
      <h1>PaymentMethods</h1>
      <div className="grid">
        <ul>
          <li>
            <img src={visa} alt="Visa"></img>
          </li>
          <li>
            <img src={mc} alt="MasterCard"></img>
          </li>
          <li>
            <img src={ae} alt="American Express"></img>
          </li>
          <li>
            <img src={pp} alt="Paypal"></img>
          </li>
          <li>
            <img src={ap} alt="Apple Pay"></img>
          </li>
          <li>
            <img src={gp} alt="Google Pay"></img>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default PaymentMethods;
