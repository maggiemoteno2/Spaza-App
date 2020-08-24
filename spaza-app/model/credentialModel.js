const mongoose = require('mongoose')

var RegistrySchema = mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  hashedPassword: { type: String, required: true }
})

var RegistryModel = mongoose.model('RegistryModel', RegistrySchema)

module.exports = RegistryModel;