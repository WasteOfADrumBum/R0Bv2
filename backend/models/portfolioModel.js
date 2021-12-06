const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
// Form Validation done in the modiel using required: treu/false
const PortfolioSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Schema.Types.Mixed,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  skills: {
    type: String,
    required: false,
  },
  linkUrl: {
    type: String,
    required: false,
  },
  imgSrc: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('Portfolio', PortfolioSchema)
