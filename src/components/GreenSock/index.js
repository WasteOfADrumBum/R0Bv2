/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import {} from '../../components'
import Demo1 from './Demo1'
import Demo2 from './Demo2'
import ScrollTriggerComponent from './ScrollTrigger'
import './_greenSock.scss'

const GreenSock = () => {
  return (
    <div className="greenSock my-5">
      <div className="row align-items-center">
        <div className="col-md-4">
          <h2 className="text-center d-grid mb-5 greenSockHdr ">
            <img
              src="./assets/images/greensock-logo.png"
              alt="GreenSock Logo"
              className="greenSockLogo"
            />
            <div className="greenSockHdr">
              Green<span className="greenSockGreen">Sock</span>
            </div>
            <div className="greenSockSubHdr fs-6">Engaging the Internet</div>
          </h2>
        </div>
        <div className="col-md-4">
          <div className="installGSAP my-2 d-grid">
            <hr className="greenSockGreen" />
            <i className="text-center">
              We can use NPM to install GSAP. For this page I've chosen to just
              install GSAP without the bonus plugins{' '}
            </i>
            <code className="installNPM text-left p-2 m-auto text-white bg-dark rounded">
              npm install gsap
              <span className="blinkingText">|</span>
            </code>
            <hr className="greenSockGreen" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="greenSockIntro my-2">
            <b>The standard for modern web animation</b> is{' '}
            <b>
              Green
              <span className="greenSockGreen">Sock</span>
            </b>{' '}
            a robust JavaScript toolset that turns developers into animation
            superheros. GSAP obesess about performance, compatibility, and
            support so that the developer doesn't have to. Desgined to be
            compatible with HTML, SVG, React.js, jQuery, CSS, modern borwsers
            and mobile devices it's my frist choice for complex animations.
          </div>
        </div>
      </div>

      {/* Demo 2 */}
      <Demo2 />
      {/* Demo 1 */}
      <Demo1 />
      {/* ScrollTrigger */}
      <ScrollTriggerComponent />
      <div className="comingSoon text-uppercase text-center text-info">
        <i className="bi bi-info-circle-fill mx-1" />
        More Animations Coming Soon
      </div>
    </div>
  )
}

export default GreenSock
