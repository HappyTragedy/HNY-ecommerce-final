import React, { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext'

const Home = () => {

    const { cart, resetCart, cartTotalItems } = useContext(CartContext)
    console.log("from home", cart);

    return (
        <div>
            Home {cartTotalItems()}

            <button onClick={resetCart}>Reset Cart</button>
        </div>
    )
}

export default Home
