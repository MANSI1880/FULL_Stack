const itemPrices = [12.99, 5.5, 23.75, 8.25];
const cartTotal = itemPrices.reduce((total, price) => total + price, 0);

console.log(cartTotal);
