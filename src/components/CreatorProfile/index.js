import React from 'react'
import { Carousel, CountTimer } from '../../components'
import './_creatorProfile.scss'

const CreatorProfile = () => {
  return (
    <>
      <div className="mt-4 creatorProfile">
        <div className="profileContainer px-4">
          <div className="d-grid spherenado">
            <div className="profileImg">
              <div className="metal">
                <dir className="clipCircle">
                  <div className="cubeWrapper">
                    <div className="cube-2">
                      <div className="cube">
                        <div id="face1" className="face"></div>
                        <div id="face2" className="face"></div>
                        <div id="face3" className="face"></div>
                        <div id="face4" className="face"></div>
                        <div id="face5" className="face"></div>
                        <div id="face6" className="face"></div>
                        <div id="face7" className="face"></div>
                        <div id="face8" className="face"></div>
                      </div>
                    </div>
                  </div>
                </dir>
                <div className="circle reflection lighting"></div>
              </div>
            </div>
            <div id="circleContainer">
              <div className="circl-1"></div>
              <div className="circle-2"></div>
              <div className="circle-3"></div>
              <div className="circle-4"></div>
              <div className="circle-5"></div>
              <div className="circle-6"></div>
              <div className="circle-7"></div>
              <div className="circle-8"></div>
              <div className="circle-9"></div>
              <div className="circle-10"></div>
              <div className="circle-11"></div>
            </div>
          </div>

          <div className="profileDesc text-left pt-4">
            <div className="profileTitle">
              <h2 className="text-uppercase mb-1">Joshua M. Small</h2>
              <h4 className="text-uppercase mb-1">Full-Stack Web Developer</h4>
            </div>
            <div className="profileContact mb-1">
              <a href="mailto:jmsmall89@gmail.com?subject='Personal Project'">
                <i className="fas fa-envelope" />
              </a>
              <a href="tel:8283338983">
                <i className="fas fa-mobile-alt" />
              </a>
            </div>
            <p className="profileBio">
              Creative Full Stack Web Developer leveraging business and artistic
              background to build a more intuitive user experience on the web.
              Dedicated to the construction and optimizing the performance
              designs for high impact websites. Recently earned a certificate in
              Full Stack Web Development from The University of North Carolina
              at Chapel Hill. Newly equipped with a diverse and promising set of
              skills in CSS, JavaScript, React.js, and responsive web design.
              Adept in leveraging technical, analytical, and problem-solving
              skills to create dynamic high-speed competitive website advantages
              in fast-paced remote environments. I’ve worked independently and
              with teams of other developers to create a diverse portfolio that
              targets engagement with audiences for impactful user experiences
              using UX/UI. Continuously pursuing personal development and growth
              through practice, education, and experiences. I’m excited to
              leverage my skills as part of a fast-paced, quality-driven team to
              build better experiences on the web.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col my-5">
            <Carousel />
          </div>
        </div>
        <div className="row">
          <div className="col text-center mb-5">
            <b>I've been leveling up my coding skills for:</b>
            <CountTimer />
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatorProfile
