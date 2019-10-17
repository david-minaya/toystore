import React from 'react';
import './ItemToy.css';
import { withRouter } from 'react-router-dom';

class Toy extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemToyClick = this.handleItemToyClick.bind(this);
    }

    handleItemToyClick() {
        console.log('Hello world!');
        this.props.history.push('/toy', {toy: this.props.toy});
    }

    render() {
        return (
            <div className="ItemToy" onClick={this.handleItemToyClick}>
                <img src={this.props.toy.image} />
                <h6>{this.props.toy.name}</h6>
                <div className="ItemToy-price">{`$${this.props.toy.price}.00`}</div>
            </div>
        );
    }
}

export default withRouter(Toy);
