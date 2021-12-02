const express = require('express')
const router = express.Router()

// load Model
const skillsModel = require('../models/skillsModel')

// @Route   GET api/skills/
// @Desc    Read All Skills
// @Action  readAllSkills()
// @Access  Private
router.get('/', async (req, res) => {
  try {
    const skills = await skillsModel.find().sort('endDate')
    if (skills.length <= 0) {
      return res.status(400).json({
        errors: [{ msg: 'No skills was found' }],
      })
    }

    return res.json(skills)
  } catch (err) {
    console.error(err.message)
    return res.status(500).send('Server Error')
  }
})

// @Route   GET api/skills/:id
// @Desc    Read Skills by ID
// @Action  readSkills()
// @Access  Private
router.get('/:id', async (req, res) => {
  try {
    const skills = await skillsModel.findOne({ _id: req.params.id })
    if (!skills) {
      return res.status(400).json({
        errors: [{ msg: 'No skills was found' }],
      })
    }

    return res.json(skills)
  } catch (err) {
    console.error(err.message)
    return res.status(500).send('Server Error')
  }
})

// @Route   POST api/skills/create-skills
// @Desc    Create Skills
// @Action  createSkills()
// @Access  Private
router.post('/create-skills', async (req, res) => {
  console.log(req.body)
  const { skillsList } = req.body

  const newSkill = {}
  if (skillsList) newSkill.skillsList = skillsList

  try {
    let skills = new skillsModel(newSkill)
    await skills.save()
    res.status(200).send('Success')
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @Route   PUT api/skills/update-skills/:id
// @Desc    Update Skills
// @Action  updateSkills()
// @Access  Private
router.post('/update-skills/:id', async (req, res) => {
  const { skillsList } = req.body
  const newSkill = {}
  if (skillsList) newSkill.skills = skillsList

  try {
    let skills = await skillsModel.findById(req.params.id)
    // Check if it exsists
    if (!skills) {
      return res.status(400).json({
        errors: [{ msg: 'Skills does not exist' }],
      })
    }

    skills = await skillsModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: newSkill },
      { new: true },
    )
    res.json(skills)
  } catch (err) {
    console.error('updateSkills Route: ', err.message)
    res.status(500).send('Server Error')
  }
})

// @Route   DELTE api/skills/delete-skills/:id
// @Desc    Delete Skills
// @Action  deleteSkills()
// @Access  Private
router.delete('/delete-skills/:id', async (req, res) => {
  try {
    const skills = await skillsModel.findOneAndRemove({
      _id: req.params.id,
    })
    if (!skills) {
      return res.status(400).json({
        errors: [{ msg: 'Skills was not found' }],
      })
    }
    const allSkills = await skillsModel.find()
    if (allSkills.length <= 0) {
      return res.status(400).json({
        errors: [{ msg: 'No skills was found' }],
      })
    }
    res.json(allSkills)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
