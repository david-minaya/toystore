import React from 'react';
import './Header.css'
import ShoppingCart from './ShoppingCart'

function Header(props) {
    return (
        <div className="Header">
            <div className="Header-frame">
                <div className="Header-title">ToyStore</div>
                {props.children}
            </div>
        </div>
    )
}

export default Header;