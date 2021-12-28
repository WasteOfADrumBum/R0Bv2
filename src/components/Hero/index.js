import React from 'react'
import './_hero.scss'

const Hero = () => (
  <div className="hero">
    <div className="heroHdr m-0 m-auto mb-2 text-center text-uppercase">
      {/* ⇜ */}
      &#8668;
      <span>R</span>
      {/* ⥽ */}
      &#10621;
      <span>0</span>
      {/* ⥼ */}
      &#10620;
      <span>B</span>
      {/* ⇝ */}
      &#8669;
    </div>
    <div className="text-center mb-5">
      <i>
        This is a simple application designed to create a template for testing
        various languages compatibilities.
      </i>
    </div>
  </div>
)

export default Hero
