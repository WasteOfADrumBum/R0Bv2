/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { connect } from 'react-redux'
import { Carousel, SaveFile } from '../../components'
import EmploymentRender from './EmploymentRender'
import EducationRender from './EducationRender'
import SkillsRender from './SkillsRender'
import './_resumeRender.scss'
import pdf from '../../assets/pdfs/resume/JMS-2022-CL&CV-A.pdf'

const ResumeRender = () => {
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
      <div className="text-end">
        <SaveFile url={pdf} label="Download CV" />
      </div>

      <h2 className="text-left resumeSectionHdr">
        <i className="fas fa-laptop-code" />
        Developer Work Experience
        <hr />
      </h2>
      <div className="my-3">
        <EmploymentRender type={'Dev'} />
      </div>
      <p className="mx-4">
        Click <a href="/portfolio">here</a> to view my portfolio of projects.
      </p>
      <h2 className="text-left resumeSectionHdr">
        <i className="fas fa-briefcase" />
        Non-Developer Work Experience
        <hr />
      </h2>
      <div className="my-3">
        <EmploymentRender type={'Exp'} />
      </div>
      <h2 className="text-left resumeSectionHdr">
        <i className="fas fa-user-graduate" />
        Education
        <hr />
      </h2>
      <div className="my-3">
        <EducationRender />
      </div>
      <h2 className="text-left resumeSectionHdr">
        <i className="fas fa-list" />
        Skills
        <hr />
      </h2>
      <div className="my-3">
        <SkillsRender />
      </div>
      <h2 className="text-left resumeSectionHdr">
        <i className="fab fa-linkedin-in" />
        Social Media
        <hr />
      </h2>
      <div className="my-3 mx-4">
        <Carousel />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {})(ResumeRender)
