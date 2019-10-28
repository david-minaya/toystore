import React from 'react';
import './ItemToy.css';
import { withRouter } from 'react-router-dom';
import formatCurrency from './formatCurrency';

class ItemToy extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemToyClick = this.handleItemToyClick.bind(this);
    }

    handleItemToyClick() {
        this.props.history.push('/toy', { toy: this.props.toy });
    }

    render() {
        return (
            <div className="item-toy" onClick={this.handleItemToyClick}>
                <div className='img'>
                    <img src={this.props.toy.image} alt='' />
                </div>
                <h6>{this.props.toy.name}</h6>
                <div className="price">{formatCurrency(this.props.toy.price)}</div>
            </div>
        );
    }
}

export default withRouter(ItemToy);
