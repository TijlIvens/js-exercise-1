const store = {
  products: [
    { id: "5087", name: "TV", price: 978 },
    { id: "8758", name: "Radio", price: 99 },
    { id: "3974", name: "Computer", price: 1476 },
    { id: "2094", name: "Phone", price: 569 },
    { id: "6789", name: "Laptop", price: 1987 },
    { id: "1234", name: "Tablet", price: 769 },
    { id: "4321", name: "Headphones", price: 269 },
    { id: "5678", name: "Keyboard", price: 147 },
    { id: "9876", name: "Mouse", price: 75 },
    { id: "8765", name: "Monitor", price: 249 },
  ],
  cart: [
    { id: "5087", quantity: 1 },
    { id: "3974", quantity: 1 },
    { id: "2094", quantity: 3 },
    { id: "4321", quantity: 1 },
    { id: "5678", quantity: 4 },
    { id: "9876", quantity: 2 },
    { id: "8765", quantity: 4 },
  ],
};

const calculateTotalPriceOfProduct = (price, quantity) => {
  const basePrice = price * quantity;

  if (quantity > 2) {
    return basePrice * 0.9;
  }

  return basePrice;
};

const productsInCart = store.cart.map((cartItem) => {
  const product = store.products.find((product) => product.id === cartItem.id);

  const totalPrice = calculateTotalPriceOfProduct(
    product.price,
    cartItem.quantity
  );

  return { ...product, quantity: cartItem.quantity, totalPrice };
});

console.log(productsInCart);

const totalPrice = productsInCart.reduce((acc, product) => {
  return acc + product.totalPrice;
}, 0);

console.log(totalPrice);
