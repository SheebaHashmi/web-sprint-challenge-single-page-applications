import React from "react";
import { Link } from 'react-router-dom'

export default function HomePage(){
    return(
        <div>
            Hungry?
            <Link to= {`/pizza`}>
                <button id="order-pizza">Order a Pizza!</button>
            </Link>
        </div>
    )
}