import React, { useState } from 'react'
import { connect } from 'react-redux'
import { TextField, TextArea, SelectListOption } from '../../../components'
import { createEmployment } from '../../../actions'
import { USAStates } from '../../../utils'
// Date picker
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const CreateEmployment = ({ createEmployment }) => {
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

  // Captures changes made to the start date
  const onChangeStartDate = (e) => {
    setFormData({ ...formData, startDate: e })
  }

  // Captures changes made to the end date
  const onChangeEndDate = (e) => {
    setFormData({ ...formData, endDate: e })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    // Trim white space off input's
    let trimFormData = {
      ...formData,
      title: title.trim(),
      employmentType: employmentType,
      company: company.trim(),
      locationCity: locationCity.trim(),
      locationState: locationState,
      startDate: startDate,
      endDate: endDate,
      description: description.trim(),
      expType: expType,
    }

    // send trimmed formData to the API
    createEmployment(trimFormData)

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
    <div className="createEmployment">
      <h4 className="text-center">Create Employment</h4>
      <div className="input-group mb-3">
        <form noValidate onSubmit={(e) => onSubmit(e)}>
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
              employmentType && { label: employmentType, value: employmentType }
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
              locationState && { label: locationState, value: locationState }
            }
            onChange={(e) => onChange(e)}
            options={USAStates}
          />
          <div className="datePicker">
            <div className="w-100 pe-1">
              <DatePicker
                isClearable
                showYearDropdown
                filterDate={(d) => {
                  return new Date() > d
                }}
                placeholderText="Select Start Date"
                dateFormat="MMMM yyyy"
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                onChange={(e) => onChangeStartDate(e)}
              />
            </div>
            <div className="w-100 ps-1">
              <DatePicker
                isClearable
                showYearDropdown
                filterDate={(d) => {
                  return new Date() > d
                }}
                placeholderText="Select End Date"
                dateFormat="MMMM yyyy"
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                onChange={(e) => onChangeEndDate(e)}
              />
            </div>
          </div>
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
            Add Employment
          </button>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  resumeEmploymentReducer: state.resumeEmploymentReducer,
})

export default connect(mapStateToProps, {
  createEmployment,
})(CreateEmployment)
