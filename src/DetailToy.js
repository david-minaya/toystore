import React from 'react';
import './DetailToy.css';
import { withRouter } from 'react-router-dom';
import PathBar from './PathBar';
import formatCurrency from './formatCurrency';

class DetailToy extends React.Component {

    constructor(props) {
        super(props);
        this.state = { amount: 1 };
        this.toy = this.props.location.state.toy;
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleButtonClick(event) {
        const toy = { ...this.toy, amount: this.state.amount };
        this.props.onAddToCart(toy)
        event.preventDefault();
    }

    handleInputChange(event) {
        this.setState({ amount: Number.parseInt(event.target.value) })
    }

    render() {
        return (
            <div className='DetailToy'>
                <PathBar name={this.toy.name} />
                <div className='DetailToy-detail'>
                    <div className='DetailToy-detail-info'>
                        <h1>{this.toy.name}</h1>
                        <p>A successful marketing plan relies heavily on the
                           pulling-power of advertising copy. Writing result-oriented
                           ad copy is difficult, as it must appeal to, entice,
                           and convince consumers to take action. There is no
                           magic formula to write perfect ad copy. It is based
                           on a number of factors.
                        </p>
                        <div className='DetailToy-detail-info-price'>{formatCurrency(this.toy.price)}</div>
                        <div className='DetailToy-detail-info-form'>
                            <label>Quantity</label>
                            <input type='number' min='1' value={this.state.amount} onChange={this.handleInputChange} />
                            <button className='button-big' onClick={this.handleButtonClick}>Add To Cart</button>
                        </div>
                    </div>
                    <img src={this.toy.image} alt='' />
                </div>
            </div>
        );
    }
}

export default withRouter(DetailToy);
