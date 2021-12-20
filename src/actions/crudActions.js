import axios from 'axios'

// ----- Crud -----
export const GET_ALL_CRUD = 'GET_ALL_CRUD'
export const GET_ONE_CRUD = 'GET_ONE_CRUD'
export const UPDATE_CRUD = 'UPDATE_CRUD'
export const DELETE_CRUD = 'DELETE_CRUD'
export const RESET_CRUD = 'RESET_CRUD'
export const CRUD_LOADING = 'CRUD_LOADING '
export const CRUD_FAIL = 'CRUD_FAIL'
export const CRUD_SUCCESS = 'CRUD_SUCCESS'

// ----- Crud -----

// @Route   GET api/crud
// @Desc    Read All Crud
// @Action  readAllCrud()
// @Access  Private
export const readAllCrud = () => async (dispatch) => {
  //dispatch({ type: CRUD_LOADING })
  try {
    const res = await axios.get('/api/crud')
    dispatch({
      type: GET_ALL_CRUD,
      payload: res.data,
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
}

// @Route   GET api/crud/:id
// @Desc    Read Crud by ID
// @Action  readCrud()
// @Access  Private
export const readCrud = (id) => async (dispatch) => {
  dispatch({ type: RESET_CRUD })
  try {
    const res = await axios.get(`/api/crud/${id}`)
    dispatch({
      type: GET_ONE_CRUD,
      payload: res.data,
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
}

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
}

// @Route   PUT api/crud/update-crud/:id
// @Desc    Update Crud
// @Action  updateCrud()
// @Access  Private
export const updateCrud = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.post(
      `/api/crud/update-crud/${id}`,
      formData,
      config,
    )
    dispatch({
      type: UPDATE_CRUD,
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
      const res = await axios.delete(`/api/crud/delete-crud/${id}`)
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
}

// @Desc    reset Crud
// @Action  resetCrud()
// @Access  Private
export const resetCrud = () => async (dispatch) => {
  dispatch({ type: CRUD_LOADING })

  try {
    dispatch({
      type: RESET_CRUD,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      })
    }

    dispatch({
      type: CRUD_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}
