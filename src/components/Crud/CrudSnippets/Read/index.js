import React from 'react'
import { CopyBlock, a11yLight } from 'react-code-blocks'

const ReadSnippet = () => {
  const readCode = ``

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
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingRead">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseRead"
              aria-expanded="true"
              aria-controls="collapseRead"
            >
              Read Code Snippet
            </button>
          </h2>
          <div
            id="collapseRead"
            className="accordion-collapse collapse show"
            aria-labelledby="headingRead"
            data-bs-parent="#readAccordion"
          >
            <div className="accordion-body">
              <p>Decsription</p>
              <CopyBlock
                language="javascript"
                text={readCode}
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
