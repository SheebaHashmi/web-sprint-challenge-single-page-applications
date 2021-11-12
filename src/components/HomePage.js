import React from "react";
import { Link } from 'react-router-dom'

export default function HomePage(){
    return(
        <div className="home">
            <div className="home-content">

            <h1>Lambda Eats</h1>
            <p>Hungry?</p>
            <Link to= {`/pizza`}>
                <button id="order-pizza">Order a Pizza!</button>
            </Link>
            </div>
            <img src="https://cdn.dribbble.com/users/2417352/screenshots/16121643/media/ebbfc86d5e29f198867ed5c4d02dc342.png?compress=1&resize=1600x1200"/>
        </div>
    )
}