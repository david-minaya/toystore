import React from 'react';
import './ShoppingCartDialog.css';
import ItemShoppingCart from './ItemShoppingCart';
import formatCurrency from './formatCurrency';

class ShippingCartDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isShowErrorMessage: false
        }

        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleRemoveToyFromCart = this.handleRemoveToyFromCart.bind(this);
    }

    _calculateSubtotal(toys) {

        let subtotal = 0;

        toys.forEach(toy => {
            
            const price = toy.amount * toy.price;
            subtotal += price;
        })
                
        return subtotal;
    }
    
    handleCloseDialog() {
        this.props.onCloseDialog();
    }
    
    handleButtonClick(event) {
        this.setState({ isShowErrorMessage: true });
        event.stopPropagation();
    }
    
    handleRemoveToyFromCart(toy) {
        this.props.onRemoveToyFromCart(toy);
    }
    
    render() {
        
        const subtotal = this._calculateSubtotal(this.props.toys);
        
        return (
            <div className='ShoppingCartDialog-background' onClick={this.handleCloseDialog}>
                <div className='ShoppingCartDialog-card'>
                    <div className='ShoppingCartDialog-card-header'>
                        <h4>Your Cart</h4>
                        <svg className='ShoppingCartDialog-card-header-close-button'
                            width="16px" height="16px" viewBox="0 0 16 16"
                            onClick={this.handleCloseDialog}>
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g fill-rule="nonzero" fill="#333333">
                                    <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className='ShoppingCartDialog-card-body'>
                        {
                            this.props.toys.map(toy => {
                                return (
                                    <ItemShoppingCart
                                        key={toy.id}
                                        toy={toy}
                                        onRemoveToyFromCart={this.handleRemoveToyFromCart} />
                                );
                            })
                        }
                    </div>
                    <div className='ShoppingCartDialog-card-footer'>
                        <div>
                            <div className='subtotal'>Subtotal</div>
                            <div className='amount'>{formatCurrency(subtotal)}</div>
                        </div>
                        <button className='button-big' onClick={this.handleButtonClick}>
                            Continue to Checkout
                        </button>
                    </div>
                    {this.state.isShowErrorMessage &&
                        <div className="error-message">Checkout is disabled on this site.</div>
                    }
                </div>
            </div>
        );
    }
}

export default ShippingCartDialog;
