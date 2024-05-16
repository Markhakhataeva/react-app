import React from 'react';
import Cart from "../images/shopping-cart-solid.svg"


export const Checkout = ({ database }) => {
    const totalProduct = database.filter(x => x.bought).length

    return (
        <div className="checkout">
            <img src={`${Cart}`} alt={""}/>
            <span className="counter">{totalProduct}</span>
        </div>
    )

    }
