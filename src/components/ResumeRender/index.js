/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Carousel } from '../../components'
import { readAllEmployment } from '../../actions'
import EmploymentRender from './EmploymentRender'
import './_resumeRender.scss'

const ResumeRender = ({
  readAllEmployment,
  employment: { loading, allEmployment },
}) => {
  useEffect(() => {
    readAllEmployment()
  }, [])

  return (
    <div className="resumeRender">
      <h2>Joshua M. Small</h2>
      <p>828.333.8983 | JMSmall89@gmail.com | Zebulon N.C.</p>
      <p>
        Full Stack Web Developer leveraging a background in art and business to
        build a more intuitive user experience on the web. Known as a
        self-motivated and innovative problem-solver passionate about developing
        UI designs with UX aesthetics, with a focus on user-friendly
        mobile-first design and development. Excelling in organization,
        creativity, and teamwork.
      </p>
      <h2 className="text-left resumeSectionHdr">
        <i className="fas fa-user-graduate" />
        Education
        <hr />
      </h2>
      <div className="my-3"></div>
      <h2 className="text-left resumeSectionHdr">
        <i className="fas fa-laptop-code" />
        Developer Work Experience
        <hr />
      </h2>
      <EmploymentRender type={'Dev'} allEmployment={allEmployment} />
      <div className="my-3"></div>
      <h2 className="text-left resumeSectionHdr">
        <i className="fas fa-briefcase" />
        Expeloper Work Experience
        <hr />
      </h2>
      <EmploymentRender type={'Exp'} allEmployment={allEmployment} />
      <div className="my-3"></div>
      <h2 className="text-left resumeSectionHdr">
        <i className="fas fa-list" />
        Skills
        <hr />
      </h2>
      <div className="my-3"></div>
      <h2 className="text-left resumeSectionHdr">
        <i className="fab fa-linkedin-in" />
        Social Media
        <hr />
      </h2>
      <div className="my-3">
        <Carousel />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  resumeEmploymentReducer: state.resumeEmploymentReducer,
  employment: state.employment,
})

export default connect(mapStateToProps, { readAllEmployment })(ResumeRender)
