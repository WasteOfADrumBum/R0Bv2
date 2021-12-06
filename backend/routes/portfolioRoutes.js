const express = require('express')
const router = express.Router()
// load Model
const portfolioModel = require('../models/portfolioModel')

// @Route   GET api/portfolio/
// @Desc    Read All Portfolio
// @Action  readPortfolio()
// @Access  Private
router.get('/', async (req, res) => {
  try {
    const portfolio = await portfolioModel.find().sort('endDate')
    if (portfolio.length <= 0) {
      return res.status(400).json({
        errors: [{ msg: 'No portfolio was found' }],
      })
    }

    return res.json(portfolio)
  } catch (err) {
    console.error(err.message)
    return res.status(500).send('Server Error')
  }
})

// @Route   GET api/portfolio/:id
// @Desc    Read Portfolio by ID
// @Action  readProject()
// @Access  Private
router.get('/:id', async (req, res) => {
  try {
    const portfolio = await portfolioModel.findOne({ _id: req.params.id })
    if (!portfolio) {
      return res.status(400).json({
        errors: [{ msg: 'No portfolio was found' }],
      })
    }

    return res.json(portfolio)
  } catch (err) {
    console.error(err.message)
    return res.status(500).send('Server Error')
  }
})

// @Route   POST api/portfolio/create-portfolio
// @Desc    Create Portfolio
// @Action  createPortfolio()
// @Access  Private
router.post('/create-portfolio', async (req, res) => {
  const {
    title,
    position,
    startDate,
    endDate,
    description,
    skills,
    linkUrl,
    imgSrc,
  } = req.body

  const newProject = {}
  if (title) newProject.title = title
  if (position) newProject.position = position
  if (startDate) newProject.startDate = startDate
  if (endDate) {
    newProject.endDate = endDate
  } else newProject.endDate = 'Current'
  if (description) newProject.description = description
  if (skills) newProject.skills = skills
  if (linkUrl) newProject.linkUrl = linkUrl
  if (imgSrc) newProject.imgSrc = imgSrc

  try {
    let portfolio = new portfolioModel(newProject)
    await portfolio.save()
    res.status(200).send('Success')
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @Route   PUT api/portfolio/update-portfolio/:id
// @Desc    Update Portfolio
// @Action  updatePortfolio()
// @Access  Private
router.post('/update-portfolio/:id', async (req, res) => {
  const {
    title,
    position,
    imgSrc,
    startDate,
    endDate,
    description,
    skills,
    linkUrl,
  } = req.body

  const newProject = {}
  if (title) newProject.title = title
  if (position) newProject.position = position
  if (imgSrc) newProject.imgSrc = imgSrc
  if (startDate) newProject.startDate = startDate
  if (endDate) {
    newProject.endDate = endDate
  } else newProject.endDate = 'Current'
  if (description) newProject.description = description
  if (skills) newProject.skills = skills
  if (linkUrl) newProject.linkUrl = linkUrl

  try {
    let portfolio = await portfolioModel.findById(req.params.id)
    // Check if it exsists
    if (!portfolio) {
      return res.status(400).json({
        errors: [{ msg: 'Portfolio does not exist' }],
      })
    }

    portfolio = await portfolioModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: newProject },
      { new: true },
    )
    res.json(portfolio)
  } catch (err) {
    console.error('updatePortfolio Route: ', err.message)
    res.status(500).send('Server Error')
  }
})

// @Route   DELTE api/portfolio/delete-portfolio/:id
// @Desc    Delete Portfolio
// @Action  deletePortfolio()
// @Access  Private
router.delete('/delete-portfolio/:id', async (req, res) => {
  try {
    const portfolio = await portfolioModel.findOneAndRemove({
      _id: req.params.id,
    })
    if (!portfolio) {
      return res.status(400).json({
        errors: [{ msg: 'Portfolio was not found' }],
      })
    }
    const allPortfolio = await portfolioModel.find()
    if (allPortfolio.length <= 0) {
      return res.status(400).json({
        errors: [{ msg: 'No portfolio was found' }],
      })
    }
    res.json(allPortfolio)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
