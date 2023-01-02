import React from "react";
import { Col } from "../Grid";
import { Container } from "./Styled";

const Card = ({ productos }) => {
  return (
    <Container>
      <Col desktop={4} tablet={4} mobile={4}>
        <h1>{productos.title}</h1>
        <div className="imagen">
          <img src={productos.img} alt="productoimg"></img>
        </div>
      </Col>
    </Container>
  );
};

export default Card;
