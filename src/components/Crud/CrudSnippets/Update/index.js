import React from 'react'
import { CopyBlock, a11yLight } from 'react-code-blocks'
import { CopyBlockCodeSnippets } from '../../../../utils'

const UpdateSnippet = () => {
  const updateCodeUXUI = CopyBlockCodeSnippets.updateCodeUXUI
  const updateCodeRoutes = CopyBlockCodeSnippets.updateCodeRoutes
  const updateCodeActions = CopyBlockCodeSnippets.updateCodeActions
  const updateCodeReducer = CopyBlockCodeSnippets.updateCodeReducer

  return (
    <div className="updateSnippet">
      <p>
        <b>Update:</b> The update function is used to modify existing records
        that exist in the database. To fully change a record, users may have to
        modify information in multiple fields. As a result, the existing record
        in the database must be changed and all of the attribute values changed
        to reflect the characteristics of the new dish.
      </p>
      <div className="accordion my-4" id="updateAccordion">
        {/* UX/UI */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingUpdateUXUI">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseUpdateUXUI"
              aria-expanded="true"
              aria-controls="collapseUpdateUXUI"
            >
              UX/UI
            </button>
          </h2>
          <div
            id="collapseUpdateUXUI"
            className="accordion-collapse collapse"
            aria-labelledby="headingUpdateUXIUI"
            data-bs-parent="#updateAccordion"
          >
            <div className="accordion-body">
              <p>Decsription</p>
              <CopyBlock
                language="javascript"
                text={updateCodeUXUI}
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
          <h2 className="accordion-header" id="headingUpdateRoutes">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseUpdateRoutes"
              aria-expanded="false"
              aria-controls="collapseUpdateRoutes"
            >
              Routes
            </button>
          </h2>
          <div
            id="collapseUpdateRoutes"
            className="accordion-collapse collapse"
            aria-labelledby="headingUpdateRoutes"
            data-bs-parent="#updateAccordion"
          >
            <div className="accordion-body">
              <p>Decsription</p>
              <CopyBlock
                language="javascript"
                text={updateCodeRoutes}
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
          <h2 className="accordion-header" id="headingUpdateActions">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseUpdateActions"
              aria-expanded="false"
              aria-controls="collapseUpdateActions"
            >
              Actions
            </button>
          </h2>
          <div
            id="collapseUpdateActions"
            className="accordion-collapse collapse"
            aria-labelledby="headingUpdateActions"
            data-bs-parent="#updateAccordion"
          >
            <div className="accordion-body">
              <p>Decsription</p>
              <CopyBlock
                language="javascript"
                text={updateCodeActions}
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
          <h2 className="accordion-header" id="headingUpdateReducer">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseUpdateReducer"
              aria-expanded="false"
              aria-controls="collapseUpdateReducer"
            >
              Reducer
            </button>
          </h2>
          <div
            id="collapseUpdateReducer"
            className="accordion-collapse collapse"
            aria-labelledby="headingUpdateReducer"
            data-bs-parent="#updateAccordion"
          >
            <div className="accordion-body">
              <p>Decsription</p>
              <CopyBlock
                language="javascript"
                text={updateCodeReducer}
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

export default UpdateSnippet
