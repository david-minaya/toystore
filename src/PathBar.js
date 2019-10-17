import React from 'react';
import './PathBar.css';
import { Link } from 'react-router-dom';

function PathBar(prop) {
    return(
        <div className='PathBar'>
            <Link className='PathBar-link' to='/'>Home</Link>
            <div className='PathBar-icon'></div>
            <Link className='PathBar-link' to='/'>Home</Link>
        </div>
    );
}

export default PathBar;
