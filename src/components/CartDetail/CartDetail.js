import React from "react";
import Compras from "../Compras/Compras";

const CartDetail = ({
  cart,
  getCartTotal,
  cartTotalItems,
  resetCart,
  removeItem,
  editQuantity,
}) => {
  return (
    <>
      <Compras />
      <div className="datos">
        <div className="contenedor">
          {cart.map(({ id, name, price, image, quantity }) => (
            <div key={id}>
              <div className="imagen">
                <img src={image} alt="producto añadido"></img>
                <div className="info">
                  <p>{name}</p>

                  <div className="addOrDelete">
                    <button
                      className="btn"
                      disabled={quantity === 1 ? true : false}
                      onClick={() =>
                        editQuantity({ id, name, price, image, quantity: -1 })
                      }
                    >
                      -
                    </button>
                    <label> {quantity} </label>
                    <button
                      className="btn"
                      onClick={() =>
                        editQuantity({ id, name, price, image, quantity: 1 })
                      }
                    >
                      +
                    </button>
                  </div>
                  <button className="btnend" onClick={() => removeItem(id)}>
                    Remove
                  </button>
                </div>
                <div className="precio">
                  <p>${price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {cartTotalItems() > 0 ? (
        <div className="final">
          <p className="preciototal">Total ${getCartTotal()}</p>
          <button className="btnempty" onClick={() => resetCart()}>
            Empty cart
          </button>
        </div>
      ) : (
        <div className="final">
          <p className="preciototal">The cart is empty. Add some products!</p>
        </div>
      )}
    </>
  );
};

export default CartDetail;
