import React from 'react'
import { CopyBlock, a11yLight } from 'react-code-blocks'

const CreateSnippet = () => {
  const createCodeUXUI = ``
  const createCodeRoutes = `// @Route   POST api/crud/create-crud
// @Desc    Create CRUD
// @Action  createCRUD()
// @Access  Private
router.post('/create-crud', async (req, res) => {
  const {
    firstName,
    lastName,
    usastreet,
    usacity,
    usaState,
    usaZip,
    question,
  } = req.body

  const newEntry = {}
  if (firstName) newEntry.firstName = firstName
  if (lastName) newEntry.lastName = lastName
  if (usastreet) newEntry.usastreet = usastreet
  if (usacity) newEntry.usacity = usacity
  if (usaState) newEntry.usaState = usaState
  if (usaZip) newEntry.usaZip = usaZip
  if (question) newEntry.question = question

  try {
    let crud = new crudModel(newEntry)
    await crud.save()
    res.status(200).send('Success')
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})`
  const createCodeActions = `const express = require('express')
const router = express.Router()

// load Model
const crudModel = require('../models/crudModel')

// @Route   POST api/crud/create-crud
// @Desc    Create CRUD
// @Action  createCRUD()
// @Access  Private
router.post('/create-crud', async (req, res) => {
  const {
    firstName,
    lastName,
    usaStreet,
    usaCity,
    usaState,
    usaZip,
    question,
  } = req.body

  const newEntry = {
    name: {
      firstName: firstName || '',
      lastName: lastName || '',
    },
    address: {
      usaStreet: usaStreet || '',
      usaCity: usaCity || '',
      usaState: usaState || '',
      usaZip: usaZip || '',
    },
    question: question || false,
  }

  try {
    let crud = new crudModel(newEntry)
    await crud.save()
    res.status(200).send('Success')
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})`
  const createCodeReducer = `import {
  CRUD_FAIL,
  CRUD_SUCCESS,
} from '../actions'

const crudReducer = (
  state = {
    allCrud: [], // Pulls in all crud
    crud: null, // Pulls in Specific crud
    loading: false, // Has everything needed been loaded
    success: {},
    error: {},
  },
  action,
) => {
  const { type, payload } = action
  switch (type) {
    case CRUD_FAIL:
      return {
        ...state,
        error: payload,
        allCrud: [],
        crud: null,
        loading: false,
      }
    case CRUD_SUCCESS:
      return {
        ...state,
        success: payload,
        loading: false,
      }
    default:
      return state
  }
}

export default crudReducer
`

  return (
    <div className="createSnippet">
      <p>
        <b>Create:</b> The create function allows users to create a new record
        in the database. In the SQL relational database application, the Create
        function is called INSERT. In Oracle HCM Cloud, it is called create.
        Remember that a record is a row and that columns are termed attributes.
        A user can create a new row and populate it with data that corresponds
        to each attribute, but only an administrator might be able to add new
        attributes to the table itself.
      </p>
      <div className="accordion my-4" id="createAccordion">
        {/* UX/UI */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingCreateUXUI">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCreateUXUI"
              aria-expanded="true"
              aria-controls="collapseCreateUXUI"
            >
              UX/UI
            </button>
          </h2>
          <div
            id="collapseCreateUXUI"
            className="accordion-collapse collapse show"
            aria-labelledby="headingCreateUXIUI"
            data-bs-parent="#createAccordion"
          >
            <div className="accordion-body">
              <p>Decsription</p>
              <CopyBlock
                language="javascript"
                text={createCodeUXUI}
                showLineNumbers={true}
                theme={a11yLight}
                wrapLines={true}
                codeBlock
              />
            </div>
          </div>
        </div>
        {/* Routes */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingCreateRoutes">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCreateRoutes"
              aria-expanded="false"
              aria-controls="collapseCreateRoutes"
            >
              Routes
            </button>
          </h2>
          <div
            id="collapseCreateRoutes"
            className="accordion-collapse collapse"
            aria-labelledby="headingCreateRoutes"
            data-bs-parent="#createAccordion"
          >
            <div className="accordion-body">
              <p>Decsription</p>
              <CopyBlock
                language="javascript"
                text={createCodeRoutes}
                showLineNumbers={true}
                theme={a11yLight}
                wrapLines={true}
                codeBlock
              />
            </div>
          </div>
        </div>
        {/* Actions */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingCreateActions">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCreateActions"
              aria-expanded="false"
              aria-controls="collapseCreateActions"
            >
              Actions
            </button>
          </h2>
          <div
            id="collapseCreateActions"
            className="accordion-collapse collapse"
            aria-labelledby="headingCreateActions"
            data-bs-parent="#createAccordion"
          >
            <div className="accordion-body">
              <p>Decsription</p>
              <CopyBlock
                language="javascript"
                text={createCodeActions}
                showLineNumbers={true}
                theme={a11yLight}
                wrapLines={true}
                codeBlock
              />
            </div>
          </div>
        </div>
        {/* Reducer */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingCreateReducer">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCreateReducer"
              aria-expanded="false"
              aria-controls="collapseCreateReducer"
            >
              Reducer
            </button>
          </h2>
          <div
            id="collapseCreateReducer"
            className="accordion-collapse collapse"
            aria-labelledby="headingCreateReducer"
            data-bs-parent="#createAccordion"
          >
            <div className="accordion-body">
              <p>Decsription</p>
              <CopyBlock
                language="javascript"
                text={createCodeReducer}
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

export default CreateSnippet
