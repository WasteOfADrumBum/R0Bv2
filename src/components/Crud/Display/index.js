import React from 'react'
import { connect } from 'react-redux'
import {} from '../../../actions'
import './_display.scss'

const CrudDisplay = () => {
  const CrudList = () => {
    return (
      <>
        <div className="col-md-2 text-uppercase">Doe</div>
        <div className="col-md-2">John</div>
        <div className="col-md-3">123 Main St</div>
        <div className="col-md-2">Washington</div>
        <div className="col-md-1">DC</div>
        <div className="col-md-1">20001</div>
        <div className="col-md-1">True</div>
      </>
    )
  }

  return (
    <div className="crudDisplay m-5">
      <div className="m-auto">
        {/* Table Headers */}
        <div className="row bg-info text-white py-2 rounded-top text-uppercase fw-bold">
          <div className="col-md-4">Name</div>
          <div className="col-md-7">Address</div>
          <div className="col-md-1">Answer</div>
        </div>
        {/* Mapped List */}
        <div className="row">
          <CrudList />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {})(CrudDisplay)
