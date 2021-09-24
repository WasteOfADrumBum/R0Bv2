/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './_employmentRender.scss'

const EmploymentRender = ({ type, allEmployment }) => {
  const [filteredData, setFilteredData] = useState([])

  // Filter experience type Dev/Exp
  const filterType = (type) => {
    let filtered = []

    switch (type) {
      case 'Dev':
        filtered = allEmployment.filter((employment) =>
          employment.expType.includes('Dev'),
        )
        break
      case 'Exp':
        filtered = allEmployment.filter((employment) =>
          employment.expType.includes('Exp'),
        )
        break
      default:
        filtered = []
    }
    setFilteredData(filtered)
  }

  useEffect(() => {
    if (allEmployment.length > 0) {
      filterType(type)
    }
  }, [])

  return (
    <div className="employmentRender ms-4 me-4">
      {allEmployment &&
        allEmployment.length > 0 &&
        filteredData.map((employment, i) => {
          return (
            <div key={i} className={`employment pb-2 mb-2 employment-${i}`}>
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
                    <span className="startDate">{employment.startDate}</span>
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
            </div>
          )
        })}
    </div>
  )
}

export default EmploymentRender
