import React from 'react';
import './ItemToy.css';
import { withRouter } from 'react-router-dom';
import formatCurrency from './formatCurrency';

class Toy extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemToyClick = this.handleItemToyClick.bind(this);
    }

    handleItemToyClick() {
        this.props.history.push('/toy', {toy: this.props.toy});
    }

    render() {
        return (
            <div className="ItemToy" onClick={this.handleItemToyClick}>
                <img src={this.props.toy.image} alt='' />
                <h6>{this.props.toy.name}</h6>
                <div className="ItemToy-price">{formatCurrency(this.props.toy.price)}</div>
            </div>
        );
    }
}

export default withRouter(Toy);
