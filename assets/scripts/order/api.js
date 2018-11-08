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

const updateOrder = function (data) {
  const orderId = data.order_id.id
  console.log('order id in updateOrder is ', data.order_id.id)
  console.log('data.order in updateOrder is ', data.order)
  console.log('user token is ', store.user.token)
  delete data.order_id
  console.log('data after delete is ', data)
  return $.ajax({
    url: config.apiUrl + `/orders/${orderId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data
  })
}

const deleteOrder = function (data) {
  const orderId = data.order.id
  return $.ajax({
    url: config.apiUrl + `/orders/${orderId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE',
    data
  })
}

const addToCart = function (data) {
  console.log(data)
  if (store.orderStatus === 'new') {
    // const orderId = data.order_id.id
    console.log('order status is', store.orderStatus)
    return $.ajax({
      url: config.apiUrl + `/orders`,
      headers: {
        Authorization: `Token token=${store.user.token}`
      },
      method: 'POST',
      data
    })
  } else {
    console.log(data.order_id.id)
    const orderId = data.order_id.id
    delete data.order_id
    console.log(data.order_id)
    return $.ajax({
      url: config.apiUrl + `/orders/${orderId}`,
      headers: {
        Authorization: `Token token=${store.user.token}`
      },
      method: 'PATCH',
      data
    })
  }
}

module.exports = {
  createOrder,
  indexOrders,
  showOrder,
  updateOrder,
  deleteOrder,
  addToCart
}
