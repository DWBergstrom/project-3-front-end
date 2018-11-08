'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createOrder = function (data) {
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
  return $.ajax({
    url: config.apiUrl + '/orders/' + `${orderId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: orderData
  })
}

const deleteOrder = function () {
  const orderId = store.orderId
  return $.ajax({
    url: config.apiUrl + `/orders/${orderId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

module.exports = {
  createOrder,
  indexOrders,
  showOrder,
  updateOrder,
  deleteOrder
}
