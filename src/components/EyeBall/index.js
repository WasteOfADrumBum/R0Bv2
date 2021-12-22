import React from 'react'
import './_eyeBall.scss'

const EyeBall = () => {
  return (
    <div className="eyeBall">
      <div className="eyeBallWrap">
        <section className="stage">
          <figure className="ball">
            <span className="shadow"></span>
            <span className="iris"></span>
          </figure>
        </section>
      </div>
    </div>
  )
}

export default EyeBall
