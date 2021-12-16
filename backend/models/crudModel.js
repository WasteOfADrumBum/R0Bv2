const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
// Form Validation done in the modiel using required: true/false
const CRUDSchema = new Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  address: {
    usaStreet: { type: String, required: true },
    usaCity: { type: String, required: true },
    usaState: {
      type: String,
      uppercase: true,
      required: true,
    },
    usaZip: Number,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  question: { type: Boolean, default: false },
})

module.exports = mongoose.model('CRUD', CRUDSchema)
