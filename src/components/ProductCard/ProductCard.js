import React from "react";
import { Container } from "./Styled";
import { Link } from "react-router-dom";

const ProductCard = ({ name, image, id, price }) => {
  return (
    <div className="grid">
      <Container>
        <div className="foto">
          <img src={image} alt={name} />
        </div>
        <div className="info">
          <h3>{name}</h3>
          <p>${price}</p>
          <div className="btnInfo">
            <Link
              to={`/product/${id}`}
              className="btn effect"
              data-sm-link-text="Show more"
            >
              <span>Info</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ProductCard;
