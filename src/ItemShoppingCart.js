import React from 'react';
import './ItemShoppingCart.css';
import formatCurrency from './formatCurrency';

class ItemShoppingCart extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveToy = this.handleRemoveToy.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleRemoveToy(event) {
        this.props.onRemoveToyFromCart(this.props.toy);
        event.stopPropagation();
    }

    handleInputChange(event) {

        const value = Number.parseInt(event.target.value);

        if (value < 1) return;

        this.props.toy.amount = value;
        this.props.onChangeToyAmount(this.props.toy);
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
                <input type='number' min='1' defaultValue={this.props.toy.amount} onChange={this.handleInputChange}/>
            </div>
        );
    }
}

export default ItemShoppingCart;
