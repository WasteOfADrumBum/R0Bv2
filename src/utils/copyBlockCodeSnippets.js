export const CopyBlockCodeSnippets = {
  demo1: `useEffect(() => {
    // Target any descendant with the class of .demo1Box
    // no matter how far down the descendant tree.
    // Uses demo1Ref.current.querySelectorAll() internally
    gsap.to(q1('.demo1Box'), {
      x: 100,
      stagger: 0.33,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    })
  }, [])`,

  routeCode: `const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
);

// Pulic Route
<Route path="/" exact component={Home} />
// Private Route
<ProtectedRoute path="/profile" component={Profile} />`,

  profileCode: `const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};`,

  accordionCode: `<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>`,

  buttonCode: `<button type="button" className="btn btn-primary">Primary</button>
<button type="button" className="btn btn-secondary">Secondary</button>

<button type="button" className="btn btn-success">Success</button>
<button type="button" className="btn btn-danger">Danger</button>
<button type="button" className="btn btn-warning">Warning</button>
<button type="button" className="btn btn-info">Info</button>

<button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button>

<button type="button" className="btn btn-link">Link</button>`,

  cardCode: `<div className="card">
  <img src="..." className="card-img-top" alt="...">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Card's body content.</p>
    <a href="#" className="btn btn-link">Link</a>
  </div>
</div>`,

  simpleCode: `const SimpleComponent = () => {
    return (
      <div>Hellow World!</div>
    )
  }

  export default SimpleComponent`,

  statefulCode: `// name is a prop
  const Hello = ({ name }) => (<div>Hello, {name}!</div>);

  // returns 'Hello, John Doe!'
  <Hello name={'John Doe'}/>
  
  const Hello = () => {
    // declare a state
    [data, setData] = useState()

    // set the state
    setData('John Doe')

    // returns 'Hello, John Doe!'
    return (<div>Hello, {data}!</div>)
  }`,

  createCodeUXUI: `import React, { useState } from 'react'
import { connect } from 'react-redux'
import { TextField, SelectListOption, ToggleSwitch } from '../../../components'
import { createCrud } from '../../../actions'
import { USAStates } from '../../../utils'
import './_input.scss'

const CrudInput = ({ createCrud }) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', usaStreet: '', usaCity: '', usaState: '', usaZip: '', question: false })
  const { firstName, lastName, usaStreet, usaCity, usaState, usaZip, question } = formData

  // Captures changes made to the form data
  const onChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }

  const onToggle = (question) => { setFormData({ ...formData, question: question }) }

  const onSubmit = (e) => {
    e.preventDefault()

    // Trim white space off input's
    let trimFormData = {
      ...formData,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      usaStreet: usaStreet.trim(),
      usaCity: usaCity.trim(),
      usaState: usaState,
      usaZip: usaZip.trim(),
      question: question,
    }

    // send trimmed formData to the API
    createCrud(trimFormData)

    // clear formData
    setFormData({ firstName: '', lastName: '', usaStreet: '', usaCity: '', usaState: '', usaZip: '', question: false })
  }

  return (<>Form Rendered Here</>)
}

const mapStateToProps = (state) => ({
  crudReducer: state.crudReducer,
})

export default connect(mapStateToProps, {
  createCrud,
})(CrudInput)`,

  createCodeRoutes: `const express = require('express')
const router = express.Router()

// load Model
const crudModel = require('../models/crudModel')

// @Route   POST api/crud/create-crud
// @Desc    Create CRUD
// @Action  createCRUD()
// @Access  Private
router.post('/create-crud', async (req, res) => {
  const { firstName, lastName, usaStreet, usaCity, usaState, usaZip, question } = req.body

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
})`,

  createCodeActions: `import axios from 'axios'

export const CRUD_FAIL = 'CRUD_FAIL'
export const CRUD_SUCCESS = 'CRUD_SUCCESS'

// @Route   POST api/crud/create-crud
// @Desc    Create Crud
// @Action  createCrud()
// @Access  Private
export const createCrud = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    await axios
      .post('/api/crud/create-crud', formData, config)
      .then((res) => console.log(res.data))
    dispatch({
      type: CRUD_SUCCESS,
      payload: { msg: formData, status: 'success' },
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: CRUD_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}`,

  createCodeReducer: `import {
  CRUD_FAIL,
  CRUD_SUCCESS,
} from '../actions'

const crudReducer = (
  state = {
    allCrud: [], // Pulls in all crud
    crud: null, // Pulls in Specific crud
    loading: false, // Has everything needed been loaded
    success: {},
    error: {},
  },
  action,
) => {
  const { type, payload } = action
  switch (type) {
    case CRUD_FAIL:
      return {
        ...state,
        error: payload,
        allCrud: [],
        crud: null,
        loading: false,
      }
    case CRUD_SUCCESS:
      return {
        ...state,
        success: payload,
        loading: false,
      }
    default:
      return state
  }
}

export default crudReducer`,

  deleteCode: `import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { deleteCrud } from '../../../actions'
import './_display.scss'

const CrudDisplay = ({
  deleteCrud,
  crud: { allCrud, loading: crud_loading },
}) => {

/* Delete an entry by ID */
const onDelete = (id) => {
  deleteCrud(id)
}

return (<i type="button" className="bi bi-trash-fill text-danger" onClick={() => onDelete(crud._id)} />)

const mapStateToProps = (state) => ({
  crudReducer: state.crudReducer,
  crud: state.crud,
})

export default connect(mapStateToProps, {
  deleteCrud,
})(CrudDisplay)`,

  deleteCodeRoutes: `const express = require('express')
const router = express.Router()

// load Model
const crudModel = require('../models/crudModel')

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

module.exports = router`,

  deleteCodeActions: `import axios from 'axios'

export const DELETE_CRUD = 'DELETE_CRUD'
export const CRUD_FAIL = 'CRUD_FAIL'
  
// @Route   DELTE api/crud/delete-crud/:id
// @Desc    Delete Crud
// @Action  deleteCrud()
// @Access  Private
export const deleteCrud = (id) => async (dispatch) => {
  if (
    window.confirm(
      'Are you sure you want to delete this crud? This cannot be undone.',
    )
  ) {
    try {
      const res = await axios.delete('/api/crud/delete-crud/id')
      dispatch({
        type: DELETE_CRUD,
        payload: res.data,
      })
    } catch (err) {
      console.log(err)
      dispatch({
        type: CRUD_FAIL,
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }
  }
}`,

  deleteCodeReducer: `import {
  DELETE_CRUD,
  CRUD_SUCCESS,
} from '../actions'

const crudReducer = (
  state = {
    allCrud: [], // Pulls in all crud
    crud: null, // Pulls in Specific crud
    loading: false, // Has everything needed been loaded
    success: {},
    error: {},
  },
  action,
) => {
  const { type, payload } = action
  switch (type) {
    case DELETE_CRUD:
      return {
        ...state,
        allCrud: payload,
        loading: false,
      }
    case CRUD_FAIL:
      return {
        ...state,
        error: payload,
        allCrud: [],
        crud: null,
        loading: false,
      }
    default:
      return state
  }
}

export default crudReducer`,

  modelCode: `const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
// Form Validation done in the modiel using required: true/false
const CRUDSchema = new Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  address: {
    usaStreet: { type: String, required: true },
    usaCity: { type: String, required: true },
    usaState: {
      type: String,
      uppercase: true,
      required: true,
    },
    usaZip: Number,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  question: { type: Boolean, default: false },
})

module.exports = mongoose.model('CRUD', CRUDSchema)`,
}
