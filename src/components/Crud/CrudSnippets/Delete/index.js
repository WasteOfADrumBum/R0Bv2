import React from 'react'
import { CopyBlock, a11yLight } from 'react-code-blocks'
import { CopyBlockCodeSnippets } from '../../../../utils'

const DeleteSnippet = () => {
  const deleteCode = CopyBlockCodeSnippets.deleteCode
  const deleteCodeRoutes = CopyBlockCodeSnippets.deleteCodeRoutes
  const deleteCodeActions = CopyBlockCodeSnippets.deleteCodeActions
  const deleteCodeReducer = CopyBlockCodeSnippets.deleteCodeReducer

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
