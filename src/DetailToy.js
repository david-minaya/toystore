import React from 'react';
import './DetailToy.css';
import { withRouter } from 'react-router-dom';
import PathBar from './PathBar';

function DetailToy(props) {
    return (
        <div className='DetailToy'>
            <PathBar />
            <div className='DetailToy-detail'>
                <div className='DetailToy-detail-info'>
                    <h1>Mega Plush Toy</h1>
                    <p>A successful marketing plan relies heavily on the 
                       pulling-power of advertising copy. Writing result-oriented 
                       ad copy is difficult, as it must appeal to, entice, 
                       and convince consumers to take action. There is no 
                       magic formula to write perfect ad copy. It is based 
                       on a number of factors.
                    </p>
                    <div className='DetailToy-detail-info-price'>$38.00</div>

                </div>
                <img/>
            </div>
        </div>
    );
}

export default withRouter(DetailToy);
