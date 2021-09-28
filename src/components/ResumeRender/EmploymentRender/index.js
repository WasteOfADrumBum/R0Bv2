/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { connect } from 'react-redux'
import { deleteEmployment, readAllEmployment } from '../../../actions'
import './_employmentRender.scss'

const EmploymentRender = ({
  type,
  deleteEmployment,
  readAllEmployment,
  employment: { allEmployment, loading: employment_loading },
}) => {
  const [filteredData, setFilteredData] = useState([])
  const { user } = useAuth0()
  const { email } = user

  // Filter experience type Dev/Exp
  const filterType = (type) => {
    let filtered = []

    switch (type) {
      case 'Dev':
        filtered = allEmployment.filter(
          (employment) => employment.expType === 'Dev',
        )
        break
      case 'Exp':
        filtered = allEmployment.filter(
          (employment) => employment.expType === 'Exp',
        )
        break
      default:
        filtered = []
    }
    setFilteredData(filtered)
  }

  const onDelete = (id) => {
    deleteEmployment(id)
  }

  useEffect(() => {
    readAllEmployment()
  }, [])

  useEffect(() => {
    if (allEmployment.length > 0) {
      filterType(type)
    }
  }, [employment_loading])

  return (
    <>
      {!employment_loading ? (
        <p>Loading...</p>
      ) : (
        <div className="employmentRender ms-4 me-4">
          {allEmployment &&
            allEmployment.length > 0 &&
            filteredData.map((employment, i) => {
              return (
                <div
                  key={`${employment} + ${i}`}
                  className={`employment pb-2 mb-2 employment-${i}`}
                >
                  {employment.title && (
                    <div className="title">{employment.title}</div>
                  )}
                  {(employment.company || employment.employmentType) && (
                    <div>
                      {employment.company && (
                        <span className="company">{employment.company}</span>
                      )}
                      {employment.company && employment.employmentType && (
                        <> &#183; </>
                      )}
                      {employment.employmentType && (
                        <span className="employmentType">
                          {employment.employmentType}
                        </span>
                      )}
                    </div>
                  )}
                  {(employment.startDate || employment.endDate) && (
                    <div>
                      {employment.startDate && (
                        <span className="startDate">
                          {employment.startDate}
                        </span>
                      )}
                      {employment.startDate && employment.endDate && <> - </>}
                      {employment.endDate ? (
                        <span className="endDate">{employment.endDate}</span>
                      ) : (
                        <span className="startDate">Current</span>
                      )}
                    </div>
                  )}
                  {(employment.locationCity || employment.locationState) && (
                    <div>
                      {employment.locationCity && (
                        <span className="locationCity">
                          {employment.locationCity}
                        </span>
                      )}
                      {employment.locationCity && employment.locationState && (
                        <>, </>
                      )}
                      {employment.locationState && (
                        <span className="locationState">
                          {employment.locationState}
                        </span>
                      )}
                    </div>
                  )}
                  {employment.description && (
                    <div className="description">{employment.description}</div>
                  )}
                  {email && email === 'jmsmall89@gmail.com' && (
                    <div className="authBtns my-2">
                      <a href={`/employment/${employment._id}/update`}>
                        <i className="far fa-edit" type="button" />
                      </a>
                      <i
                        className="far fa-trash-alt"
                        onClick={() => onDelete(employment._id)}
                      />
                    </div>
                  )}
                </div>
              )
            })}
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  resumeEmploymentReducer: state.resumeEmploymentReducer,
  employment: state.employment,
})

export default connect(mapStateToProps, {
  deleteEmployment,
  readAllEmployment,
})(EmploymentRender)
