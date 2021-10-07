const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
// Form Validation done in the modiel using required: treu/false
const EmploymentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  employmentType: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  locationCity: {
    type: String,
    required: false,
  },
  locationState: {
    type: String,
    required: false,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  expType: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Employment', EmploymentSchema)
