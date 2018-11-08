'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('./user/events.js')
const productEvents = require('./product/events.js')
const orderEvents = require('./order/events.js')

$(() => {
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#change-password-form').on('submit', userEvents.onChangePassword)
  $('#sign-out-button').on('click', userEvents.onSignOut)
  $('#sign-in-form').on('submit', productEvents.onIndex)
  $('#show-product-form').on('submit', productEvents.onShow)
  $('#cancel-order-button').on('click', orderEvents.onDestroy)
  $('#get-all-orders-button').on('click', orderEvents.onIndex)
  $('#show-order-form').on('submit', orderEvents.onShow)
  $('.product-table').on('click', '.add-to-order', orderEvents.onAddToCart)
})
