import React from "react";

const CartDetail = ({ cart, getCartTotal, addToCart }) => {

    if (cart.quantity > 0) {
        return cart.map(({ name, price, quantity }) => (
            <ul>
                <li><p>Producto: {name}</p><p> Cantidad: {quantity} x ${price}</p></li>
                <li><p>Total: ${getCartTotal()}</p></li>
            </ul>
        ))
    } else {
        return (
            <>
                <ul>
                    <li><p>Producto: </p><p> Cantidad: </p></li>
                    <li><p>Total: </p></li>
                </ul>
            </>
        );
    };
}

export default CartDetail;