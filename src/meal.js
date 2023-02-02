function nameMenuItem(name) {
return `Delicious ${name}`
}

function createMenuItem(menuItemName, price,type) {
var menuItem = {
  name: menuItemName,
  price: price,
  type: type,
}
return menuItem
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


