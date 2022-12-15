import React, { useState, useContext } from "react";
import { GridCart, ColCart } from "../components/GridCart/index";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import { CartContext } from "../Contexts/CartContext";
import CartDetail from "../components/CartDetail/CartDetail";
import { getFirestore, getDate } from "../Services/firebase";
import { Container } from "../components/CartDetail/Styled";
import HeroCart from "../components/HeroCart/HeroCart";
import "../index.css";

const Checkout = () => {
  const {
    cart,
    getCartTotal,
    cartTotalItems,
    setCart,
    resetCart,
    removeItem,
    addToCart,
  } = useContext(CartContext);
  const [orderCreated, setOrderCreated] = useState(false);

  console.log(cart);

  const placeOrder = async (buyerData) => {
    //Vamos a preparar el pedido
    //Datos del usuario (values)

    //Estado del carrito

    //Orden en firebase

    try {
      const db = getFirestore();
      console.log(`order N ${buyerData.name}`);

      const cartItems = cart.map(({ id, name, price, quantity }) => {
        return { id, name, price, quantity };
      });

      console.log(cartItems);

      const order = {
        buyer: buyerData,
        items: cartItems,
        date: getDate(),
        total: getCartTotal(),
      };

      const res = await db.collection("orders").add(order);
      setCart([]);
      setOrderCreated(res.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HeroCart />
      <div className="todoJunto">
        <Container>
          {orderCreated ? (
            <h2>Checkout {`Order N ${orderCreated}`}</h2>
          ) : (
            <h1>Cart</h1>
          )}
          <GridCart>
            <ColCart desktop={6} tablet={6} mobile={12}>
              <CartDetail
                getCartTotal={getCartTotal}
                cart={cart}
                resetCart={resetCart}
                cartTotalItems={cartTotalItems}
                removeItem={removeItem}
                editQuantity={addToCart}
              />
            </ColCart>
          </GridCart>
        </Container>
        {cartTotalItems() > 0 ? (
          <ColCart desktop={6} tablet={6} mobile={12}>
            <CheckoutForm
              handleSubmit={placeOrder}
              cartTotalItems={cartTotalItems}
            />
          </ColCart>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Checkout;
