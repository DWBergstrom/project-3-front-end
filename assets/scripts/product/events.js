'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onIndex = function (event) {
  event.preventDefault()
  api.indexProducts()
    .then(ui.indexProductsSuccess)
    .catch(ui.failure)
}

const onShow = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showProduct(data)
    .then(ui.showProductSuccess)
    .catch(ui.failure)
}

module.exports = {
  onIndex,
  onShow
}
