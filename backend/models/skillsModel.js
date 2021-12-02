const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
// Form Validation done in the modiel using required: true/false
const SkillsSchema = new Schema({
  skills: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('Skills', SkillsSchema)
