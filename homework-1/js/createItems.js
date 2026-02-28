
const items = [
    {
        "name": "iPhone 17 Pro",
        "price": 1099.00,
        "description": "The all-new iPhone 17 Pro. Any more pro and it would need an agent.",
        "productCategory": "smartphone"
    },
    {
        "name": "Samsung Galaxy S25 Ultra",
        "price": 1299.99,
        "description": "The all-new Samsung Galaxy S25 Ultra. Next-level power, next-level play.",
        "productCategory": "smartphone"
    },
    {
        "name": "Samsung Galaxy Z Fold7",
        "price": 1999.99,
        "description": "Experience the all-new Fold. The thinnest, lightest Galaxy Z Fold yet.",
        "productCategory": "smartphone"
    },
    {
        "name": "Google Pixel 10 Pro",
        "price": 999.00,
        "description": "Meet the new Pixel 10 Pro. Next-level everything.",
        "productCategory": "smartphone"
    },
    {
        "name": "Google Pixel 10 Pro Fold",
        "price": 1799.00,
        "description": "Meet the new Pixel 10 Pro Fold. Unfold Extraordinary."
    }
];

const createItemCard = ({name, price, description}) => {
    /* TODO: See Part 4 of README.md */
    const item = undefined;

    return item;
}

const createItems = () => {
    /* TODO: After completing Part 4, remove the following two lines of code */
    const testCard = createItemCard(items[0]);
    if (testCard) console.log(testCard.outerHTML);
    /* TODO: See Part 5 of README.md */
}

export default createItems;