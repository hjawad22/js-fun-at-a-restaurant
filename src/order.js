


function takeOrder(order, deliveryOrders) {
  if( deliveryOrders.length < 3) {
    deliveryOrders.push(order)
  }
}

function refundOrder(orderNumber, deliveryOrders) {
for (var i = 0; i < deliveryOrders.length; i++) {
  if (deliveryOrders[i].orderNumber === orderNumber) {
    deliveryOrders.splice(i, 1)
  }
}
}


function listItems(deliveryOrders) {
  var itemsList = []
  for (var i = 0; i < deliveryOrders.length; i++) {
    itemsList.push(deliveryOrders[i].item);
  } 
  return itemsList.join(', ')
  
}

function searchOrder(deliveryOrders,itemName) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].item === itemName) {
    return true 
    } 
  }  
  return false
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}