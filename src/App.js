import React from 'react';
import Header from './Header';
import Main from './Main';
import { Route, Switch } from 'react-router-dom';
import DetailToy from './DetailToy';
import ShoppingCart from './ShoppingCart';
import ShoppingCartDialog from './ShoppingCartDialog';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpenShoppingCartDialog: false,
    }

    this.handleOpenShoppingCartDialog = this.handleOpenShoppingCartDialog.bind(this);
    this.handleCloseShoppingCartDialog = this.handleCloseShoppingCartDialog.bind(this);
  }

  handleOpenShoppingCartDialog() {
    this.setState({ isOpenShoppingCartDialog: true })
  }

  handleCloseShoppingCartDialog() {
    this.setState({ isOpenShoppingCartDialog: false })
  }

  render() {
    return (
      <div className='App'>
        <Header>
          <ShoppingCart onOpenDialog={this.handleOpenShoppingCartDialog}/>
        </Header>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/toy' component={DetailToy} />
        </Switch>
        {
          this.state.isOpenShoppingCartDialog &&
            <ShoppingCartDialog onCloseDialog={this.handleCloseShoppingCartDialog} />
        }
      </div>
    );
  }
}

export default App;
