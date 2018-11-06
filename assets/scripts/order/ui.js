'use strict'

const store = require('../store.js')

const createOrderSuccess = function (data) {
  $('#display-orders').html('')
  $('#orders-empty-message').addClass('hidden')
  $('#display-message').html('Add successful!')
  $('display-message').css('color', 'green')
  const order = data.order
  const orderHtml = (`
    <p>Name: ${order.name}</p>
    <h4>Total: ${order.price}</h4>
    <h4>ID: ${order._id}</h4>
    </ br>
    `)
  $('#display-orders').html(orderHtml)
  $('#products-empty-message').addClass('hidden')
  $('#show-product-form').trigger('reset')
}

const indexOrdersSuccess = function (data) {
  if (data.orders.length === 0) {
    $('#display-message').html('There Are No Orders')
    $('#display-message').css('color', 'red')
    // $('#orders-empty-message').removeClass('hidden')
  } else {
    $('#display-orders').html('')
    let orderNum = 0
    data.orders.forEach(function (order) {
      orderNum++
      // console.log(order.purchased)
      order.products.forEach(function (product) {
        const orderHtml = (`
        <p>Order: ${orderNum}</p>
        <h4>Name: ${product.name}</h4>
        <h4>price:$ ${product.price}.00</h4>
        </ br>
        `)
        $('#display-orders').append(orderHtml)
        $('#display-orders').css('color', 'green')
        $('.reset').trigger('reset')
      })
    })
    $('#products-empty-message').addClass('hidden')
    $('#show-product-form').trigger('reset')
    $('#delete-product-form').trigger('reset')
    $('#display-message').addClass('hidden')
  }
}

const showOrderSuccess = function (data) {
  $('#orders-empty-message').addClass('hidden')
  $('#display-message').html('')
  $('#display-orders').html('')
  const order = data.order
  const orderHtml = (`
    <p>Name: ${order.name}</p>
    <h4>Total: ${order.price}</h4>
    <h4>ID: ${order._id}</h4>
    </ br>
    `)
  $('#display-orders').html(orderHtml)
  $('#products-empty-message').addClass('hidden')
  $('#show-product-form').trigger('reset')
}

const updateOrderSuccess = function (data) {
  $('#orders-empty-message').addClass('hidden')
  $('#display-message').html('')
  $('#display-message').html('Update successful!')
  $('#display-message').css('color', 'green')
  $('#display-orders').html('')
  $('#products-empty-message').addClass('hidden')
  $('#show-product-form').trigger('reset')
}

const newOrder = {
  products: 'Nothing in your cart yet',
  purchased: 'false',
  total: '0'
}

const destroyOrderSuccess = function () {
  $('#orders-empty-message').addClass('hidden')
  $('#display-message').html('')
  $('#display-message').html('Deletion successful!')
  $('#display-message').css('color', 'green')
  $('#display-orders').html('')
  $('#products-empty-message').addClass('hidden')
  $('#show-product-form').trigger('reset')
  $('#products-in-order').html('')
  $('#order-total').html('')
  $('#order-status').html('')
  $('#order-status').html('Nothing in your order')
  store.orderStatus = 'new'
  $('#order-id').html('')
  $('#order-id').html('No order ID yet. Add something to your cart!')
  store.orderId = null
  $('#products-in-order').append(newOrder.products)
  $('#order-total').append(newOrder.total)
}

const addToCartSuccess = function (data) {
  const order = data.order
  store.orderStatus = 'Pending'
  store.orderId = data.order._id
  store.orderTotal = data.order.total
  store.orderQty = order.products.length
  $('#orders-empty-message').addClass('hidden')
  $('#display-message').html('Add successful!')
  $('#display-message').css('color', 'green')
  $('#order-status').html(store.orderStatus)
  $('#order-id').html(store.orderId)
  $('#products-in-order').html(`${order.products.length}`)
  $('#order-total').html(`${order.total}`)
  $('#show-product-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('.stripe-button').removeClass('hidden')
}

const updateCartSuccess = function () {
  store.orderTotal = store.orderTotal += 500
  store.orderQty = store.orderQty += 1
  $('#orders-empty-message').addClass('hidden')
  $('#display-message').html('Add successful!')
  $('#display-message').css('color', 'green')
  $('#order-status').html(store.orderStatus)
  $('#order-id').html(store.orderId)
  $('#products-in-order').html(`${store.orderQty}`)
  $('#order-total').html(`${store.orderTotal}`)
  $('#view-one-product-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const failure = function () {
  $('#orders-empty-message').addClass('hidden')
  $('#display-orders').html('')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#products-empty-message').addClass('hidden')
  $('#show-product-form').trigger('reset')
}

module.exports = {
  createOrderSuccess,
  indexOrdersSuccess,
  showOrderSuccess,
  updateOrderSuccess,
  destroyOrderSuccess,
  addToCartSuccess,
  updateCartSuccess,
  failure
}
