import React from 'react';
import Header from './Header';
import Main from './Main';
import { Route, Switch } from 'react-router-dom';
import DetailToy from './DetailToy';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/toy' component={DetailToy} />
      </Switch>
    </div>
  );
}

export default App;
