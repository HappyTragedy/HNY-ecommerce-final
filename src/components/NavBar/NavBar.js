import React from "react";
import { Container } from "./Styled";
import { Link } from "react-router-dom";

const NavBar = () => {
return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/shop`}>Shop</Link>
          </li>
          <li>
            <Link to={`/checkout`}>Cart</Link>
          </li>
          <li>
            <Link to={`/sale`}>Sale</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default NavBar;
