/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  TextField,
  SelectListOption,
  ToggleSwitch,
  Loading,
} from '../../../components'
import { updateCrud, readCrud } from '../../../actions'
import { USAStates } from '../../../utils'
import './_update.scss'

const UpdateCrud = ({
  history,
  match,
  updateCrud,
  readCrud,
  crud: { loading: crud_loading, crud },
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    usaStreet: '',
    usaCity: '',
    usaState: '',
    usaZip: '',
    question: false,
  })

  // Get ID from URL
  const id = match.params.id

  useEffect(() => {
    // Find Employment by ID
    readCrud(id)
  }, [])

  // Set formData if it exisits
  useEffect(() => {
    if (crud_loading && crud !== null) {
      setFormData({
        usaCity: !crud.address.usaCity ? '' : crud.address.usaCity,
        usaState: !crud.address.usaState ? '' : crud.address.usaState,
        usaStreet: !crud.address.usaStreet ? '' : crud.address.usaStreet,
        usaZip: !crud.address.usaZip ? '' : crud.address.usaZip,
        firstName: !crud.name.firstName ? '' : crud.name.firstName,
        lastName: !crud.name.lastName ? '' : crud.name.lastName,
        question: !crud.question ? false : crud.question,
      })
    }
  }, [crud_loading])

  const {
    firstName,
    lastName,
    usaStreet,
    usaCity,
    usaState,
    usaZip,
    question,
  } = formData

  // Captures changes made to the form data
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onToggle = (question) => {
    setFormData({ ...formData, question: question })
  }

  const onUpdate = (e) => {
    e.preventDefault()

    // Trim white space off input's
    let trimFormData = {
      ...formData,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      usaStreet: usaStreet.trim(),
      usaCity: usaCity.trim(),
      usaState: usaState,
      usaZip: usaZip,
      question: question,
    }

    // send trimmed formData to the API
    updateCrud(id, trimFormData)

    // clear formData
    setFormData({
      firstName: '',
      lastName: '',
      usaStreet: '',
      usaCity: '',
      usaState: '',
      usaZip: '',
      question: false,
    })

    // Redirect to CV
    history.push('/crud')
  }

  return (
    <div className="crudUpdate m-5">
      {!crud_loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="text-center my-5">CMS: Content Management System</h2>
          <p className="text-center fst-italic">
            <i className="bi bi-exclamation-circle text-warning pe-1" />
            Information entered into this demo example is available to anyone
            logged into this application. Please refrain from putting in your
            personal information.
          </p>
          <div className="m-auto">
            <form noValidate onSubmit={(e) => onUpdate(e)}>
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
                    name="usaStreet"
                    value={usaStreet}
                    onChange={(e) => onChange(e)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <TextField
                    placeholder="City"
                    name="usaCity"
                    value={usaCity}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="col-md-2">
                  <SelectListOption
                    placeholder="State"
                    name="usaState"
                    value={usaState && { label: usaState, value: usaState }}
                    onChange={(e) => onChange(e)}
                    options={USAStates}
                  />
                </div>
                <div className="col-md-4">
                  <TextField
                    placeholder="Zip"
                    name="usaZip"
                    value={usaZip}
                    onChange={(e) => onChange(e)}
                  />
                </div>
              </div>
              <div className="row pt-2">
                <div className="col-md-10">
                  <span className="badge bg-light text-dark border border-2 border-dark rounded-1 py-2 w-100 text-start fs-6 fw-normal">
                    The unicorn is the national animal of Scotland:
                  </span>
                </div>
                <div className="col-md-2 text-center">
                  <ToggleSwitch
                    id="question"
                    checked={question}
                    onChange={onToggle}
                    name="question"
                    optionLabels={['True', 'False']}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary my-2">
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  crud: state.crud,
})

export default connect(mapStateToProps, {
  updateCrud,
  readCrud,
})(UpdateCrud)
