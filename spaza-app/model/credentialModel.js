const mongoose = require('mongoose')

var ShopperSchema = mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  hashedPassword: { type: String, required: true }
})

var Shopper = mongoose.model('Shopper', ShopperSchema)

module.exports = Shopper;