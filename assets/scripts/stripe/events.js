// 'use strict'
//
// const store = require('../store.js')
// //
// const handler = StripeCheckout.configure({
//   key: 'pk_test_o7jSVV2xJmBWPs9DsgICx8C9',
//   image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
//   locale: 'auto',
//   token: function (token) {
//     console.log(token)
//
//     const stripeData = {
//       email: 'dwb@db.com',
//       source: token,
//       amount: '1000',
//       currency: 'usd',
//       description: 'test'
//     }
//
//     const stripeOrder = function (stripeData) {
//       return $.ajax({
//         url: 'http://localhost:4741' + '/charges',
//         headers: {
//           Authorization: 'Bearer sk_test_k5orqmsiNDI5QaGeGGGzhVmq'
//         },
//         method: 'POST',
//         data: stripeData
//       })
//     }
//     stripeOrder(stripeData)
//   }
// })
//
// const onCheckout = function (event) {
//   // Open Checkout with further options:
//   handler.open({
//     name: 'Nozama',
//     description: 'Purchase your order',
//     amount: 2000
//   })
//   event.preventDefault()
// }
//
// module.exports = {
//   onCheckout
// }
