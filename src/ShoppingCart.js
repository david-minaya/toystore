import React from 'react';
import './ShoppingCart.css';

class ShoppingCart extends React.Component {

    constructor(props) {
        super(props);
        this.handleShoppingCartClick = this.handleShoppingCartClick.bind(this);
    }

    handleShoppingCartClick() {
        this.props.onOpenDialog();
    }

    render() {
        return (
            <div className="Shopping-cart" onClick={this.handleShoppingCartClick}>
                <div className="Shopping-cart-title">Cart</div>
                <div className="Shopping-cart-icon"></div>
                <div className="Shopping-cart-counter">0</div>
            </div>
        )
    }
}

export default ShoppingCart;