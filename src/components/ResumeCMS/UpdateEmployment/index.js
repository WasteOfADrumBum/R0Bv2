/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { TextField, TextArea, SelectListOption } from '../../../components'
import { updateEmployment, readEmployment } from '../../../actions'
import { USAStates } from '../../../utils'
import './_updateEmployment.scss'

const UpdateEmployment = ({
  id,
  updateEmployment,
  readEmployment,
  employment: { loading, employment },
}) => {
  const [formData, setFormData] = useState({
    title: '',
    employmentType: '',
    company: '',
    locationCity: '',
    locationState: '',
    startDate: '',
    endDate: '',
    description: '',
    expType: '',
  })

  useEffect(() => {
    readEmployment(id)
  }, [])

  // Set formData if it exisits
  useEffect(() => {
    if (!loading && employment !== null) {
      console.log('id:         ', id)
      console.log('employment: ', employment.title)
      console.log('formData    ', formData.title)
      setFormData({
        title: loading || !employment.title ? '' : employment.title,
        employmentType:
          loading || !employment.employmentType
            ? ''
            : employment.employmentType,
        company: loading || !employment.company ? '' : employment.company,
        locationCity:
          loading || !employment.locationCity ? '' : employment.locationCity,
        locationState:
          loading || !employment.locationState ? '' : employment.locationState,
        startDate: loading || !employment.startDate ? '' : employment.startDate,
        endDate:
          loading || !employment.endDate ? 'Current' : employment.endDate,
        description:
          loading || !employment.description ? '' : employment.description,
        expType: loading || !employment.expType ? '' : employment.expType,
      })
    }
  }, [loading, employment])

  const {
    title,
    employmentType,
    company,
    locationCity,
    locationState,
    startDate,
    endDate,
    description,
    expType,
  } = formData

  const employmentTypeOptions = [
    { label: '', value: '' },
    { label: 'Full-time', value: 'Full-time' },
    { label: 'Part-time', value: 'Part-time' },
    { label: 'Self-employeed', value: 'Self-employeed' },
    { label: 'Freelance', value: 'Freelance' },
    { label: 'Contract', value: 'Contract' },
    { label: 'Internship', value: 'Internship' },
    { label: 'Apprenticeship', value: 'Apprenticeship' },
    { label: 'Seasonal', value: 'Seasonal' },
  ]

  const expTypeOptions = [
    { label: '', value: '' },
    { label: 'Dev', value: 'Dev' },
    { label: 'Exp', value: 'Exp' },
  ]

  // Captures changes made to the form data
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onUpdate = (e) => {
    e.preventDefault()

    // Trim white space off input's
    let trimFormData = {
      ...formData,
      title: title.trim(),
      employmentType: employmentType,
      company: company.trim(),
      locationCity: locationCity.trim(),
      locationState: locationState,
      startDate: startDate.trim(),
      endDate: endDate.trim(),
      description: description.trim(),
      expType: expType,
    }

    // send trimmed formData to the API
    console.log(trimFormData)
    updateEmployment(id, trimFormData)

    // clear formData
    setFormData({
      title: '',
      employmentType: '',
      company: '',
      locationCity: '',
      locationState: '',
      startDate: '',
      endDate: '',
      description: '',
      expType: '',
    })
  }

  return (
    <div className="updateEmployment">
      {/* Button trigger modal */}
      <i
        className="far fa-edit"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        type="button"
      />
      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Edit Employment
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <form noValidate onSubmit={(e) => onUpdate(e)}>
                  <TextField
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={(e) => onChange(e)}
                  />
                  <SelectListOption
                    placeholder="Employment Type"
                    name="employmentType"
                    value={
                      employmentType && {
                        label: employmentType,
                        value: employmentType,
                      }
                    }
                    onChange={(e) => onChange(e)}
                    options={employmentTypeOptions}
                  />
                  <TextField
                    placeholder="Company"
                    name="company"
                    value={company}
                    onChange={(e) => onChange(e)}
                  />
                  <TextField
                    placeholder="City"
                    name="locationCity"
                    value={locationCity}
                    onChange={(e) => onChange(e)}
                  />
                  <SelectListOption
                    placeholder="State"
                    name="locationState"
                    value={
                      locationState && {
                        label: locationState,
                        value: locationState,
                      }
                    }
                    onChange={(e) => onChange(e)}
                    options={USAStates}
                  />
                  <TextField
                    placeholder="Start Date"
                    name="startDate"
                    value={startDate}
                    onChange={(e) => onChange(e)}
                  />
                  <TextField
                    placeholder="End Date"
                    name="endDate"
                    value={endDate}
                    onChange={(e) => onChange(e)}
                  />
                  <TextArea
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange={(e) => onChange(e)}
                  />
                  {/* Dev or Exp Exp */}
                  <SelectListOption
                    placeholder="Experience Type"
                    name="expType"
                    value={expType && { label: expType, value: expType }}
                    onChange={(e) => onChange(e)}
                    options={expTypeOptions}
                  />
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  employment: state.employment,
})

export default connect(mapStateToProps, {
  updateEmployment,
  readEmployment,
})(UpdateEmployment)
