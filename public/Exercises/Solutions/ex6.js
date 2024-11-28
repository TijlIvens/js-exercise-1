const products = [
  { name: "Kiwi", price: 10 },
  { name: "Apple", price: 20 },
  { name: "Orange", price: 30 },
];

const reduceProducts = (products, reduction) => {
  const reducedProducts = products.map((product) => {
    const newPrice = product.price * ((100 - reduction) / 100);

    return { ...product, price: newPrice };
  });

  return reducedProducts;
};

const reducedProducts = reduceProducts(products, 20);

console.log(reducedProducts);
