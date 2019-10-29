export default class ShoppingCartStorage {

    constructor() {
        this.storage = window.localStorage;
    }

    addToy(toy) {

        const toys = this.getToys();
        const storedToy = toys.find(storedToy => storedToy.id === toy.id);

        if (storedToy !== undefined) {

            storedToy.amount = storedToy.amount + toy.amount;
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

        const toys = this.getToys();
        let amount = 0;
        
        toys.forEach(toy => {
           amount += toy.amount; 
        });
   
        return amount;
    }

    updateToyAmount(toy) {

        const toys = this.getToys();
        const _toy = toys.find(_toy => _toy.id === toy.id);

        _toy.amount = toy.amount;
        this._storeToys(toys);
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
