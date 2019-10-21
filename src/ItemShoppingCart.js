import React from 'react';
import './ItemShoppingCart.css';
import formatCurrency from './formatCurrency';

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
                <img src={this.props.toy.image} alt='' />
                <div>
                    <div className='ItemShoppingCart-title'>{this.props.toy.name}</div>
                    <div className='ItemShoppingCart-price'>{formatCurrency(this.props.toy.price)}</div>
                    <div className='ItemShoppingCart-remove' onClick={this.handleRemoveToy}>Remove</div>
                </div>
                <input type='text' defaultValue={this.props.toy.amount}/>
            </div>
        );
    }
}

export default ItemShoppingCart;
