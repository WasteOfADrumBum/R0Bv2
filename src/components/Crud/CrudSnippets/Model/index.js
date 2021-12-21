import React from 'react'
import { CopyBlock, a11yLight } from 'react-code-blocks'
import { CopyBlockCodeSnippets } from '../../../../utils'

const ModelSnippet = () => {
  const modelCode = CopyBlockCodeSnippets.modelCode

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
              className="accordion-button collapsed"
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
            className="accordion-collapse collapse"
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
