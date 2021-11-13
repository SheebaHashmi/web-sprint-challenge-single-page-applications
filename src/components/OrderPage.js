import React from 'react';
export default function OrderPage({userOrder}){
    return (

        <div className="order-page">
            <h2>Hey {userOrder.name}! Your pizza is on it's way!🍕</h2>
            <br/>
            <div className="order-content">
            <h2>Order Details: {userOrder.size} Pizza</h2>
            <h2>Special Instructions: {userOrder.special}</h2>
            </div>
            <img src="https://cdn.dribbble.com/users/428994/screenshots/4870023/media/b8bdf72cfe9c7dcfb0dc87a8a1e48105.gif"/>
        </div>
    )
}
//userOrder.topping1?'pepperoni':userOrder.topping2?'mushroom':userOrder.topping3?'cheese':userOrder.topping4?'onion':userOrder.topping5?'black olives':'no toppings'