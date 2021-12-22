import React from 'react'
import { EyeBall } from '../../components'
import './_keyFrames.scss'

const KeyFrames = () => {
  return (
    <div className="keyFrames">
      <div className="row">
        <div className="col-md-6 align-self-center justify-content-center mb-5 pb-5">
          <div className="keyFramesShapes d-grid justify-content-center">
            <div className="squareShape" />
            <div className="squareRoundedContainer">
              <div className="squareRounded rounded-3" />
              <div className="squareRounded rounded-3" />
              <div className="squareRounded rounded-3" />
              <div className="squareRounded rounded-3" />
              <div className="squareRounded rounded-3" />
              <div className="squareRounded rounded-3" />
              <div className="squareRounded rounded-3" />
              <div className="squareRounded rounded-3" />
              <div className="squareRounded rounded-3" />
              <div className="squareRounded rounded-3" />
            </div>
            <div className="circleShape rounded-circle" />
          </div>
          <div className="keyFramesTitle">
            <h1 className="kf --debug">
              <span className="kf__row">
                <span className="kf__text text-uppercase">Keyframes</span>
              </span>
              <span className="kf__row kf__row--sibling" aria-hidden="true">
                <span className="kf__text text-uppercase">Keyframes</span>
              </span>
              <span className="kf__row kf__row--sibling" aria-hidden="true">
                <span className="kf__text text-uppercase">Keyframes</span>
              </span>
              <span className="kf__row kf__row--sibling" aria-hidden="true">
                <span className="kf__text text-uppercase">Keyframes</span>
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-grid eyeBalls">
            <EyeBall />
            <EyeBall />
          </div>
        </div>
      </div>
      <div className="keyFramesDesc my-3 py-3 d-flex justify-content-center">
        <div className="d-flex flex-column w-50">
          <h3>@keyframes</h3>{' '}
          <p>
            The @keyframes CSS at-rule controls the intermediate steps in a CSS
            animation sequence by defining styles for keyframes (or waypoints)
            along the animation sequence. This gives more control over the
            intermediate steps of the animation sequence than transitions.
          </p>
          <i>@MDN Web Docs moz://a</i>
        </div>
      </div>
    </div>
  )
}

export default KeyFrames
