/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { connect } from 'react-redux'
import moment from 'moment'
import { deleteEducation, readAllEducation } from '../../../actions'
import './_educationRender.scss'

const EducationRender = ({
  deleteEducation,
  readAllEducation,
  education: { allEducation, loading: education_loading },
}) => {
  const { user } = useAuth0()
  const { email } = user

  // Determine if EndDate is a string or date
  const endDateType = (date) => {
    if (date === 'Current') {
      return 'Current'
    } else {
      return moment(new Date(date)).format('MMMM YYYY')
    }
  }

  /* Delete Education by ID */
  const onDelete = (id) => {
    deleteEducation(id)
  }

  /* Read all Education */
  useEffect(() => {
    readAllEducation()
  }, [])

  return (
    <>
      {education_loading ? (
        <p>Loading...</p>
      ) : (
        <div className="educationRender ms-4 me-4">
          {allEducation &&
            allEducation.length > 0 &&
            allEducation
              .map((education, i) => {
                return (
                  <div
                    key={`${education} + ${i}`}
                    className={`education pb-3 mb-3 education-${i}`}
                  >
                    {education.school && (
                      <div className="school">{education.school}</div>
                    )}
                    {(education.degree || education.fieldOfStudy) && (
                      <div>
                        {education.degree && (
                          <span className="degree">{education.degree}</span>
                        )}
                        {education.degree && education.fieldOfStudy && (
                          <> &#183; </>
                        )}
                        {education.fieldOfStudy && (
                          <span className="fieldOfStudy">
                            {education.fieldOfStudy}
                          </span>
                        )}
                      </div>
                    )}
                    {(education.startDate || education.endDate) && (
                      <div>
                        {education.startDate && (
                          <span className="startDate">
                            {moment(education.startDate).format('MMMM YYYY')}
                          </span>
                        )}
                        <> - </>
                        {education.endDate ? (
                          <span className="endDate">
                            {endDateType(education.endDate)}
                          </span>
                        ) : (
                          <span className="startDate">Current</span>
                        )}
                      </div>
                    )}
                    {education.description && (
                      <div className="description">{education.description}</div>
                    )}
                    {email && email === 'jmsmall89@gmail.com' && (
                      <div className="authBtns my-2">
                        <a href={`/education/${education._id}/update`}>
                          <i className="far fa-edit" type="button" />
                        </a>
                        <i
                          className="far fa-trash-alt"
                          onClick={() => onDelete(education._id)}
                        />
                      </div>
                    )}
                  </div>
                )
              })
              .sort((education) => education.endDate)
              .reverse()}
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  resumeEducationReducer: state.resumeEducationReducer,
  education: state.education,
})

export default connect(mapStateToProps, {
  deleteEducation,
  readAllEducation,
})(EducationRender)
