import React from 'react'
import { Carousel, CountTimer } from '../../components'
import './_creatorProfile.scss'

const CreatorProfile = () => {
  return (
    <>
      <div className="mt-4 creatorProfile">
        <div className="profileContainer px-4">
          <div className="profileImg m-auto">
            <img
              src="/assets/images/profile-picture-2.png"
              className="img-fluid rounded-circle"
              alt="..."
            />
          </div>
          <div className="profileDesc text-left pt-4">
            <div className="profileTitle">
              <h3>Joshua M. Small</h3>
              <h5>Full-Stack Web Developer</h5>
            </div>
            <div className="profileContact">
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
