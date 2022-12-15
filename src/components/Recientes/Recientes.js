import React, { useState, useEffect } from "react";
import { GridHome, ColHome } from "../../components/GridHome";
import { Container } from "./Styled";
import ProductCard from "../ProductCard/ProductCard";
import { getFirestore } from "../../Services/firebase";

const Recientes = ({ catId }) => {
  //Aca vamos a incluir nuestra logica de fetch a firebase
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const db = getFirestore();
        const productsCollection = db.collection(`products`);
        const productsSnapshot = catId
          ? await productsCollection
              .where("category", "==", catId)
              .limit(4)
              .get()
          : await productsCollection.orderBy("price", "desc").limit(4).get();

        const products = productsSnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(products);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getProducts();
  }, [catId]);

  return (
    <Container>
      <h2>New Arrivals</h2>
      <GridHome rowGap={30} colGap={30}>
        {products.map(({ name, image, id, price }, index) => (
          <ColHome desktop={3} tablet={6} mobile={12} key={index}>
            <ProductCard
              name={name}
              image={image}
              id={id}
              price={price}
            />
          </ColHome>
        ))}
      </GridHome>
    </Container>
  );
};

export default Recientes;
