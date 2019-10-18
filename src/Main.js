import React from 'react';
import './Main.css';
import Hero from './Hero';
import Categories from './Categories';
import Category from './Category';
import categoriesToys from './categoriesToys';

function Main() {
    return (
        <div className="Main">
            <Hero />
            <Categories />
            {categoriesToys.map(category => <Category key={category.id} categoryToy={category} />)}
        </div>
    );
}

export default Main;
