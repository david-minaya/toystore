import React from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Category from './Category';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Hero/>
        <Category/>
      </div>
    </div>
  );
}

export default App;
