const express = require('express')
const router = express.Router()

// load Model
const employmentModel = require('../models/employmentModel')

// @Route   GET api/employment/
// @Desc    Read All Employment
// @Action  readAllEmployment()
// @Access  Private
router.get('/', async (req, res) => {
  try {
    const employment = await employmentModel.find().sort('endDate')
    if (employment.length <= 0) {
      return res.status(400).json({
        errors: [{ msg: 'No employment was found' }],
      })
    }

    return res.json(employment)
  } catch (err) {
    console.error(err.message)
    return res.status(500).send('Server Error')
  }
})

// @Route   GET api/employment/:id
// @Desc    Read Employment by ID
// @Action  readEmployment()
// @Access  Private
router.get('/:id', async (req, res) => {
  try {
    const employment = await employmentModel.findOne({ _id: req.params.id })
    if (!employment) {
      return res.status(400).json({
        errors: [{ msg: 'No employment was found' }],
      })
    }

    return res.json(employment)
  } catch (err) {
    console.error(err.message)
    return res.status(500).send('Server Error')
  }
})

// @Route   POST api/employment/create-employment
// @Desc    Create Employment
// @Action  createEmployment()
// @Access  Private
router.post('/create-employment', async (req, res) => {
  console.log(req.body)
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
  } = req.body

  const newEmployeer = {}
  if (title) newEmployeer.title = title
  if (employmentType) newEmployeer.employmentType = employmentType
  if (company) newEmployeer.company = company
  if (locationCity) newEmployeer.locationCity = locationCity
  if (locationState) newEmployeer.locationState = locationState
  if (startDate) newEmployeer.startDate = startDate
  if (endDate) {
    newEmployeer.endDate = endDate
  } else newEmployeer.endDate = 'Current'
  if (description) newEmployeer.description = description
  if (expType) newEmployeer.expType = expType

  try {
    let employment = new employmentModel(newEmployeer)
    await employment.save()
    console.log(employment)
    res.status(200).send('Success')
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @Route   PUT api/employment/update-employment/:id
// @Desc    Update Employment
// @Action  updateEmployment()
// @Access  Private
router.post('/update-employment/:id', async (req, res) => {
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
  } = req.body

  const newEmployeer = {}
  if (title) newEmployeer.title = title
  if (employmentType) newEmployeer.employmentType = employmentType
  if (company) newEmployeer.company = company
  if (locationCity) newEmployeer.locationCity = locationCity
  if (locationState) newEmployeer.locationState = locationState
  if (startDate) newEmployeer.startDate = startDate
  if (endDate) {
    newEmployeer.endDate = endDate
  } else newEmployeer.endDate = 'Current'
  if (description) newEmployeer.description = description
  if (expType) newEmployeer.expType = expType

  try {
    let employment = await employmentModel.findById(req.params.id)
    // Check if it exsists
    if (!employment) {
      return res.status(400).json({
        errors: [{ msg: 'Employment does not exist' }],
      })
    }

    employment = await employmentModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: newEmployeer },
      { new: true },
    )
    res.json(employment)
  } catch (err) {
    console.error('updateEmployment Route: ', err.message)
    res.status(500).send('Server Error')
  }
})

// @Route   DELTE api/employment/delete-employment/:id
// @Desc    Delete Employment
// @Action  deleteEmployment()
// @Access  Private
router.delete('/delete-employment/:id', async (req, res) => {
  try {
    const employment = await employmentModel.findOneAndRemove({
      _id: req.params.id,
    })
    if (!employment) {
      return res.status(400).json({
        errors: [{ msg: 'Employment was not found' }],
      })
    }
    const allEmployment = await employmentModel.find()
    if (allEmployment.length <= 0) {
      return res.status(400).json({
        errors: [{ msg: 'No employment was found' }],
      })
    }
    res.json(allEmployment)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
