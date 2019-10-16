import React from 'react';
import './Category.css';
import CategoryStuffedAnimals from './CategoryStuffedAnimals';
import CategoryWoodenToys from './CategoryWoodenToys';

function Category() {
    return (
        <div className="Category">
            <CategoryStuffedAnimals/>
            <CategoryWoodenToys/>
        </div>
    );
}

export default Category;
