import React from 'react'
import { CopyBlock, a11yLight } from 'react-code-blocks'
import '../_codeSnippets.scss'

const BootstrapSnippets = () => {
  const code = ``

  return (
    <div className="bootstrapSnippet">
      <h4>
        <b>Bootstrap:</b> Responsive & Mobile-First Web Development
      </h4>
      <div className="accordion my-4" id="bootstrapAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse show"
            aria-labelledby="headingFour"
            data-bs-parent="#bootstrapAccordion"
          >
            <div className="accordion-body">
              <p>Text</p>
              <CopyBlock
                language="javascript"
                text={code}
                showLineNumbers={true}
                theme={a11yLight}
                wrapLines={true}
                codeBlock
              />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#bootstrapAccordion"
          >
            <div className="accordion-body">
              <p>Text</p>
              <CopyBlock
                language="javascript"
                text={code}
                showLineNumbers={true}
                theme={a11yLight}
                wrapLines={true}
                codeBlock
              />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#bootstrapAccordion"
          >
            <div className="accordion-body">
              <p>Text</p>
              <CopyBlock
                language="javascript"
                text={code}
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

export default BootstrapSnippets
