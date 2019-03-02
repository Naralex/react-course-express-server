const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let productSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: REQUIRED_VALIDATION_MESSAGE,
    unique: [true, 'Product already exists.']
  },
  manufacturer: {type: mongoose.Schema.Types.String},
  link: {type: mongoose.Schema.Types.String, required: true},
  text: {type: mongoose.Schema.Types.String},
  image: {
    path: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
    pathBig: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE}
  },
  availability: {type: mongoose.Schema.Types.String},
  wholesalePrice: {type: mongoose.Schema.Types.Number, required: REQUIRED_VALIDATION_MESSAGE},
  retailPrice: {type: mongoose.Schema.Types.Number, required: REQUIRED_VALIDATION_MESSAGE}
})

let Product = mongoose.model('Product', productSchema)

module.exports = Product
