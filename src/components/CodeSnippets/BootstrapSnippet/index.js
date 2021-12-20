import React from 'react'
import { CopyBlock, a11yLight } from 'react-code-blocks'
import '../_codeSnippets.scss'

const BootstrapSnippets = () => {
  const accordionCode = `<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>`

  const buttonCode = `<button type="button" className="btn btn-primary">Primary</button>
<button type="button" className="btn btn-secondary">Secondary</button>

<button type="button" className="btn btn-success">Success</button>
<button type="button" className="btn btn-danger">Danger</button>
<button type="button" className="btn btn-warning">Warning</button>
<button type="button" className="btn btn-info">Info</button>

<button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button>

<button type="button" className="btn btn-link">Link</button>`

  const cardCode = `<div className="card">
  <img src="..." className="card-img-top" alt="...">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Card's body content.</p>
    <a href="#" className="btn btn-link">Link</a>
  </div>
</div>`

  return (
    <div className="bootstrapSnippet">
      <h4>
        <b>Bootstrap v5.1:</b> Responsive & Mobile-First Web Development
      </h4>
      <p>
        Boostrap allows for quick design and customize responsive mobile-first
        sites. Bootstrap is the world’s most popular front-end open source
        toolkit, featuring Sass variables and mixins, responsive grid system,
        extensive prebuilt components, and powerful JavaScript plugins. I chose
        this framework do to my love for it and it's popularity amoung user's
        everywhere. Below are examples of code I'm using in this project in an
        easy to read format.
      </p>
      <div className="row">
        <div className="col-md-6 p-1">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-hand-thumbs-up me-2" />
                Pros:
              </h5>
              <div className="card-text">
                <ul>
                  <li>Mobile first, responsive web design framework</li>
                  <li>Good community support and documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-1">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-hand-thumbs-down me-2" />
                Cons:
              </h5>
              <div className="card-text">
                <ul>
                  <li>Large dependency size (~ 300KB)</li>
                  <li>Dependency on jQuery for some components to work</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              Accordions
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse show"
            aria-labelledby="headingFour"
            data-bs-parent="#bootstrapAccordion"
          >
            <div className="accordion-body">
              <p>
                The accordion uses collapse internally to make it collapsible.
                To render an accordion that’s expanded, add the .open class on
                the .accordion.
              </p>
              <p>
                The first item's accordion body is shown by default, until the
                collapse plugin adds the appropriate classes that we use to
                style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the .accordion-body, though
                the transition does limit overflow.
              </p>
              <p>The rest of the item's are hidden by default.</p>
              <CopyBlock
                language="javascript"
                text={accordionCode}
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
              Buttons
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#bootstrapAccordion"
          >
            <div className="accordion-body">
              <p>
                Bootstrap includes several predefined button styles, each
                serving its own semantic purpose, with a few extras thrown in
                for more control.
              </p>
              <CopyBlock
                language="javascript"
                text={buttonCode}
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
              Cards
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#bootstrapAccordion"
          >
            <div className="accordion-body">
              <p>
                A card is a flexible and extensible content container. It
                includes options for headers and footers, a wide variety of
                content, contextual background colors, and powerful display
                options. If you’re familiar with Bootstrap 3, cards replaced old
                panels, wells, and thumbnails. Similar functionality to those
                components is available as modifier classes for cards.
              </p>
              <p>
                I've used cards to display my portfolio projects. Click{' '}
                <a href="/portfolio">here</a> to check them out!
              </p>
              <CopyBlock
                language="javascript"
                text={cardCode}
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
