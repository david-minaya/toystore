import React from 'react';
import './DetailToy.css';
import { withRouter, Redirect, Link } from 'react-router-dom';
import formatCurrency from './formatCurrency';

class DetailToy extends React.Component {

    constructor(props) {
        super(props);

        const state = this.props.location.state || {};

        this.state = { amount: 1 };
        this.toy = state.toy;
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

        if (!this.toy) {
            return (<Redirect to='/' />)
        }

        return (
            <div className='detail-toy'>
                <div className='path-bar'>
                    <Link className='link' to='/'>Home</Link>
                    <div className='icon'></div>
                    <div className='name'>{this.toy.name}</div>
                </div>
                <div className='detail'>
                    <div className='info'>
                        <h1>{this.toy.name}</h1>
                        <p>A successful marketing plan relies heavily on the
                           pulling-power of advertising copy. Writing result-oriented
                           ad copy is difficult, as it must appeal to, entice,
                           and convince consumers to take action. There is no
                           magic formula to write perfect ad copy. It is based
                           on a number of factors.
                        </p>
                        <div className='price'>{formatCurrency(this.toy.price)}</div>
                        <div className='form'>
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
