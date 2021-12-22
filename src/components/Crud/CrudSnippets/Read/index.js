import React from 'react'
import { CopyBlock, a11yLight } from 'react-code-blocks'
import { CopyBlockCodeSnippets } from '../../../../utils'

const ReadSnippet = () => {
  const readCodeUXUI = CopyBlockCodeSnippets.readCodeUXUI
  const readCodeRoutes = CopyBlockCodeSnippets.readCodeRoutes
  const readCodeActions = CopyBlockCodeSnippets.readCodeActions
  const readCodeReducer = CopyBlockCodeSnippets.readCodeReducer

  return (
    <div className="readSnippet">
      <p>
        <b>Read:</b> The read function is similar to a search function. It
        allows users to search and retrieve specific records in the table and
        read their values. Users may be able to find desired records using
        keywords, or by filtering the data based on customized criteria. For
        example, a database of items might enables users to view the all them
        items in the list.
      </p>
      <div className="accordion my-4" id="readAccordion">
        {/* UX/UI */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingReadUXUI">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseReadUXUI"
              aria-expanded="true"
              aria-controls="collapseReadUXUI"
            >
              UX/UI
            </button>
          </h2>
          <div
            id="collapseReadUXUI"
            className="accordion-collapse collapse"
            aria-labelledby="headingReadUXIUI"
            data-bs-parent="#readAccordion"
          >
            <div className="accordion-body">
              <p>Decsription</p>
              <CopyBlock
                language="javascript"
                text={readCodeUXUI}
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
          <h2 className="accordion-header" id="headingReadRoutes">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseReadRoutes"
              aria-expanded="false"
              aria-controls="collapseReadRoutes"
            >
              Routes
            </button>
          </h2>
          <div
            id="collapseReadRoutes"
            className="accordion-collapse collapse"
            aria-labelledby="headingReadRoutes"
            data-bs-parent="#readAccordion"
          >
            <div className="accordion-body">
              <p>Decsription</p>
              <CopyBlock
                language="javascript"
                text={readCodeRoutes}
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
          <h2 className="accordion-header" id="headingReadActions">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseReadActions"
              aria-expanded="false"
              aria-controls="collapseReadActions"
            >
              Actions
            </button>
          </h2>
          <div
            id="collapseReadActions"
            className="accordion-collapse collapse"
            aria-labelledby="headingReadActions"
            data-bs-parent="#readAccordion"
          >
            <div className="accordion-body">
              <p>Decsription</p>
              <CopyBlock
                language="javascript"
                text={readCodeActions}
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
          <h2 className="accordion-header" id="headingReadReducer">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseReadReducer"
              aria-expanded="false"
              aria-controls="collapseReadReducer"
            >
              Reducer
            </button>
          </h2>
          <div
            id="collapseReadReducer"
            className="accordion-collapse collapse"
            aria-labelledby="headingReadReducer"
            data-bs-parent="#readAccordion"
          >
            <div className="accordion-body">
              <p>Decsription</p>
              <CopyBlock
                language="javascript"
                text={readCodeReducer}
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

export default ReadSnippet
