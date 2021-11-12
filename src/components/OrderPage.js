import React from 'react';
export default function OrderPage({userOrder}){
    return (

        <div>
            <h2>Name:{userOrder.name}</h2>
            <h2>Size:{userOrder.size}</h2>
            <h2>Special Instructions:{userOrder.special}</h2>
        </div>
    )
}
//userOrder.topping1?'pepperoni':userOrder.topping2?'mushroom':userOrder.topping3?'cheese':userOrder.topping4?'onion':userOrder.topping5?'black olives':'no toppings'