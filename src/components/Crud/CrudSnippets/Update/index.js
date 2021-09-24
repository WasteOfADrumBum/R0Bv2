import React from 'react'
import { CopyBlock, a11yLight } from 'react-code-blocks'

const UpdateSnippet = () => {
  const updateCode = ``

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
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingUpdate">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseUpdate"
              aria-expanded="true"
              aria-controls="collapseUpdate"
            >
              Update Code Snippet
            </button>
          </h2>
          <div
            id="collapseUpdate"
            className="accordion-collapse collapse show"
            aria-labelledby="headingUpdate"
            data-bs-parent="#updateAccordion"
          >
            <div className="accordion-body">
              <p>Decsription</p>
              <CopyBlock
                language="javascript"
                text={updateCode}
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
