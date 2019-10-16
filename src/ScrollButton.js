import React from 'react';
import './ScrollButton.css';

class ScrollButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onScrollButtonClick();
    }

    render() {
        return (
            <div onClick={this.handleClick} className="ScrollButton">
                <div className="ScrollButton-icon"></div>
            </div>
        );
    }
};

export default ScrollButton;
