'use strict'

const config = require('../config.js')
const store = require('../store.js')

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

module.exports = {
  indexProducts,
  showProduct
}
