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

function addIngredients(topping, ingredients) {
if (!ingredients.includes(topping)) {
  ingredients.push(topping)
}

}

function formatPrice(price) {
return `$${price}`
}

function decreasePrice(price) {
  var decrease = price * .9
  return decrease
}

function createRecipe(title, ingredients, type) {
var recipe = {
  title: title,
  ingredients: ingredients,
  type: type
}
return recipe
}
console.log(createMenuItem())
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


