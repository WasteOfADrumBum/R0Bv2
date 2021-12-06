import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { TextArea } from '../../../components'
import { updateSkills, readSkills } from '../../../actions'
import './_creatSkills.scss'

const CreateSkills = ({
  updateSkills,
  readSkills,
  skills: { skills, loading: skills_loading },
}) => {
  const [formData, setFormData] = useState({
    skillsList: '',
  })
  const { skillsList } = formData

  /* ObjectID for Skill's List in DB */
  const id = '61a50dfa84383f861e9232c7'

  // Bring in skills
  useEffect(() => {
    readSkills(id)
  }, [readSkills])

  // Set formData if it exisits
  useEffect(() => {
    if (skills_loading && skills !== null) {
      setFormData({
        skillsList: !skills.skills ? '' : skills.skills,
      })
    }
  }, [skills_loading, skills])

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
    updateSkills(id, trimFormData)
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

const mapStateToProps = (state) => ({
  resumeSkillsReducer: state.resumeEmploymentReducer,
  skills: state.skills,
})

export default connect(mapStateToProps, {
  updateSkills,
  readSkills,
})(CreateSkills)
