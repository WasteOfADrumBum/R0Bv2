import React from 'react'
import { CopyBlock, a11yLight } from 'react-code-blocks'

const CreateSnippet = () => {
  const createCode = ``

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
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingCreate">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCreate"
              aria-expanded="true"
              aria-controls="collapseCreate"
            >
              Create Code Snippet
            </button>
          </h2>
          <div
            id="collapseCreate"
            className="accordion-collapse collapse show"
            aria-labelledby="headingCreate"
            data-bs-parent="#createAccordion"
          >
            <div className="accordion-body">
              <p>Decsription</p>
              <CopyBlock
                language="javascript"
                text={createCode}
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
