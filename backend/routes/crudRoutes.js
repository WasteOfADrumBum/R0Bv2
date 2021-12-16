const express = require('express')
const router = express.Router()

// load Model
const crudModel = require('../models/crudModel')

// @Route   GET api/crud/
// @Desc    Read All CRUD
// @Action  readAllCRUD()
// @Access  Private
router.get('/', async (req, res) => {
  try {
    /* Sort Entries by Last Name */
    const crud = await crudModel.find().sort('lastName')
    if (crud.length <= 0) {
      return res.status(400).json({
        errors: [{ msg: 'No crud was found' }],
      })
    }

    return res.json(crud)
  } catch (err) {
    console.error(err.message)
    return res.status(500).send('Server Error')
  }
})

// @Route   GET api/crud/:id
// @Desc    Read CRUD by ID
// @Action  readCRUD()
// @Access  Private
router.get('/:id', async (req, res) => {
  try {
    const crud = await crudModel.findOne({ _id: req.params.id })
    if (!crud) {
      return res.status(400).json({
        errors: [{ msg: 'No crud was found' }],
      })
    }

    return res.json(crud)
  } catch (err) {
    console.error(err.message)
    return res.status(500).send('Server Error')
  }
})

// @Route   POST api/crud/create-crud
// @Desc    Create CRUD
// @Action  createCRUD()
// @Access  Private
router.post('/create-crud', async (req, res) => {
  const {
    firstName,
    lastName,
    usaStreet,
    usaCity,
    usaState,
    usaZip,
    question,
  } = req.body

  const newEntry = {
    name: {
      firstName: firstName || '',
      lastName: lastName || '',
    },
    address: {
      usaStreet: usaStreet || '',
      usaCity: usaCity || '',
      usaState: usaState || '',
      usaZip: usaZip || '',
    },
    question: question || false,
  }

  try {
    let crud = new crudModel(newEntry)
    await crud.save()
    res.status(200).send('Success')
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @Route   PUT api/crud/update-crud/:id
// @Desc    Update CRUD
// @Action  updateCRUD()
// @Access  Private
router.post('/update-crud/:id', async (req, res) => {
  const {
    firstName,
    lastName,
    usaStreet,
    usaCity,
    usaState,
    usaZip,
    question,
  } = req.body

  const newEntry = {
    name: {
      firstName: firstName || '',
      lastName: lastName || '',
    },
    address: {
      usaStreet: usaStreet || '',
      usaCity: usaCity || '',
      usaState: usaState || '',
      usaZip: usaZip || '',
    },
    question: question || false,
  }

  try {
    let crud = await crudModel.findById(req.params.id)
    // Check if it exsists
    if (!crud) {
      return res.status(400).json({
        errors: [{ msg: 'CRUD does not exist' }],
      })
    }

    crud = await crudModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: newEntry },
      { new: true },
    )
    res.json(crud)
  } catch (err) {
    console.error('updateCRUD Route: ', err.message)
    res.status(500).send('Server Error')
  }
})

// @Route   DELTE api/crud/delete-crud/:id
// @Desc    Delete CRUD
// @Action  deleteCRUD()
// @Access  Private
router.delete('/delete-crud/:id', async (req, res) => {
  try {
    const crud = await crudModel.findOneAndRemove({
      _id: req.params.id,
    })
    if (!crud) {
      return res.status(400).json({
        errors: [{ msg: 'CRUD was not found' }],
      })
    }
    const allCRUD = await crudModel.find()
    if (allCRUD.length <= 0) {
      return res.status(400).json({
        errors: [{ msg: 'No crud was found' }],
      })
    }
    res.json(allCRUD)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
