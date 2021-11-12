import React from 'react';
export default function OrderPage({userOrder}){
    return (

        <div>
            <h2>Name:{userOrder.name}</h2>
            <h2>Size:{userOrder.size} with {userOrder.pepperoni?'pepperoni':'no toppings'}</h2>
            <h2>Special Instructions:{userOrder.special}</h2>
        </div>
    )
}