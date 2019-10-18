import React from 'react';
import './ItemShoppingCart.css';

function ItemShoppingCart(props) {
    return (
        <div className='ItemShoppingCart'>
            <img src='https://uploads-ssl.webflow.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png'/>
            <div>
                <div className='ItemShoppingCart-title'>Cute Dog</div>
                <div className='ItemShoppingCart-price'>$24.00</div>
                <a className='ItemShoppingCart-remove'>Remove</a>
            </div>
            <input type='text'/>
        </div>
    );
}

export default ItemShoppingCart;
