
const inventory = [];

function findProductIndex(productName) {
  productName = productName.toLowerCase();

  return inventory.findIndex(product => product.name === productName);
}

function addProduct(product) {
  product.name = product.name.toLowerCase();

  const index = findProductIndex(product.name);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${product.name} quantity updated`);
  } else {
    inventory.push(product);
    console.log(`${product.name} added to inventory`);
  }
}

function removeProduct(productName, quantity) {
  productName = productName.toLowerCase();

  const index = findProductIndex(productName);

  if (index === -1) {
    console.log(`${productName} not found`);
    return;
  }

  if (inventory[index].quantity < quantity) {
    console.log(
      `Not enough ${productName} available, remaining pieces: ${inventory[index].quantity}`
    );
    return;
  }

  inventory[index].quantity -= quantity;

  console.log(
    `Remaining ${productName} pieces: ${inventory[index].quantity}`
  );

  if (inventory[index].quantity === 0) {
    inventory.splice(index, 1);
  }
}
