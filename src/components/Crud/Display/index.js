/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { readAllCrud, deleteCrud } from '../../../actions'
import './_display.scss'

const CrudDisplay = ({
  readAllCrud,
  deleteCrud,
  crud: { allCrud, loading: crud_loading },
}) => {
  /* Load all entries */
  useEffect(() => {
    readAllCrud()
  }, [])

  /* Delete an entry by ID */
  const onDelete = (id) => {
    deleteCrud(id)
  }

  /* Refresh List */
  const onRefresh = () => {
    readAllCrud()
  }

  /* Map Through Array */
  const CrudList = () => {
    return (
      <>
        {allCrud &&
          allCrud.length > 0 &&
          allCrud.map((crud, i) => {
            return (
              <div
                key={`${crud} + ${i}`}
                className={`row crudEntry py-2 crud-${i}`}
              >
                <div className="col-md-3">
                  {crud.name.lastName && (
                    <span className="text-uppercase">{crud.name.lastName}</span>
                  )}
                  {crud.name.lastName && crud.name.firstName && <span>, </span>}
                  {crud.name.firstName && <>{crud.name.firstName}</>}
                </div>
                <div className="col-md-3">
                  {crud.address.usaStreet && <>{crud.address.usaStreet}</>}
                </div>
                <div className="col-md-2">
                  {crud.address.usaCity && <>{crud.address.usaCity}</>}
                </div>
                <div className="col-md-1">
                  {crud.address.usaState && <>{crud.address.usaState}</>}
                </div>
                <div className="col-md-1">
                  {crud.address.usaZip && <>{crud.address.usaZip}</>}
                </div>
                {/* If True, Text Success [Check] -> Else, Text Danger [x] */}
                <div className="col-md-1 mdBreakpoint">
                  {crud.question && crud.question === true ? (
                    <>
                      <i
                        className="bi bi-check-circle-fill text-success"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#trueModal"
                      />

                      <div
                        className="modal fade"
                        id="trueModal"
                        tabIndex="-1"
                        aria-labelledby="trueModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title text-success text-uppercase"
                                id="trueModalLabel"
                              >
                                Correct
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <p className="fs-5">
                                The Unicorn is the national animal of Scotland
                              </p>
                              <p>
                                <a
                                  className="text-info"
                                  href="https://www.visitscotland.com/about/uniquely-scottish/national-animal-unicorn/#:~:text=Why%20is%20the%20unicorn%20Scotland's,chosen%20as%20Scotland's%20national%20animal."
                                  alt="VisitScotland.com"
                                >
                                  Scotland's National Animal - The Unicorn |
                                  VisitScotland
                                </a>
                              </p>
                              <p>
                                <b className="text-uppercase">Answered</b>:{' '}
                                {crud.createdAt
                                  ? moment(crud.createdAt).format('LL')
                                  : 'No Record'}
                              </p>
                              <p>
                                <b className="text-uppercase">
                                  Record Last Updated
                                </b>
                                :{' '}
                                {crud.updatedAt
                                  ? moment(crud.updatedAt).format('lll')
                                  : 'No Record'}
                              </p>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <i
                        className="bi bi-x-circle-fill text-danger"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#falseModal"
                      />

                      <div
                        className="modal fade"
                        id="falseModal"
                        tabIndex="-1"
                        aria-labelledby="falseModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title text-danger text-uppercase"
                                id="falseModalLabel"
                              >
                                Incorrect
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <p className="fs-5">
                                The Unicorn <b>is</b> the national animal of
                                Scotland
                              </p>
                              <p>
                                <a
                                  className="text-info"
                                  href="https://www.visitscotland.com/about/uniquely-scottish/national-animal-unicorn/#:~:text=Why%20is%20the%20unicorn%20Scotland's,chosen%20as%20Scotland's%20national%20animal."
                                  alt="VisitScotland.com"
                                >
                                  Scotland's National Animal - The Unicorn |
                                  VisitScotland
                                </a>
                              </p>
                              <p>
                                <b className="text-uppercase">Answered</b>:{' '}
                                {crud.createdAt
                                  ? moment(crud.createdAt).format('LL')
                                  : 'No Record'}
                              </p>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="col-md-1 mdBreakpoint">
                  <a href={`/crud-update/${crud._id}/update`}>
                    <i
                      type="button"
                      className="bi bi-pencil-square text-secondary me-2"
                    />
                  </a>
                  <i
                    type="button"
                    className="bi bi-trash-fill text-danger"
                    onClick={() => onDelete(crud._id)}
                  />
                </div>
              </div>
            )
          })}
      </>
    )
  }

  return (
    <div className="crudDisplay m-5">
      <div className="row my-2">
        <div className="col-md-12 text-end">
          <span>
            <i
              className="bi bi-info-circle-fill text-info me-1"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#infoModal"
            />
            <div
              className="modal fade"
              id="infoModal"
              tabIndex="-1"
              aria-labelledby="infoModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title text-info text-uppercase"
                      id="infoModalLabel"
                    >
                      <i className="bi bi-info-circle-fill text-info me-1" />
                      Info
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p className="fs-5 text-start">
                      Reducers can be used to reset the Redux state and refresh
                      the data on the list below. I've disabled the list's
                      abilty to refresh the ruedux state after creating a new
                      entry and added a{' '}
                      <i className="bi bi-arrow-clockwise text-info mx-1">
                        REFRESH
                      </i>{' '}
                      button as an extra feature.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            After adding a new enrty, refresh the list to see the results.
          </span>
          <button
            type="button"
            className="btn btn-sm btn-outline-info mx-2"
            onClick={() => onRefresh()}
          >
            <i className="bi bi-arrow-clockwise" />
          </button>
        </div>
      </div>
      <div className="m-auto">
        {/* Table Headers */}
        <div className="row bg-info text-white py-2 rounded-top text-uppercase fw-bold">
          <div className="col-md-3">Name</div>
          <div className="col-md-7">Address</div>
          <div className="col-md-1">Answer</div>
          <div className="col-md-1"></div>
        </div>
        {/* Mapped List */}
        {!crud_loading ? <p>Loading...</p> : <CrudList />}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  crudReducer: state.crudReducer,
  crud: state.crud,
})

export default connect(mapStateToProps, {
  readAllCrud,
  deleteCrud,
})(CrudDisplay)
