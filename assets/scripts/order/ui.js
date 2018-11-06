'use strict'

const store = require('../store.js')

const createOrderSuccess = function (data) {
  $('#display-orders').html('')
  $('#orders-empty-message').addClass('hidden')
  $('#display-message').html('Add successful!')
  $('display-message').css('color', 'green')
  console.log('data in createOrderSuccess is ', data)
  const order = data.order
  const orderHtml = (`
    <p>Name: ${order.name}</p>
    <h4>Total: ${order.price}</h4>
    <h4>ID: ${order._id}</h4>
    </ br>
    `)
  $('#display-orders').html(orderHtml)
  $('#create-order-form').trigger('reset')
  $('#update-order-form').trigger('reset')
  $('#show-order-form').trigger('reset')
  $('#delete-order-form').trigger('reset')
  $('#products-empty-message').addClass('hidden')
  $('#create-product-form').trigger('reset')
  $('#update-product-form').trigger('reset')
  $('#show-product-form').trigger('reset')
  $('#delete-product-form').trigger('reset')
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
    $('#create-order-form').trigger('reset')
    $('#update-order-form').trigger('reset')
    $('#show-order-form').trigger('reset')
    $('#delete-order-form').trigger('reset')
    $('#products-empty-message').addClass('hidden')
    $('#create-product-form').trigger('reset')
    $('#update-product-form').trigger('reset')
    $('#show-product-form').trigger('reset')
    $('#delete-product-form').trigger('reset')
    $('#display-message').addClass('hidden')
  }
}

const showOrderSuccess = function (data) {
  console.log('data in show orders is ', data)
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
  $('#create-order-form').trigger('reset')
  $('#update-order-form').trigger('reset')
  $('#show-order-form').trigger('reset')
  $('#delete-order-form').trigger('reset')
  $('#products-empty-message').addClass('hidden')
  $('#create-product-form').trigger('reset')
  $('#update-product-form').trigger('reset')
  $('#show-product-form').trigger('reset')
  $('#delete-product-form').trigger('reset')
}

const updateOrderSuccess = function (data) {
  $('#orders-empty-message').addClass('hidden')
  $('#display-message').html('')
  $('#display-message').html('Update successful!')
  $('#display-message').css('color', 'green')
  $('#display-orders').html('')
  $('#create-order-form').trigger('reset')
  $('#update-order-form').trigger('reset')
  $('#show-order-form').trigger('reset')
  $('#delete-order-form').trigger('reset')
  $('#products-empty-message').addClass('hidden')
  $('#create-product-form').trigger('reset')
  $('#update-product-form').trigger('reset')
  $('#show-product-form').trigger('reset')
  $('#delete-product-form').trigger('reset')
}

const destroyOrderSuccess = function () {
  $('#orders-empty-message').addClass('hidden')
  $('#display-message').html('')
  $('#display-message').html('Deletion successful!')
  $('#display-message').css('color', 'green')
  $('#display-orders').html('')
  $('#create-order-form').trigger('reset')
  $('#update-order-form').trigger('reset')
  $('#show-order-form').trigger('reset')
  $('#delete-order-form').trigger('reset')
  $('#products-empty-message').addClass('hidden')
  $('#create-product-form').trigger('reset')
  $('#update-product-form').trigger('reset')
  $('#show-product-form').trigger('reset')
  $('#delete-product-form').trigger('reset')
}

const addToCartSuccess = function (data) {
  const order = data.order
  store.orderStatus = 'pending'
  store.orderId = data.order._id
  store.orderTotal = data.order.total
  $('#orders-empty-message').addClass('hidden')
  $('#display-message').html('Add successful!')
  $('#display-message').css('color', 'green')
  $('#order-status').html(store.orderStatus)
  $('#order-id').html(store.orderId)
  $('#products-in-order').html(`${order.products.length}`)
  $('#order-total').html(`${order.total}`)
  $('#view-one-product-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const updateCartSuccess = function (data) {
  console.log('data in updateCartSuccess is ', data)
}

const failure = function () {
  $('#orders-empty-message').addClass('hidden')
  $('#display-orders').html('')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#create-order-form').trigger('reset')
  $('#update-order-form').trigger('reset')
  $('#show-order-form').trigger('reset')
  $('#delete-order-form').trigger('reset')
  $('#products-empty-message').addClass('hidden')
  $('#create-product-form').trigger('reset')
  $('#update-product-form').trigger('reset')
  $('#show-product-form').trigger('reset')
  $('#delete-product-form').trigger('reset')
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
