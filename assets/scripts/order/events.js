'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const onCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createOrder(data)
    .then(ui.createOrderSuccess)
    .catch(ui.failure)
}

const onUpdate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
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
  if (store.orderStatus === 'new') {
    $('#display-message').html('')
    $('#empty-order-message').show()
    $('#empty-order-message').html('Nothing to cancel').fadeOut(3000)
  } else {
    api.deleteOrder()
      .then(ui.destroyOrderSuccess)
      .catch(ui.failure)
  }
}

// const onAddToCart = function (event) {
//   if (store.orderStatus === 'new') {
//     const idHtml = $('.product-element').html()
//     const priceHtml = $('.product-price').html()
//     const orderData = {
//       order: {
//         products: `${idHtml}`,
//         total: `${priceHtml}`,
//         purchased: false
//       }
//     }
//     event.preventDefault()
//     api.createOrder(orderData)
//       .then(ui.addToCartSuccess)
//       .catch(ui.failure)
//   } else {
//     const idHtml = $('.product-element').html()
//     const priceHtml = $('.product-price').html()
//     const currentItemTotal = parseInt(store.orderTotal)
//     const currentOrderTotal = parseInt(priceHtml)
//     const orderTotal = currentItemTotal + currentOrderTotal
//     const orderData = {
//       order: {
//         products: `${idHtml}`,
//         total: `${orderTotal}`,
//         purchased: false
//       }
//     }
//     event.preventDefault()
//     api.updateOrder(orderData)
//       .then(ui.updateCartSuccess)
//       .catch(ui.failure)
//   }
// }

const onAddToCart = function (event) {
  if (store.orderStatus === 'new') {
    const idHtml = $('.product-element').html()
    const priceHtml = $('.product-price').html()
    const orderData = {
      order: {
        products: `${idHtml}`,
        total: `${priceHtml}`,
        purchased: false
      }
    }
    event.preventDefault()
    api.createOrder(orderData)
      .then(ui.addToCartSuccess)
      .catch(ui.failure)
  } else {
    const idHtml = $('.product-element').html()
    const priceHtml = $('.product-price').html()
    const currentItemTotal = parseInt(store.orderTotal)
    const currentOrderTotal = parseInt(priceHtml)
    console.log('currentItemTotal in store in add to cart update is ', currentItemTotal)
    console.log('currentOrderTotal in add to cart update is ', currentOrderTotal)
    const orderTotal = currentItemTotal + currentOrderTotal
    const orderData = {
      order: {
        products: `${idHtml}`,
        total: `${orderTotal}`,
        purchased: false
      }
    }
    event.preventDefault()
    api.updateOrder(orderData)
      .then(ui.updateCartSuccess)
      .catch(ui.failure)
  }
  // const idHtml = $('.product-element').html()
  // // const nameHtml = $('.product-name').html()
  // const priceHtml = $('.product-price').html()
  // // console.log('event target section data id inside onAddToCart is ', idHtml, nameHtml, priceHtml)
  // const orderData = {
  //   order: {
  //     products: `${idHtml}`,
  //     total: `${priceHtml}`,
  //     purchased: false
  //   }
  // }
  // // const orderData = 'cat'
  // // const orderDataJson = JSON.stringify(orderData)
  // event.preventDefault()
  // api.createOrder(orderData)
  //   .then(ui.addToCartSuccess)
  //   .catch(ui.failure)
}

module.exports = {
  onCreate,
  onUpdate,
  onIndex,
  onShow,
  onDestroy,
  onAddToCart
}
