import React from 'react'
import './_cardDeck.scss'

const CardDeck = () => {
  return (
    <div className="component cardDeck">
      {/* Banner */}
      <div className="row justify-content-md-center section1">
        <div className="col m-auto pb-2 text-center" m="auto">
          <h2 className="my-5 text-center">
            This Applications Promenant Front End Dependencies
          </h2>
        </div>
      </div>

      <div className="cards mb-5">
        {/* React */}
        <div className="card reactCard text-center m-2">
          <img
            src="/assets/images/react-logo.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">React.js</h5>
            <p className="card-text">
              A component-based JavaScript library for building user interfaces
            </p>
            <p className="card-text code text-left p-2">
              npm install react-bootstrap bootstrap
              <span className="blinking-text">|</span>
            </p>
            <button
              type="button"
              className="btn btn-outline-info btn-small"
              href="https://reactjs.org/"
            >
              React.js
            </button>
          </div>
        </div>
        {/* Auth0 */}
        <div className="card auth0Card text-center m-2">
          <img
            src="/assets/images/auth0-logo.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Auth0</h5>
            <p className="card-text">
              Authentication and authorization platform
            </p>
            <p className="card-text code text-left p-2">
              npm install --save auth0-js react-router react-router-dom
              <span className="blinking-text">|</span>
            </p>
            <button
              type="button"
              className="btn btn-outline-info btn-small align-bottom align-text-bottom"
              href="https://auth0.com/"
            >
              Auth0
            </button>
          </div>
        </div>
        {/* Bootstrap */}
        <div className="card bootstrapCard text-center m-2">
          <img
            src="/assets/images/bootstrap-logo.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Bootstrap</h5>
            <p className="card-text">
              The most popular CSS Framework for developing responsive and
              mobile-first websites
            </p>
            <p className="card-text code text-left p-2">
              npm install react-bootstrap bootstrap
              <span className="blinking-text">|</span>
            </p>
            <button
              type="button"
              className="btn btn-outline-info btn-small"
              href="https://getbootstrap.com/"
            >
              Bootstrap
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDeck
