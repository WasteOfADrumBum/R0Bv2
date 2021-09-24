import React, { useState } from 'react'
import { TextArea } from '../../../components'

const CreateSkills = () => {
  const [formData, setFormData] = useState({
    skilss: '',
  })
  const { skills } = formData

  // Captures changes made to the form data
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    // Trim white space off input's
    let trimFormData = {
      ...formData,
      skills: skills.trim(),
    }

    // send trimmed formData to the API
    console.log(trimFormData)
  }

  return (
    <div className="createSkills">
      <h4 className="text-center">Create Skills</h4>
      <div className="input-group mb-3">
        <form noValidate onSubmit={(e) => onSubmit(e)}>
          <TextArea
            placeholder="Skills"
            name="skills"
            value={skills}
            onChange={(e) => onChange(e)}
          />
          <button type="submit" className="btn btn-primary">
            Add Skills
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateSkills
