/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Categories.css';
import ScrollButton from './ScrollButton';

class Categories extends React.Component {

    constructor(props) {
        super(props);
        this.handleScrollButtonClick = this.handleScrollButtonClick.bind(this);
        this.categoryStuffedAnimalsImage = React.createRef();
    }

    handleScrollButtonClick() {
        this.categoryStuffedAnimalsImage.current.scrollIntoView({ behavior: 'smooth' });
    }

    render() {
        return (
            <div className="Categories">
                <ScrollButton onScrollButtonClick={this.handleScrollButtonClick} />
                <div className="Category-stuffedAnimals">
                    <img
                        className="Category-stuffedAnimals-image"
                        ref={this.categoryStuffedAnimalsImage}
                        src="https://uploads-ssl.webflow.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min-p-500.png" />
                    <div className="Category-stuffedAnimals-info">
                        <h3>Stuffed Animals</h3>
                        <button className="button-small">Shop Now</button>
                    </div>
                </div>
                <div className="Category-woodenToys">
                    <div className="Category-woodenToys-info">
                        <h3>Wooden Toys</h3>
                        <button className="button-small">Shop Now</button>
                    </div>
                    <img
                        className="Category-woodenToys-image"
                        src="https://uploads-ssl.webflow.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min-p-500.png" />
                </div>
            </div>
        );
    }
}

export default Categories;
