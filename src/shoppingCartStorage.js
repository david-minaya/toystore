export default class ShoppingCartStorage {

    constructor() {
        this.storage = window.localStorage;
    }

    addToy(toy) {

        const toys = this.getToys();
        const storedToy = toys.find(storedToy => storedToy.id === toy.id);

        if (storedToy !== undefined) {

            toy.amount = toy.amount + storedToy.amount;
            console.log(toy.amount + storedToy.amount);
            this._storeToys(toys);

        } else {

            toys.push(toy);
            this._storeToys(toys);
        }
    }

    getToys() {
        return JSON.parse(this.storage.toys || '[]');
    }

    getToysAmount() {

        console.log('ShoppingCartStorage -> getToysAmount');

        const toys = this.getToys();
        let amount = 0;
        
        toys.forEach(toy => {
           amount += toy.amount; 
        });

        console.log(amount);
   
        return amount;
    }

    removeToy(toy) {
        const toys = this.getToys();
        const index = toys.findIndex(storedToy => storedToy.id === toy.id);
        toys.splice(index, 1);
        this._storeToys(toys);
    }

    _storeToys(addedToys) {
        this.storage.toys = JSON.stringify(addedToys);
    }
}
