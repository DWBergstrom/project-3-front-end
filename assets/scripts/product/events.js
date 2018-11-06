'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createProduct(data)
    .then(ui.createProductSuccess)
    .catch(ui.failure)
}

const onUpdate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateProduct(data)
    .then(ui.updateProductSuccess)
    .catch(ui.failure)
}

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

const onDestroy = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteProduct(data)
    .then(ui.destroyProductSuccess)
    .catch(ui.failure)
}

module.exports = {
  onCreate,
  onUpdate,
  onIndex,
  onShow,
  onDestroy
}
