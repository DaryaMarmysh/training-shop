import React from "react";
import './Cart.css';
import {Link, useMatch,useLocation} from 'react-router-dom';


function Cart(props) {
    
    const section =
        <div className="cart-block" >
            <img src={props.src} alt="item" className="cart-img" />
            <div className="card-inf">
                <div>
                    <div className="cart-title">{props.title}</div>
                </div>
                <div className="card-2">
                    <div className="cart-coast">{props.coast}</div>
                    <div className="cart"><img src={process.env.PUBLIC_URL + '/stars.svg'} alt="stars" /></div>

                </div>
            </div>
        </div>

    return section;
}

export default Cart;
