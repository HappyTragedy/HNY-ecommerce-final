import React, { useState, useEffect } from "react";
import { Grid, Col } from "../../components/Grid";
import { Container } from "./Styled";
import ProductCard from "../ProductCard/ProductCard";
import { getFirestore } from "../../Services/firebase";
import Menu from "../Menu/Menu";
import HeroShop from "../HeroShop/HeroShop";

const CategoryContainer = ({ catId }) => {
  //Aca vamos a incluir nuestra logica de fetch a firebase
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const db = getFirestore();
        const productsCollection = db.collection(`products`);
        const productsSnapshot = catId
          ? await productsCollection
              .where("category", "==", catId)
              .limit(25)
              .get()
          : await productsCollection.orderBy("price", "desc").limit(25).get();

        const products = productsSnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(products);
        setLoading(false);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getProducts();
  }, [catId]);

  return (
    <>
      <HeroShop></HeroShop>
      <Container>
        <Menu></Menu>
        <div className="grilla">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <h1>{catId}</h1>
              <Grid rowGap={30} colGap={30}>
                {products.map(
                  ({ name, image, description, id, price }, index) => (
                    <Col desktop={3} tablet={6} mobile={12} key={index}>
                      <ProductCard
                        name={name}
                        image={image}
                        description={description}
                        id={id}
                        price={price}
                      />
                    </Col>
                  )
                )}
              </Grid>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default CategoryContainer;
