import React, { useState, useEffect } from 'react'
import { TextArea } from '../../../components'
import './_creatSkills.scss'

const CreateSkills = () => {
  const [formData, setFormData] = useState({
    skillsList: '',
  })
  const { skillsList } = formData

  // Set formData if it exisits
  /* useEffect(() => {
    if (skills_loading && skills !== null) {
      setFormData({
        title: !skillsList ? '' : skillsList,
      })
    }
  }, [skills_loading]) */

  // Captures changes made to the form data
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    // Trim white space off input's
    let trimFormData = {
      ...formData,
      skillsList: skillsList.trim(),
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
            name="skillsList"
            value={skillsList}
            onChange={(e) => onChange(e)}
            info="Use a comma ( , ) to seperate skills"
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
