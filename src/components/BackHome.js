import React from 'react';
import { useHistory } from 'react-router';

export default function BackHome(){
    const history= useHistory();
    const toHome = () => {
        history.push('/')
    }
    return(
        <div className="home-button" onClick={toHome}>Home</div>
    )
}