/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import { deletePortfolio, readPortfolio } from '../../../actions'
import './_portfolioCards.scss'

const PortfolioCards = ({
  deletePortfolio,
  readPortfolio,
  portfolio: { portfolio, loading: portfolio_loading },
}) => {
  const [sortedData, setSortedData] = useState([])
  let sortedProjects = []

  // load Redux
  useEffect(() => {
    readPortfolio()
  }, [])

  useEffect(() => {
    if (portfolio && portfolio.length > 0) {
      sortedPortfolio()
    }
  }, [portfolio_loading, portfolio])

  // Sort by most recent Start Date
  const sortedPortfolio = () => {
    sortedProjects = portfolio
      .sort(function (a, b) {
        var c = new Date(a.startDate)
        var d = new Date(b.startDate)
        return c - d
      })
      .reverse()
    setSortedData(sortedProjects)
  }

  // Card Render
  const Card = () => {
    return (
      <>
        {sortedData.map((project, i) => {
          return (
            <div className="card" key={`${project} + ${i}`}>
              <div className="imgWrapper">
                {project.imgSrc ? (
                  <img
                    src={`assets/images/portfolio/${project.imgSrc}`}
                    className="card-img-top"
                    alt="project_image"
                  />
                ) : (
                  <img
                    src="https://via.placeholder.com/300x169"
                    className="card-img-top"
                    alt="placeholder"
                  />
                )}
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  {project.title ? <>{project.title}</> : <>Untitled Project</>}
                </h5>
                <i className="card-text">
                  {(project.startDate || project.endDate) && (
                    <div>
                      {project.startDate && (
                        <span className="startDate">
                          {moment(project.startDate).format('MMMM YYYY')}
                        </span>
                      )}
                      <> - </>
                      {project.endDate ? (
                        <span className="endDate">
                          {moment(project.endDate).format('MMMM YYYY')}
                        </span>
                      ) : (
                        <span className="startDate">Current</span>
                      )}
                    </div>
                  )}
                </i>
                <h6 className="card-subtitle mb-2 text-muted">
                  {project.position && <>{project.position}</>}
                </h6>
                <hr />
                <p className="card-text">
                  {project.description && <>{project.description}</>}
                </p>
                {project.linkUrl && (
                  <a
                    href={`https://${project.linkUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-primary btn-sm my-3"
                  >
                    View
                  </a>
                )}
              </div>
              <div className="card-footer text-muted">
                {project.skills && (
                  <>
                    <b>Skills:</b> {project.skills}
                  </>
                )}
              </div>
            </div>
          )
        })}
      </>
    )
  }

  /* const onDelete = (id) => {
    deletePortfolio(id)
  } */

  return (
    <>
      {!portfolio_loading ? (
        <p>Loading...</p>
      ) : (
        <div className="portfolioCards">
          {portfolio && portfolio.length > 0 && <Card />}
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  portfolioReducer: state.portfolioReducer,
  portfolio: state.portfolio,
})

export default connect(mapStateToProps, {
  deletePortfolio,
  readPortfolio,
})(withRouter(PortfolioCards))
