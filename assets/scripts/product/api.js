'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createProduct = function (data) {
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'POST',
    data
  })
}

const indexProducts = function () {
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'GET'
  })
}

const showProduct = function (productData) {
  const productId = productData.product.id
  return $.ajax({
    url: config.apiUrl + `/products/${productId}`,
    method: 'GET'
  })
}

const updateProduct = function (data) {
  const productId = data.product.id
  return $.ajax({
    url: config.apiUrl + `/products/${productId}`,
    method: 'PATCH',
    data
  })
}

const deleteProduct = function (data) {
  const productId = data.product.id
  return $.ajax({
    url: config.apiUrl + `/products/${productId}`,
    method: 'DELETE',
    data
  })
}

module.exports = {
  createProduct,
  indexProducts,
  showProduct,
  updateProduct,
  deleteProduct
}
