import React, { useState } from 'react'
import { connect } from 'react-redux'
import { TextField, SelectListOption, ToggleSwitch } from '../../../components'
import {} from '../../../actions'
import { USAStates } from '../../../utils'

const CrudInput = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    question: false,
  })

  const { firstName, lastName, street, city, state, zip, question } = formData

  // Captures changes made to the form data
  const onChange = (e) => {
    // Trim white space off input's
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() })
  }

  const onToggle = (question) => {
    setFormData({ ...formData, question: question })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    // send trimmed formData to the API
    console.log('onSubmit(formData)', formData)
    //createCrud(formData)

    // clear formData
    setFormData({
      firstName: '',
      lastName: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      question: false,
    })
  }

  return (
    <div className="crudInput m-5">
      <h2 className="text-center my-5">CMS: Content Management System</h2>
      <p>Disclaimer</p>
      <div className="m-auto">
        <form noValidate onSubmit={(e) => onSubmit(e)}>
          {/* Name */}
          <div className="row">
            <div className="col-md-6">
              <TextField
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="col-md-6">
              <TextField
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          {/* Address */}
          <div className="row">
            <div className="col-md-12">
              <TextField
                placeholder="Street"
                name="street"
                value={street}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <TextField
                placeholder="City"
                name="city"
                value={city}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="col-md-2">
              <SelectListOption
                placeholder="State"
                name="state"
                value={state && { label: state, value: state }}
                onChange={(e) => onChange(e)}
                options={USAStates}
              />
            </div>
            <div className="col-md-4">
              <TextField
                placeholder="Zip"
                name="zip"
                value={zip}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-10">
              The unicorn is the national animal of Scotland:
            </div>
            <div className="col-md-2 text-end">
              <ToggleSwitch
                id="question"
                checked={question}
                onChange={onToggle}
                name="question"
                optionLabels={['True', 'False']}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {})(CrudInput)
