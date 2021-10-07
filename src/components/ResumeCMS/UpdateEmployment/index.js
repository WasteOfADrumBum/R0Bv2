/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  TextField,
  TextArea,
  SelectListOption,
  Loading,
} from '../../../components'
import { updateEmployment, readEmployment } from '../../../actions'
import { USAStates } from '../../../utils'
import './_updateEmployment.scss'

const UpdateEmployment = ({
  history,
  match,
  updateEmployment,
  readEmployment,
  employment: { loading: employment_loading, employment },
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

  // Get ID from URL
  const id = match.params.id

  useEffect(() => {
    // Find Employment by ID
    readEmployment(id)
  }, [])

  // Set formData if it exisits
  useEffect(() => {
    if (employment_loading && employment !== null) {
      setFormData({
        title: !employment.title ? '' : employment.title,
        employmentType: !employment.employmentType
          ? ''
          : employment.employmentType,
        company: !employment.company ? '' : employment.company,
        locationCity: !employment.locationCity ? '' : employment.locationCity,
        locationState: !employment.locationState
          ? ''
          : employment.locationState,
        startDate: !employment.startDate ? '' : employment.startDate,
        endDate: !employment.endDate ? '' : employment.endDate,
        description: !employment.description ? '' : employment.description,
        expType: !employment.expType ? '' : employment.expType,
      })
    }
  }, [employment_loading])

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

    // Redirect to CV
    history.push('/resume')
  }

  return (
    <div className="updateEmployment">
      {!employment_loading ? (
        <Loading />
      ) : (
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
          <button type="submit" className="btn btn-primary me-2">
            Update
          </button>
          <a
            href="/resume"
            className="btn btn-danger"
            tabIndex="-1"
            role="button"
            aria-disabled="true"
          >
            Cancel
          </a>
        </form>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  employment: state.employment,
})

export default connect(mapStateToProps, {
  updateEmployment,
  readEmployment,
})(withRouter(UpdateEmployment))
