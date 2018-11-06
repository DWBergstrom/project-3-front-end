'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const onCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data in onCreate method is ', data)
  api.createOrder(data)
    .then(ui.createOrderSuccess)
    .catch(ui.failure)
}

const onUpdate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data in order update is ', data)
  api.updateOrder(data)
    .then(ui.updateOrderSuccess)
    .catch(ui.failure)
}

const onIndex = function (event) {
  event.preventDefault()
  api.indexOrders()
    .then(ui.indexOrdersSuccess)
    .catch(ui.failure)
}

const onShow = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showOrder(data)
    .then(ui.showOrderSuccess)
    .catch(ui.failure)
}

const onDestroy = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteOrder(data)
    .then(ui.destroyOrderSuccess)
    .catch(ui.failure)
}

const onAddToCart = function (event) {
  const idHtml = $('.product-element').html()
  // const nameHtml = $('.product-name').html()
  const priceHtml = $('.product-price').html()
  // console.log('event target section data id inside onAddToCart is ', idHtml, nameHtml, priceHtml)
  const orderData = {
    order: {
      products: `${idHtml}`,
      total: `${priceHtml}`,
      purchased: false
    }
  }
  // const orderData = 'cat'
  // const orderDataJson = JSON.stringify(orderData)
  console.log(orderData)
  console.log(store.orderStatus)
  event.preventDefault()
  api.createOrder(orderData)
    .then(ui.addToCartSuccess)
    .catch(ui.failure)
}

module.exports = {
  onCreate,
  onUpdate,
  onIndex,
  onShow,
  onDestroy,
  onAddToCart
}
