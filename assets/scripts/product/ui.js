'use strict'

const createProductSuccess = function (data) {
  $('#display-products').html('')
  $('#products-empty-message').addClass('hidden')
  $('#display-message').html('Add successful!')
  $('display-message').css('color', 'green')
  const product = data.product
  const productHtml = (`
    <p>Name: ${product.name}</p>
    <h4>Price: ${product.price}</h4>
    <h4>ID: ${product._id}</h4>
    </ br>
    `)
  $('#display-products').html(productHtml)
  $('#create-product-form').trigger('reset')
  $('#update-product-form').trigger('reset')
  $('#show-product-form').trigger('reset')
  $('#delete-product-form').trigger('reset')
  $('#display-orders').html('')
  $('#orders-empty-message').addClass('hidden')
  $('#create-order-form').trigger('reset')
  $('#update-order-form').trigger('reset')
  $('#show-order-form').trigger('reset')
  $('#delete-order-form').trigger('reset')
}

const indexProductsSuccess = function (data) {
  if (data.products.length === 0) {
    $('#display-message').html('')
    $('#products-empty-message').removeClass('hidden')
  } else {
    $('#display-message').html('')
    $('display-products').html('')
    data.products.forEach(function (product) {
      const productHtml = (`
        <p>Name: ${product.name}</p>
        <h4>Price: ${product.price}</h4>
        <h4>ID: ${product._id}</h4>
        </ br>
        `)
      $('#display-products').append(productHtml)
    })
    $('#create-product-form').trigger('reset')
    $('#update-product-form').trigger('reset')
    $('#show-product-form').trigger('reset')
    $('#delete-product-form').trigger('reset')
    $('#display-orders').html('')
    $('#orders-empty-message').addClass('hidden')
    $('#create-order-form').trigger('reset')
    $('#update-order-form').trigger('reset')
    $('#show-order-form').trigger('reset')
    $('#delete-order-form').trigger('reset')
  }
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
  $('#create-product-form').trigger('reset')
  $('#update-product-form').trigger('reset')
  $('#show-product-form').trigger('reset')
  $('#delete-product-form').trigger('reset')
  $('#display-orders').html('')
  $('#orders-empty-message').addClass('hidden')
  $('#create-order-form').trigger('reset')
  $('#update-order-form').trigger('reset')
  $('#show-order-form').trigger('reset')
  $('#delete-order-form').trigger('reset')
}

const updateProductSuccess = function (data) {
  $('#products-empty-message').addClass('hidden')
  $('#display-message').html('')
  $('#display-message').html('Update successful!')
  $('#display-message').css('color', 'green')
  $('#display-products').html('')
  $('#create-product-form').trigger('reset')
  $('#update-product-form').trigger('reset')
  $('#show-product-form').trigger('reset')
  $('#delete-product-form').trigger('reset')
  $('#display-orders').html('')
  $('#orders-empty-message').addClass('hidden')
  $('#create-order-form').trigger('reset')
  $('#update-order-form').trigger('reset')
  $('#show-order-form').trigger('reset')
  $('#delete-order-form').trigger('reset')
}

const destroyProductSuccess = function () {
  $('#products-empty-message').addClass('hidden')
  $('#display-message').html('')
  $('#display-message').html('Deletion successful!')
  $('#display-message').css('color', 'green')
  $('#display-products').html('')
  $('#create-product-form').trigger('reset')
  $('#update-product-form').trigger('reset')
  $('#show-product-form').trigger('reset')
  $('#delete-product-form').trigger('reset')
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
  $('#create-product-form').trigger('reset')
  $('#update-product-form').trigger('reset')
  $('#show-product-form').trigger('reset')
  $('#delete-product-form').trigger('reset')
  $('#display-orders').html('')
  $('#orders-empty-message').addClass('hidden')
  $('#create-order-form').trigger('reset')
  $('#update-order-form').trigger('reset')
  $('#show-order-form').trigger('reset')
  $('#delete-order-form').trigger('reset')
}

module.exports = {
  createProductSuccess,
  indexProductsSuccess,
  showProductSuccess,
  updateProductSuccess,
  destroyProductSuccess,
  failure
}
