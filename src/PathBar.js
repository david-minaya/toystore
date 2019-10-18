import React from 'react';
import './PathBar.css';
import { Link } from 'react-router-dom';

function PathBar(props) {
    return(
        <div className='PathBar'>
            <Link className='PathBar-link' to='/'>Home</Link>
            <div className='PathBar-icon'></div>
            <div className='PathBar-link'>{props.name}</div>
        </div>
    );
}

export default PathBar;
