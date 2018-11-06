'use strict'

const store = require('../store.js')

const signUpSuccess = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Sign up successful!')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const newOrder = {
  products: 'Nothing in your cart yet',
  purchased: 'false',
  total: '0'
}

const signInSuccess = function (response) {
  store.user = response.user
  store.orderStatus = 'new'
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Sign in successful!')
  $('#display-message').css('color', 'green')
  $('sign-in-form').trigger('reset')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#create-product-form').removeClass('hidden')
  $('#get-all-products-button').removeClass('hidden')
  $('#show-product-form').removeClass('hidden')
  $('#update-product-form').removeClass('hidden')
  $('#delete-product-form').removeClass('hidden')
  $('#create-order-form').removeClass('hidden')
  $('#get-all-orders-button').removeClass('hidden')
  $('#show-order-form').removeClass('hidden')
  $('#update-order-form').removeClass('hidden')
  $('#delete-order-form').removeClass('hidden')
  $('#display-products').removeClass('hidden')
  $('#display-orders').removeClass('hidden')
  $('.order').removeClass('hidden')
  $('#products-in-order').append(newOrder.products)
  $('#order-total').append(newOrder.total)
  $('.table').removeClass('hidden')
}

const changePasswordSuccess = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Password changed successfully!')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
  $('#create-product-form').trigger('reset')
  $('#get-all-products-button').trigger('reset')
  $('#show-product-form').trigger('reset')
  $('#update-product-form').trigger('reset')
  $('#delete-product-form').trigger('reset')
  $('#create-order-form').trigger('reset')
  $('#get-all-orders-button').trigger('reset')
  $('#show-order-form').trigger('reset')
  $('#update-order-form').trigger('reset')
  $('#delete-order-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Sign out successful!')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#create-product-form').addClass('hidden')
  $('#get-all-products-button').addClass('hidden')
  $('#show-product-form').addClass('hidden')
  $('#update-product-form').addClass('hidden')
  $('#delete-product-form').addClass('hidden')
  $('#create-order-form').addClass('hidden')
  $('#get-all-orders-button').addClass('hidden')
  $('#show-order-form').addClass('hidden')
  $('#update-order-form').addClass('hidden')
  $('#delete-order-form').addClass('hidden')
  $('#create-product-form').trigger('reset')
  $('#get-all-products-button').trigger('reset')
  $('#show-product-form').trigger('reset')
  $('#update-product-form').trigger('reset')
  $('#delete-product-form').trigger('reset')
  $('#create-order-form').trigger('reset')
  $('#get-all-orders-button').trigger('reset')
  $('#show-order-form').trigger('reset')
  $('#update-order-form').trigger('reset')
  $('#delete-order-form').trigger('reset')
  $('#display-products').addClass('hidden')
  $('#display-orders').addClass('hidden')
  $('.table').addClass('hidden')
  $('.order').addClass('hidden')
}

const failure = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#create-product-form').trigger('reset')
  $('#get-all-products-button').trigger('reset')
  $('#show-product-form').trigger('reset')
  $('#update-product-form').trigger('reset')
  $('#delete-product-form').trigger('reset')
  $('#create-order-form').trigger('reset')
  $('#get-all-orders-button').trigger('reset')
  $('#show-order-form').trigger('reset')
  $('#update-order-form').trigger('reset')
  $('#delete-order-form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}
