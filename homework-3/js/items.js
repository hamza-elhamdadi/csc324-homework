function formatCentsToDollars(priceInCents){
    return (priceInCents / 100).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}

class Item {
    constructor(parentElement, {name, price, description, category}){
        /* TODO: See Part 1 of README.md */
    }

    addToCart(){
        alert(`Unable to add "${this.name}" to cart. Cart unavailable at this time.`);
    }
}

class App {
    constructor(){
        /* TODO: See Part 2 of README.md */


        /* TODO: See Part 3 of README.md */


        /* TODO: See Part 4 of README.md */
    }

    createItem(itemData){
        /* TODO: See Part 2 of README.md */
    }

    async getItems(){
        /* TODO: See Part 2 of README.md */
    }

    

    renderItems(filteredItems){
        /* TODO: See Part 3 of README.md */
    }

    filterItems(){
        const checkboxes = Array.from(document.querySelectorAll('[name="itemFilter"]:checked'));

        /* TODO: See Part 3 of README.md */
    }

    sortItems(){
        /* TODO: See Part 4 of README.md */
    }
    
}

/* TODO: See "Testing your App class" in Part 2 of README.md */
export default Item;