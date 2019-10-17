import React from 'react';
import './Toy.css';

function Toy(props) {
    return (
        <div className="Toy">
            <img src={props.toy.image}/>
            <h6>{props.toy.name}</h6>
            <div className="Toy-price">{`$${props.toy.price}.00`}</div>
        </div>
    );
}

export default Toy;
