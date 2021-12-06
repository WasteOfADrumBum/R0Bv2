import React from 'react'
import { CopyBlock, a11yLight } from 'react-code-blocks'

const ModelSnippet = () => {
  const modelCode = `const mongoose = require('mongoose')
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
    true: {
      type: Boolean,
      default: false,
    },
    false: {
      type: Boolean,
      default: false,
    },
  },
})

module.exports = mongoose.model('CRUD', CRUDSchema)`

  return (
    <div className="modelSnippet">
      <p>
        <b>Model:</b> A model represents the data that the user can interact
        with. This model shows how the data is captured into the database when
        the user interacts with it. Starting with building a model helps to make
        sure you're capturing all the data you need and later helps with
        building the frontend of the application for the user.
      </p>
      <div className="accordion my-4" id="modelAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingModel">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseModel"
              aria-expanded="true"
              aria-controls="collapseModel"
            >
              Model Code Snippet
            </button>
          </h2>
          <div
            id="collapseModel"
            className="accordion-collapse collapse show"
            aria-labelledby="headingModel"
            data-bs-parent="#modelAccordion"
          >
            <div className="accordion-body">
              <CopyBlock
                language="javascript"
                text={modelCode}
                showLineNumbers={true}
                theme={a11yLight}
                wrapLines={true}
                codeBlock
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModelSnippet
