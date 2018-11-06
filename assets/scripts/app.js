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
  $('#add-product-form').on('submit', productEvents.onCreate)
  $('#update-product-form').on('submit', productEvents.onUpdate)
  $('#get-all-products-button').on('click', productEvents.onIndex)
  $('#get-one-product-form').on('submit', productEvents.onShow)
  $('#delete-product-form').on('submit', productEvents.onDestroy)
  $('#add-order-form').on('submit', orderEvents.onCreate)
  $('#update-order-form').on('submit', orderEvents.onUpdate)
  $('#get-all-orders-button').on('click', orderEvents.onIndex)
  $('#get-one-order-form').on('submit', orderEvents.onShow)
  $('#delete-order-form').on('submit', orderEvents.onDestroy)
})
