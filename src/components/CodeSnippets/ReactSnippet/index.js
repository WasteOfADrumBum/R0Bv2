import React from 'react'
import { CopyBlock, a11yLight } from 'react-code-blocks'
import { CopyBlockCodeSnippets } from '../../../utils'
import '../_codeSnippets.scss'

const ReactSnippets = () => {
  const simpleCode = CopyBlockCodeSnippets.simpleCode
  const statefulCode = CopyBlockCodeSnippets.statefulCode

  return (
    <div className="reactSnippet">
      <h4>
        <b>React:</b> The UI Experience
      </h4>
      <p>
        React is component-based. Since component logic is written in JavaScript
        instead of templates, you can easily pass rich data through your app and
        keep state out of the DOM.
      </p>
      <div className="accordion my-4" id="reactAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="true"
              aria-controls="collapseSeven"
            >
              A Simple Component
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse show"
            aria-labelledby="headingSeven"
            data-bs-parent="#reactAccordion"
          >
            <div className="accordion-body">
              <p>
                Modern functional React components are written with ES6. This
                allows a return without needed a render function. To use this
                component we'd import it using{' '}
                <code>import SimpleComponent from './components'</code> and
                render it by placing <code>&#60;SimpleComponent/&#62;</code> in
                the return.
              </p>
              <CopyBlock
                language="javascript"
                text={simpleCode}
                showLineNumbers={true}
                theme={a11yLight}
                wrapLines={true}
                codeBlock
              />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              A Stateful Component
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#reactAccordion"
          >
            <div className="accordion-body">
              <p>
                Components need data to work with. There are two different ways
                that can combine components and data: either as props or state.
                props and state determine what a component renders and how it
                behaves.
              </p>
              <p>
                Data in props is accessible to a component and should be
                immutable and top-down. A parent component can pass on whatever
                data it wants to its children as props, but the child component
                cannot modify its props.{' '}
              </p>
              <p>
                A state is an object that is owned by the component where it is
                declared. Its scope is limited to the current component. A
                component can initialize its state and update it whenever
                necessary. The state of the parent component usually ends up
                being props of the child component. When the state is passed out
                of the current scope it becomes a prop.
              </p>
              <CopyBlock
                language="javascript"
                text={statefulCode}
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

export default ReactSnippets
