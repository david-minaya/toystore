import React from 'react';
import './CategoryStuffedAnimals.css';

class CategoryStuffedAnimals extends React.Component {

    constructor(props) {
        super(props);
        this.image = React.createRef();
    }

    scrollToTop() {
        this.image.current.scrollIntoView({ behavior: "smooth" });
    }

    render() {
        return (
            <div className="CategoryStuffedAnimals">
                <img className="CategoryStuffedAnimals-image" ref={this.image} src="https://uploads-ssl.webflow.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min-p-500.png" />
                <div className="CategoryStuffedAnimals-info">
                    <h3>Stuffed Animals</h3>
                    <button className="button-small">Shop Now</button>
                </div>
            </div>
        );
    }
}

export default CategoryStuffedAnimals;
