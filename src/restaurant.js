function createRestaurant(name) {
var pizzaRestaurant = {
  name: name,
  menus : {
    breakfast: [],
    lunch: [],
    dinner: []
  }
}

return pizzaRestaurant
}

function addMenuItem(pizzaRestaurant,item) {
if (item.type === "lunch" &&  pizzaRestaurant.menus.lunch.includes(item) === false) {
  pizzaRestaurant.menus.lunch.push(item)
} else if (item.type === "breakfast" && pizzaRestaurant.menus.breakfast.includes(item) === false) {
  pizzaRestaurant.menus.breakfast.push(item)
} else if (item.type === "dinner" && pizzaRestaurant.menus.dinner.includes(item) === false) {
  pizzaRestaurant.menus.dinner.push(item)
}
}

function removeMenuItem(pizzaRestaurant, menuItem, menuName ) {
for( var i = 0; i < pizzaRestaurant.menus[menuName].length; i++) {
  if (pizzaRestaurant.menus[menuName][i].name === menuItem) {
  pizzaRestaurant.menus[menuName].splice(i, 1)
  return `No one is eating our ${menuItem} - it has been removed from the ${menuName} menu!`
  }
} return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
}
module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}