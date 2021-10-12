import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { TextField, TextArea } from '../../components'
import { createPortfolio } from '../../actions'
import './_portfolioCMS.scss'
// Date picker
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const PortfolioCMS = ({ createPortfolio }) => {
  const { user } = useAuth0()
  const { email } = user
  const [formData, setFormData] = useState({
    title: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
    linkUrl: '',
    imgSrc: '',
    skills: '',
  })
  const {
    title,
    position,
    startDate,
    endDate,
    description,
    linkUrl,
    imgSrc,
    skills,
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
      title: title.trim(),
      position: position,
      startDate: startDate,
      endDate: endDate,
      description: description.trim(),
      linkUrl: linkUrl.trim(),
      imgSrc: imgSrc.trim(),
      skills: skills.trim(),
    }

    // send trimmed formData to the API
    createPortfolio(trimFormData)

    // clear formData
    setFormData({
      title: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
      linkUrl: '',
      imgSrc: '',
      skills: '',
    })
  }

  return (
    <div className="portfolioCMS">
      {email && email === 'jmsmall89@gmail.com' && (
        <>
          <hr />
          <h3 className="text-center">Porfolio CMS</h3>
          <form noValidate onSubmit={(e) => onSubmit(e)}>
            <TextField
              placeholder="Title"
              name="title"
              value={title}
              onChange={(e) => onChange(e)}
            />
            <TextField
              placeholder="Position"
              name="position"
              value={position}
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
            <TextField
              placeholder="Project Link"
              name="linkUrl"
              value={linkUrl}
              onChange={(e) => onChange(e)}
            />
            <TextField
              placeholder="Project Image"
              name="imgSrc"
              value={imgSrc}
              onChange={(e) => onChange(e)}
            />
            <TextArea
              placeholder="Description"
              name="description"
              value={description}
              onChange={(e) => onChange(e)}
            />
            <TextArea
              placeholder="Skills"
              name="skills"
              value={skills}
              onChange={(e) => onChange(e)}
            />
            <button type="submit" className="btn btn-primary">
              Add Project
            </button>
          </form>
          <hr />
        </>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  portfolioReducer: state.portfolioReducer,
})

export default connect(mapStateToProps, {
  createPortfolio,
})(PortfolioCMS)
