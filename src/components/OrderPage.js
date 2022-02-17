import React from 'react';
export default function OrderPage({userOrder}){
    return (

        <div className="container order">
            <p>Hey {userOrder.name}! Your pizza is on it's way!🍕</p>
            <br/>
            <p>Order Details: {userOrder.size} Pizza</p>
            <p>Special Instructions: {userOrder.special}</p>
           
            <img src="https://cdn.dribbble.com/users/428994/screenshots/4870023/media/b8bdf72cfe9c7dcfb0dc87a8a1e48105.gif" alt="An animation of pizza being flipped"/>
        </div>
    )
}
