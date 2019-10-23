import React from 'react';
import './Main.css';
import Category from './Category';
import categoriesToys from './categories-toys.json';

class Main extends React.Component {

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
            <div className="main">
                <div className="hero">
                    <div className="card">
                        <div className="title">Say Hello to ToyStore!</div>
                        <h1>Free Ecommerce Template for Webflow</h1>
                        <button className="button-big">Open Catalog</button>
                    </div>
                </div>
                <div className="categories">
                    <div className="scroll-button" onClick={this.handleScrollButtonClick}>
                        <div className="icon"></div>
                    </div>
                    <div className="stuffed-animals">
                        <img
                            ref={this.categoryStuffedAnimalsImage}
                            src="https://uploads-ssl.webflow.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min-p-500.png"
                            alt='' />
                        <div className="info">
                            <h3>Stuffed Animals</h3>
                            <button className="button-small">Shop Now</button>
                        </div>
                    </div>
                    <div className="wooden-toys">
                        <div className="info">
                            <h3>Wooden Toys</h3>
                            <button className="button-small">Shop Now</button>
                        </div>
                        <img
                            src="https://uploads-ssl.webflow.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min-p-500.png"
                            alt='' />
                    </div>
                </div>
                {
                    categoriesToys.map(category => {
                        return <Category key={category.id} categoryToy={category} />
                    })
                }
            </div>
        );
    }
}

export default Main;
