import React from 'react'
import { CopyBlock, a11yLight } from 'react-code-blocks'

const DeleteSnippet = () => {
  const deleteCode = ``

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
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingDelete">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseDelete"
              aria-expanded="true"
              aria-controls="collapseDelete"
            >
              Delete Code Sippet
            </button>
          </h2>
          <div
            id="collapseDelete"
            className="accordion-collapse collapse show"
            aria-labelledby="headingDelete"
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
      </div>
    </div>
  )
}

export default DeleteSnippet
