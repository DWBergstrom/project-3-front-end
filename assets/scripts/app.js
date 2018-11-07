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
  $('#sign-in-form').on('submit', productEvents.onIndex)
  $('#change-password-form').on('submit', userEvents.onChangePassword)
  $('#sign-out-button').on('click', userEvents.onSignOut)
  $('#get-all-products-button').on('click', productEvents.onIndex)
  $('#show-product-form').on('submit', productEvents.onShow)
  $('#create-order-form').on('submit', orderEvents.onCreate)
  $('#update-order-form').on('submit', orderEvents.onUpdate)
  $('#get-all-orders-button').on('click', orderEvents.onIndex)
  $('#show-order-form').on('submit', orderEvents.onShow)
  $('#delete-order-form').on('submit', orderEvents.onDestroy)
})
