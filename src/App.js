import React from 'react';
import Header from './Header';
import Main from './Main';
import { Route, Switch } from 'react-router-dom';
import DetailToy from './DetailToy';
import ShoppingCart from './ShoppingCart';
import ShoppingCartDialog from './ShoppingCartDialog';
import ShoppingCartStorage from './shoppingCartStorage';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.shoppingCartStorage = new ShoppingCartStorage();

        this.state = {
            isOpenShoppingCartDialog: false,
            toys: this.shoppingCartStorage.getToys(),
            toysAmount: this.shoppingCartStorage.getToysAmount()
        }

        this.handleOpenShoppingCartDialog = this.handleOpenShoppingCartDialog.bind(this);
        this.handleCloseShoppingCartDialog = this.handleCloseShoppingCartDialog.bind(this);
        this.handleAddToyToCart = this.handleAddToyToCart.bind(this);
        this.handleRemoveToyFromCart = this.handleRemoveToyFromCart.bind(this);
    }

    handleOpenShoppingCartDialog() {
        this.setState({ isOpenShoppingCartDialog: true })
    }

    handleCloseShoppingCartDialog() {
        this.setState({ isOpenShoppingCartDialog: false })
    }

    handleAddToyToCart(toy) {

        this.shoppingCartStorage.addToy(toy);
        
        this.setState({ 
            toys: this.shoppingCartStorage.getToys(),
            toysAmount: this.shoppingCartStorage.getToysAmount(),
            isOpenShoppingCartDialog: true
        });
    }

    handleRemoveToyFromCart(toy) {

        this.shoppingCartStorage.removeToy(toy);
        
        this.setState({ 
            toys: this.shoppingCartStorage.getToys(),
            toysAmount: this.shoppingCartStorage.getToysAmount()
        });
    }

    render() {

        const toys = this.state.toys;

        return (
            <div className='App'>
                <Header>
                    <ShoppingCart amountOfToys={this.state.toysAmount} onOpenDialog={this.handleOpenShoppingCartDialog} />
                </Header>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route>
                        <DetailToy onAddToCart={this.handleAddToyToCart} />
                    </Route>
                </Switch>
                {
                    this.state.isOpenShoppingCartDialog &&
                    <ShoppingCartDialog
                        toys={toys}
                        onCloseDialog={this.handleCloseShoppingCartDialog}
                        onRemoveToyFromCart={this.handleRemoveToyFromCart} />
                }
            </div>
        );
    }
}

export default App;
