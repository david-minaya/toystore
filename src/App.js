import React from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Categories from './Categories';
import Category from './Category';
import categoriesToys from './categoriesToys';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Hero/>
        <Categories/>
        {categoriesToys.map(category => <Category key={category.id} categoryToy={category} />)}
      </div>
    </div>
  );
}

export default App;
