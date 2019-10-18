import React from 'react';
import './Category.css';
import ItemToy from './ItemToy';

class Category extends React.Component {

    render() {
        return (
            <div className="Category">
                <h3>{this.props.categoryToy.name}</h3>
                <div className="Category-primary-line">
                    <div className="Category-secondary-line"></div>
                </div>
                <div className="Category-toys">
                    {this.props.categoryToy.toys.map(toy => <ItemToy key={toy.id} toy={toy}/>)}
                </div>
            </div>
        );
    }
}

export default Category;
