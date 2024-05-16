import React from 'react';
import icon from "./images/shopping-cart-solid.svg"


export const Checkout = ({database}) => {
    const countFilter=database.filter((x)=>x===true).length

    return (
        <div className="checkout">
            <img src={`${icon}`} alt=""/>
            <span className="counter">{countFilter}</span>
        </div>
    )

}
