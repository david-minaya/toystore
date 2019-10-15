import React from 'react';
import './Header.css'
import ShoppingCart from './ShoppingCart'

function Header() {
    return (
        <div className="Header">
            <div className="Header-frame">
                <div className="Header-title">ToyStore</div>
                <ShoppingCart/>
            </div>
        </div>
    )
}

export default Header;