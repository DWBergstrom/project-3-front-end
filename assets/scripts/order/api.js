'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createOrder = function (data) {
  console.log('data in createOrder method is ', data)
  return $.ajax({
    url: config.apiUrl + '/orders',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data
  })
}

const indexOrders = function () {
  return $.ajax({
    url: config.apiUrl + '/orders',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

const showOrder = function (orderData) {
  const orderId = orderData.order.id
  return $.ajax({
    url: config.apiUrl + `/orders/${orderId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

const updateOrder = function (orderData) {
  const orderId = store.orderId
  console.log('order id in updateOrder is ', store.orderId)
  console.log('orderData in updateOrder is ', orderData)
  console.log('config api url in update order is ')
  console.log(config.apiUrl + '/orders/' + `${orderId}`)
  console.log('token is ', store.user.token)

  return $.ajax({
    url: config.apiUrl + '/orders/' + `${orderId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: orderData
  })
}

const deleteOrder = function (data) {
  const orderId = store.orderId
  return $.ajax({
    url: config.apiUrl + `/orders/${orderId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE',
    data
  })
}

// const addToCart = function (orderData) {
//   console.log('orderData in addToCart', orderData)
//   if (store.orderStatus === 'new') {
//     // const orderId = orderData.order_id.id
//     console.log('order status is', store.orderStatus)
//     return $.ajax({
//       url: config.apiUrl + '/orders',
//       headers: {
//         Authorization: `Token token=${store.user.token}`
//       },
//       method: 'POST',
//       orderData
//     })
//   } else if (store.orderStatus === 'existing') {
//     console.log(orderData.order_id.id)
//     const orderId = orderData.order_id.id
//     // delete orderData.order_id
//     console.log(orderData.order_id)
//     return $.ajax({
//       url: config.apiUrl + `/orders/${orderId}`,
//       headers: {
//         Authorization: `Token token=${store.user.token}`
//       },
//       method: 'PATCH',
//       orderData
//     })
//   }
// }

module.exports = {
  createOrder,
  indexOrders,
  showOrder,
  updateOrder,
  deleteOrder
}
