import React from 'react';
import './Category.css';
import Toy from './Toy';

class Category extends React.Component {

    render() {

        const toys = this.props.categoryToy.toys.map(toy => <Toy toy={toy}/>)

        return (
            <div className="Category">
                <h3>{this.props.categoryToy.name}</h3>
                <div className="Category-primary-line">
                    <div className="Category-secondary-line"></div>
                </div>
                <div className="Category-toys">
                    {toys}
                </div>
            </div>
        );
    }
}

export default Category;
