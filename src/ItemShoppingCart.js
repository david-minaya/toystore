import React from 'react';
import './ItemShoppingCart.css';

class ItemShoppingCart extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveToy = this.handleRemoveToy.bind(this);
    }

    handleRemoveToy(event) {
        this.props.onRemoveToyFromCart(this.props.toy);
        event.stopPropagation();
    }

    render() {
        return (
            <div className='ItemShoppingCart'>
                <img src={this.props.toy.image} />
                <div>
                    <div className='ItemShoppingCart-title'>{this.props.toy.name}</div>
                    <div className='ItemShoppingCart-price'>{this.props.toy.price}</div>
                    <a href='#' className='ItemShoppingCart-remove' onClick={this.handleRemoveToy}>Remove</a>
                </div>
                <input type='text' value={this.props.toy.amount}/>
            </div>
        );
    }
}

export default ItemShoppingCart;
