import React from 'react'
import './_eyeBall.scss'

const EyeBall = () => {
  return (
    <div className="eyeBall">
      <div className="eyeBallWrap">
        <section class="stage">
          <figure class="ball">
            <span class="shadow"></span>
            <span class="iris"></span>
          </figure>
        </section>
      </div>
    </div>
  )
}

export default EyeBall
