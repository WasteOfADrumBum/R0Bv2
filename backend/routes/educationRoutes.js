const express = require('express')
const router = express.Router()

// load Model
const educationModel = require('../models/educationModel')

// @Route   GET api/education/
// @Desc    Read All Education
// @Action  readAllEducation()
// @Access  Private
router.get('/', async (req, res) => {
  try {
    const education = await educationModel.find().sort('endDate')
    if (education.length <= 0) {
      return res.status(400).json({
        errors: [{ msg: 'No education was found' }],
      })
    }

    return res.json(education)
  } catch (err) {
    console.error(err.message)
    return res.status(500).send('Server Error')
  }
})

// @Route   GET api/education/:id
// @Desc    Read Education by ID
// @Action  readEducation()
// @Access  Private
router.get('/:id', async (req, res) => {
  try {
    const education = await educationModel.findOne({ _id: req.params.id })
    if (!education) {
      return res.status(400).json({
        errors: [{ msg: 'No education was found' }],
      })
    }

    return res.json(education)
  } catch (err) {
    console.error(err.message)
    return res.status(500).send('Server Error')
  }
})

// @Route   POST api/education/create-education
// @Desc    Create Education
// @Action  createEducation()
// @Access  Private
router.post('/create-education', async (req, res) => {
  const {
    degree,
    description,
    endDate,
    fieldOfStudy,
    school,
    startDate,
  } = req.body

  const newEducation = {}
  if (degree) newEducation.degree = degree
  if (description) newEducation.description = description
  if (endDate) {
    newEducation.endDate = endDate
  } else newEducation.endDate = 'Current'
  if (fieldOfStudy) newEducation.fieldOfStudy = fieldOfStudy
  if (school) newEducation.school = school
  if (startDate) newEducation.startDate = startDate

  try {
    let education = new educationModel(newEducation)
    await education.save()
    res.status(200).send('Success')
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @Route   PUT api/education/update-education/:id
// @Desc    Update Education
// @Action  updateEducation()
// @Access  Private
router.post('/update-education/:id', async (req, res) => {
  const {
    degree,
    description,
    endDate,
    fieldOfStudy,
    school,
    startDate,
  } = req.body

  const newEducation = {}
  if (degree) newEducation.degree = degree
  if (description) newEducation.description = description
  if (endDate) {
    newEducation.endDate = endDate
  } else newEducation.endDate = 'Current'
  if (fieldOfStudy) newEducation.fieldOfStudy = fieldOfStudy
  if (school) newEducation.school = school
  if (startDate) newEducation.startDate = startDate

  try {
    let education = await educationModel.findById(req.params.id)
    // Check if it exsists
    if (!education) {
      return res.status(400).json({
        errors: [{ msg: 'Education does not exist' }],
      })
    }

    education = await educationModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: newEducation },
      { new: true },
    )
    res.json(education)
  } catch (err) {
    console.error('updateEducation Route: ', err.message)
    res.status(500).send('Server Error')
  }
})

// @Route   DELTE api/education/delete-education/:id
// @Desc    Delete Education
// @Action  deleteEducation()
// @Access  Private
router.delete('/delete-education/:id', async (req, res) => {
  try {
    const education = await educationModel.findOneAndRemove({
      _id: req.params.id,
    })
    if (!education) {
      return res.status(400).json({
        errors: [{ msg: 'Education was not found' }],
      })
    }
    const allEducation = await educationModel.find()
    if (allEducation.length <= 0) {
      return res.status(400).json({
        errors: [{ msg: 'No education was found' }],
      })
    }
    res.json(allEducation)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
