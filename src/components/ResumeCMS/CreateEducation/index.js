import React, { useState } from 'react'
import { TextField, TextArea } from '../../../components'

const CreateEducation = () => {
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

  const onSubmit = (e) => {
    e.preventDefault()

    // Trim white space off input's
    let trimFormData = {
      ...formData,
      school: school.trim(),
      degree: degree.trim(),
      fieldOfStudy: fieldOfStudy.trim(),
      startDate: startDate.trim(),
      endDate: endDate.trim(),
      description: description.trim(),
    }

    // send trimmed formData to the API
    console.log(trimFormData)

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
          <button type="submit" className="btn btn-primary">
            Add Education
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateEducation
