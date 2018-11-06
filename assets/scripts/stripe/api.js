'use strict'

const config = require('../config.js')

// const stripeData = {
//   email: 'dwb@db.com',
//   source: token,
//   amount: 1000,
//   currency: 'usd',
//   description: 'test'
// }

const stripeOrder = function (stripeData) {
  return $.ajax({
    url: config.apiUrl + '/charges',
    headers: {
      Authorization: 'Bearer sk_test_k5orqmsiNDI5QaGeGGGzhVmq'
    },
    method: 'POST',
    stripeData
  })
}

module.exports = {
  stripeOrder
}
