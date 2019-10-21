import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className="Header">
            <div className="Header-frame">
                <Link to='/' className="Header-title">ToyStore</Link>
                {props.children}
            </div>
        </div>
    )
}

export default Header;