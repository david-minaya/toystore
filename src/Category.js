import React from 'react';
import './Category.css';
import ItemToy from './ItemToy';

class Category extends React.Component {

    render() {
        return (
            <div className="category">
                <h3>{this.props.categoryToy.name}</h3>
                <div className="primary-line">
                    <div className="secondary-line"></div>
                </div>
                <div className="toys">
                    {this.props.categoryToy.toys.map(toy => <ItemToy key={toy.id} toy={toy}/>)}
                </div>
            </div>
        );
    }
}

export default Category;
