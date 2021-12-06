const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
// Form Validation done in the modiel using required: treu/false
const CRUDSchema = new Schema({
  name: {
    firstName: { type: String },
    lastName: { type: String },
    required: true,
  },
  address: {
    street: String,
    city: String,
    state: {
      type: String,
      uppercase: true,
      required: true,
    },
    zip: Number,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  question: {
    questionIsTrue: {
      type: Boolean,
      default: false,
    },
    questionIsFalse: {
      type: Boolean,
      default: false,
    },
  },
})

module.exports = mongoose.model('CRUD', CRUDSchema)
