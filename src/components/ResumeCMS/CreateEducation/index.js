import React, { useState } from 'react'
import { connect } from 'react-redux'
import { TextField, TextArea } from '../../../components'
import { createEducation } from '../../../actions'
// Date picker
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const CreateEducation = ({ createEducation }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: '',
    description: '',
  })
  const {
    school,
    degree,
    fieldOfStudy,
    startDate,
    endDate,
    description,
  } = formData

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
      school: school.trim(),
      degree: degree.trim(),
      fieldOfStudy: fieldOfStudy.trim(),
      startDate: startDate,
      endDate: endDate,
      description: description.trim(),
    }

    // send trimmed formData to the API
    createEducation(trimFormData)

    // clear formData
    setFormData({
      school: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      description: '',
    })
  }

  return (
    <div className="createEducation">
      <h4 className="text-center">Create Education</h4>
      <div className="input-group mb-3">
        <form noValidate onSubmit={(e) => onSubmit(e)}>
          <TextField
            placeholder="School"
            name="school"
            value={school}
            onChange={(e) => onChange(e)}
          />
          <TextField
            placeholder="Degree"
            name="degree"
            value={degree}
            onChange={(e) => onChange(e)}
          />
          <TextField
            placeholder="Field of study"
            name="fieldOfStudy"
            value={fieldOfStudy}
            onChange={(e) => onChange(e)}
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
          <button type="submit" className="btn btn-primary">
            Add Education
          </button>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  resumeEducationReducer: state.resumeEducationReducer,
})

export default connect(mapStateToProps, {
  createEducation,
})(CreateEducation)
