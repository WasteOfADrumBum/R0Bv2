const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
// Form Validation done in the modiel using required: treu/false
const EducationSchema = new Schema({
  degree: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  endDate: {
    type: Schema.Types.Mixed,
    required: false,
  },
  fieldOfStudy: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
})

module.exports = mongoose.model('Education', EducationSchema)
