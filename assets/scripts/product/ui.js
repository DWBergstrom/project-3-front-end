'use strict'

const showProductsTemplate = require('../templates/product-list.handlebars')

const indexProductsSuccess = function (data) {
  if (data.products.length === 0) {
    $('#display-message').html('')
    $('#products-empty-message').removeClass('hidden')
  } else {
    $('#display-message').html('')
    $('display-products').html('')
    const showProductsIndex = showProductsTemplate({ products: data.products })
    $('.product-table').html(showProductsIndex)
    $('#show-product-form').trigger('reset')
    $('#display-orders').html('')
    $('#orders-empty-message').addClass('hidden')
    $('#create-order-form').trigger('reset')
    $('#update-order-form').trigger('reset')
    $('#show-order-form').trigger('reset')
    $('#delete-order-form').trigger('reset')
    $('.product-table').on('click', 'button', onAddToOrder)
  }
}

const onAddToOrder = function (event) {
  // console.log(event)
}

const showProductSuccess = function (data) {
  $('#products-empty-message').addClass('hidden')
  $('#display-message').html('')
  $('#display-products').html('')
  const product = data.product
  const productHtml = (`
    <p>Name: ${product.name}</p>
    <h4>Price: ${product.price}</h4>
    <h4>ID: ${product._id}</h4>
    </ br>
    `)
  $('#display-products').html(productHtml)
  $('#show-product-form').trigger('reset')
  $('#display-orders').html('')
  $('#orders-empty-message').addClass('hidden')
  $('#create-order-form').trigger('reset')
  $('#update-order-form').trigger('reset')
  $('#show-order-form').trigger('reset')
  $('#delete-order-form').trigger('reset')
}

const failure = function () {
  $('#products-empty-message').addClass('hidden')
  $('#display-products').html('')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#show-product-form').trigger('reset')
  $('#display-orders').html('')
  $('#orders-empty-message').addClass('hidden')
  $('#create-order-form').trigger('reset')
  $('#update-order-form').trigger('reset')
  $('#show-order-form').trigger('reset')
  $('#delete-order-form').trigger('reset')
}

module.exports = {
  indexProductsSuccess,
  showProductSuccess,
  failure
}
