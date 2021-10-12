import axios from 'axios'

// ------------------------
// ----- Action Types -----
// ------------------------

export const GET_ALL_PORTFOLIO = 'GET_ALL_PORTFOLIO'
export const GET_ONE_PORTFOLIO = 'GET_ONE_PORTFOLIO'
export const UPDATE_PORTFOLIO = 'UPDATE_PORTFOLIO'
export const DELETE_PORTFOLIO = 'ELETE_PORTFOLIO'
export const RESET_PORTFOLIO = 'RESET_PORTFOLIO'
export const PORTFOLIO_LOADING = 'PORTFOLIO_LOADING '
export const PORTFOLIO_FAIL = 'PORTFOLIO_FAIL'
export const PORTFOLIO_SUCCESS = 'PORTFOLIO_SUCCESS'

// @Route   GET api/portfolio
// @Desc    Read All Portfolio
// @Action  readPortfolio()
// @Access  Private
export const readPortfolio = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/portfolio')
    dispatch({
      type: GET_ALL_PORTFOLIO,
      payload: res.data,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: PORTFOLIO_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   GET api/portfolio/:id
// @Desc    Read Portfolio by ID
// @Action  readProject()
// @Access  Private
export const readProject = (id) => async (dispatch) => {
  dispatch({ type: RESET_PORTFOLIO })
  try {
    const res = await axios.get(`/api/portfolio/${id}`)
    dispatch({
      type: GET_ONE_PORTFOLIO,
      payload: res.data,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: PORTFOLIO_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   POST api/portfolio/create-portfolio
// @Desc    Create Portfolio
// @Action  createPortfolio()
// @Access  Private
export const createPortfolio = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    await axios
      .post('/api/portfolio/create-portfolio', formData, config)
      .then((res) => console.log(res.data))
    dispatch({
      type: PORTFOLIO_SUCCESS,
      payload: { msg: formData, status: 'success' },
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: PORTFOLIO_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   PUT api/portfolio/update-portfolio/:id
// @Desc    Update Portfolio
// @Action  updatePortfolio()
// @Access  Private
export const updatePortfolio = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.post(
      `/api/portfolio/update-portfolio/${id}`,
      formData,
      config,
    )
    dispatch({
      type: UPDATE_PORTFOLIO,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: PORTFOLIO_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   DELTE api/portfolio/delete-portfolio/:id
// @Desc    Delete Portfolio
// @Action  deletePortfolio()
// @Access  Private
export const deletePortfolio = (id) => async (dispatch) => {
  if (
    window.confirm(
      'Are you sure you want to delete this portfolio? This cannot be undone.',
    )
  ) {
    try {
      const res = await axios.delete(`/api/portfolio/delete-portfolio/${id}`)
      dispatch({
        type: DELETE_PORTFOLIO,
        payload: res.data,
      })
    } catch (err) {
      console.log(err)
      dispatch({
        type: PORTFOLIO_FAIL,
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }
  }
}

// @Desc    reset Portfolio
// @Action  resetPortfolio()
// @Access  Private
export const resetPortfolio = () => async (dispatch) => {
  try {
    dispatch({
      type: RESET_PORTFOLIO,
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
      type: PORTFOLIO_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}
