import React from 'react';
import './DetailToy.css';
import { withRouter } from 'react-router-dom';
import PathBar from './PathBar';

class DetailToy extends React.Component {

    constructor(props) {
        super(props);
        this.toy = this.props.location.state.toy;
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick() {
        this.props.onAddToCard(this.toy)
    }

    render() {
        return (
            <div className='DetailToy'>
                <PathBar name={this.toy.name}/>
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
                        <div className='DetailToy-detail-info-price'>{`$${this.toy.price}.00`}</div>
                        <form className='DetailToy-detail-info-form'>
                            <label>Quantity</label>
                            <input type='number' min='1' value='1'/>
                            <button className='button-big' onClick={this.handleButtonClick}>Add To Cart</button>
                        </form>
                    </div>
                    <img src={this.toy.image} />
                </div>
            </div>
        );
    }
}

export default withRouter(DetailToy);