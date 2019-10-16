import React from 'react';
import './Category.css';
import CategoryStuffedAnimals from './CategoryStuffedAnimals';
import CategoryWoodenToys from './CategoryWoodenToys';
import ScrollButton from './ScrollButton';

class Category extends React.Component {

    constructor(props) {
        super(props);
        this.handleScrollButtonClick = this.handleScrollButtonClick.bind(this);
        this.categoryStuffedAnimals = React.createRef();
    }

    handleScrollButtonClick() {
        this.categoryStuffedAnimals.current.scrollToTop();
    }

    render() {
        return (
            <div className="Category">
                <ScrollButton onScrollButtonClick={this.handleScrollButtonClick}/>
                <CategoryStuffedAnimals ref={this.categoryStuffedAnimals}/>
                <CategoryWoodenToys/>
            </div>
        );
    }
}

export default Category;
