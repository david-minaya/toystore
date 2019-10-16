import React from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Categories from './Categories';
import Category from './Category';
import categoriesToys from './categoriesToys';

function App() {

  const categories = categoriesToys.map(category => <Category categoryToy={category} />);

  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Hero/>
        <Categories/>
        {categories}
      </div>
    </div>
  );
}

export default App;
