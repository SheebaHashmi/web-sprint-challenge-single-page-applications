import React from 'react';
export default function OrderPage({userOrder}){
    return (

        <div className="container order">
            <h8>Hey {userOrder.name}! Your pizza is on it's way!🍕</h8>
            <br/>
            <h8>Order Details: {userOrder.size} Pizza</h8>
            <h8>Special Instructions: {userOrder.special}</h8>
           
            <img src="https://cdn.dribbble.com/users/428994/screenshots/4870023/media/b8bdf72cfe9c7dcfb0dc87a8a1e48105.gif" alt="An animation of pizza being flipped"/>
        </div>
    )
}
