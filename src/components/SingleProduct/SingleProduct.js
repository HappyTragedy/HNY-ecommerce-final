import React from "react";
import { Container, Container2 } from "./Styled";
import {
  GridSingleProduct,
  ColSingleProduct,
} from "../GridSingleProduct/index";
import logo from "../../assets/images/hny.png";

const SingleProduct = ({ product, addToCart }) => {
  return (
    <GridSingleProduct>
      <Container2>
        <div className="producto">
          <img src={product.image} alt={product.name} />
        </div>
      </Container2>
      <Container>
        <GridSingleProduct>
          <ColSingleProduct desktop={6} tablet={6} mobile={12}>
            <div className="logo">
              <img src={logo} alt="logo"></img>
            </div>
            <div className="data">
              <div className="nyp">
                <h1>{product.name}</h1>
                <p>${product.price}</p>
                <div className="extra">
                  <p>This product is a collector's item for ages 14+.</p>
                </div>
                <button
                  onClick={() => addToCart({ ...product, quantity: 1 })}
                  className="btn effect"
                  data-sm-link-text="Add to cart"
                >
                  <span>You like it?</span>
                </button>
              </div>
              <div className="descrip">
                <p>{product.description}</p>
              </div>
            </div>
          </ColSingleProduct>
        </GridSingleProduct>
      </Container>
    </GridSingleProduct>
  );
};

export default SingleProduct;
