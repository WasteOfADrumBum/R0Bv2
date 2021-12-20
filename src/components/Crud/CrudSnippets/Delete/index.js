import React from 'react'
import { CopyBlock, a11yLight } from 'react-code-blocks'

const DeleteSnippet = () => {
  const deleteCode = `import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { deleteCrud } from '../../../actions'
import './_display.scss'

const CrudDisplay = ({
  deleteCrud,
  crud: { allCrud, loading: crud_loading },
}) => {

/* Delete an entry by ID */
const onDelete = (id) => {
  deleteCrud(id)
}

return (<i type="button" className="bi bi-trash-fill text-danger" onClick={() => onDelete(crud._id)} />)

const mapStateToProps = (state) => ({
  crudReducer: state.crudReducer,
  crud: state.crud,
})

export default connect(mapStateToProps, {
  deleteCrud,
})(CrudDisplay)`

  const deleteCodeRoutes = `const express = require('express')
const router = express.Router()

// load Model
const crudModel = require('../models/crudModel')

// @Route   DELTE api/crud/delete-crud/:id
// @Desc    Delete CRUD
// @Action  deleteCRUD()
// @Access  Private
router.delete('/delete-crud/:id', async (req, res) => {
  try {
    const crud = await crudModel.findOneAndRemove({
      _id: req.params.id,
    })
    if (!crud) {
      return res.status(400).json({
        errors: [{ msg: 'CRUD was not found' }],
      })
    }
    const allCRUD = await crudModel.find()
    if (allCRUD.length <= 0) {
      return res.status(400).json({
        errors: [{ msg: 'No crud was found' }],
      })
    }
    res.json(allCRUD)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router`

  const deleteCodeActions = `import axios from 'axios'

export const DELETE_CRUD = 'DELETE_CRUD'
export const CRUD_FAIL = 'CRUD_FAIL'
  
// @Route   DELTE api/crud/delete-crud/:id
// @Desc    Delete Crud
// @Action  deleteCrud()
// @Access  Private
export const deleteCrud = (id) => async (dispatch) => {
  if (
    window.confirm(
      'Are you sure you want to delete this crud? This cannot be undone.',
    )
  ) {
    try {
      const res = await axios.delete('/api/crud/delete-crud/id')
      dispatch({
        type: DELETE_CRUD,
        payload: res.data,
      })
    } catch (err) {
      console.log(err)
      dispatch({
        type: CRUD_FAIL,
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }
  }
}`

  const deleteCodeReducer = `import {
  DELETE_CRUD,
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
    case DELETE_CRUD:
      return {
        ...state,
        allCrud: payload,
        loading: false,
      }
    case CRUD_FAIL:
      return {
        ...state,
        error: payload,
        allCrud: [],
        crud: null,
        loading: false,
      }
    default:
      return state
  }
}

export default crudReducer
`

  return (
    <div className="deleteSnippet">
      <p>
        <b>Delete:</b> The delete function allows users to remove records from a
        database that is no longer needed. The delete function allows users to
        delete one or more records from the database. Some relational database
        applications may permit users to perform either a hard delete or a soft
        delete. A hard delete permanently removes records from the database,
        while a soft delete might simply update the status of a row to indicate
        that it has been deleted while leaving the data present and intact.
      </p>
      <div className="accordion my-4" id="deleteAccordion">
        {/* UX/UI */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingDeleteUXUI">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseDeleteUXUI"
              aria-expanded="true"
              aria-controls="collapseDeleteUXUI"
            >
              UX/UI
            </button>
          </h2>
          <div
            id="collapseDeleteUXUI"
            className="accordion-collapse collapse"
            aria-labelledby="headingDeleteUXUI"
            data-bs-parent="#deleteAccordion"
          >
            <div className="accordion-body">
              <p>Decsription</p>
              <CopyBlock
                language="javascript"
                text={deleteCode}
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
          <h2 className="accordion-header" id="headingDeleteRoutes">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseDeleteRoutes"
              aria-expanded="false"
              aria-controls="collapseDeleteRoutes"
            >
              Routes
            </button>
          </h2>
          <div
            id="collapseDeleteRoutes"
            className="accordion-collapse collapse"
            aria-labelledby="headingDeleteRoutes"
            data-bs-parent="#deleteAccordion"
          >
            <div className="accordion-body">
              <p>Decsription</p>
              <CopyBlock
                language="javascript"
                text={deleteCodeRoutes}
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
          <h2 className="accordion-header" id="headingDeleteActions">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseDeleteActions"
              aria-expanded="false"
              aria-controls="collapseDeleteActions"
            >
              Actions
            </button>
          </h2>
          <div
            id="collapseDeleteActions"
            className="accordion-collapse collapse"
            aria-labelledby="headingDeleteActions"
            data-bs-parent="#deleteAccordion"
          >
            <div className="accordion-body">
              <p>Decsription</p>
              <CopyBlock
                language="javascript"
                text={deleteCodeActions}
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
          <h2 className="accordion-header" id="headingDeleteReducer">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseDeleteReducer"
              aria-expanded="false"
              aria-controls="collapseDeleteReducer"
            >
              Reducer
            </button>
          </h2>
          <div
            id="collapseDeleteReducer"
            className="accordion-collapse collapse"
            aria-labelledby="headingDeleteReducer"
            data-bs-parent="#deleteAccordion"
          >
            <div className="accordion-body">
              <p>Decsription</p>
              <CopyBlock
                language="javascript"
                text={deleteCodeReducer}
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

export default DeleteSnippet
