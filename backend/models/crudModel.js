const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
// Form Validation done in the modiel using required: true/false
const CRUDSchema = new Schema(
  {
    name: {
      firstName: { type: String, required: true, trim: true },
      lastName: { type: String, required: true, trim: true },
    },
    address: {
      usaStreet: { type: String, required: true, trim: true },
      usaCity: { type: String, required: true, trim: true },
      usaState: {
        type: String,
        uppercase: true,
        required: true,
        trim: true,
      },
      usaZip: Number,
    },
    question: { type: Boolean, default: false },
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  },
)

module.exports = mongoose.model('CRUD', CRUDSchema)
