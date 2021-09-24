import axios from 'axios'

// ------------------------
// ----- Action Types -----
// ------------------------

// ----- Employment -----
export const GET_ALL_EMPLOYMENT = 'GET_ALL_EMPLOYMENT'
export const GET_ONE_EMPLOYMENT = 'GET_ONE_EMPLOYMENT'
export const DELETE_EMPLOYMENT = 'ELETE_EMPLOYMENT'
export const RESET_EMPLOYMENT = 'RESET_EMPLOYMENT'
export const EMPLOYMENT_LOADING = 'EMPLOYMENT_LOADING '
export const EMPLOYMENT_FAIL = 'EMPLOYMENT_FAIL'
export const EMPLOYMENT_SUCCESS = 'EMPLOYMENT_SUCCESS'
// ----- Education -----
export const GET_ALL_EDUCATION = 'GET_ALL_EDUCATION'
export const GET_ONE_EDUCATION = 'GET_ONE_EDUCATION'
export const DELETE_EDUCATION = 'DELETE_EDUCATION'
export const RESET_EDUCATION = 'RESET_EDUCATION'
export const EDUCATION_LOADING = 'EDUCATION_LOADING'
export const EDUCATION_FAIL = 'EDUCATION_FAIL'
export const EDUCATION_SUCCESS = 'EDUCATION_SUCCESS'
// ----- Skills -----
export const GET_ALL_SKILLS = 'GET_ALL_SKILLS'
export const GET_ONE_SKILLS = 'GET_ONE_SKILLS'
export const DELETE_SKILLS = 'DELETE_SKILLS'
export const RESET_SKILLS = 'RESET_SKILLS'
export const SKILLS_LOADING = 'SKILLS_LOADING'
export const SKILLS_FAIL = 'SKILLS_FAIL'
export const SKILLS_SUCCESS = 'SKILLS_SUCCESS'

// ----- Employment -----

// @Route   GET api/employment
// @Desc    Read All Employment
// @Action  readAllEmployment()
// @Access  Private
export const readAllEmployment = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/employment')
    dispatch({
      type: GET_ALL_EMPLOYMENT,
      payload: res.data,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: EMPLOYMENT_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   GET api/employment/:id
// @Desc    Read Employment by ID
// @Action  readEmployment()
// @Access  Private

// @Route   POST api/employment/create-employment
// @Desc    Create Employment
// @Action  createEmployment()
// @Access  Private
export const createEmployment = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    await axios
      .post('/api/employment/create-employment', formData, config)
      .then((res) => console.log(res.data))
    dispatch({
      type: EMPLOYMENT_SUCCESS,
      payload: { msg: formData, status: 'success' },
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: EMPLOYMENT_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   PUT api/employment
// @Desc    Update Employment
// @Action  updateEmployment()
// @Access  Private

// @Route   DELTE api/employment
// @Desc    Delete Employment
// @Action  deleteEmployment()
// @Access  Private

// ----- Education -----

// @Route   Post api/education
// @Desc    Create Education
// @Action  createEducation()
// @Access  Private

// @Route   GET api/education
// @Desc    Read All Education
// @Action  readAllEducation()
// @Access  Private

// @Route   GET api/education/:id
// @Desc    Read Education by ID
// @Action  readEducation()
// @Access  Private

// @Route   Post api/education
// @Desc    Update Education
// @Action  updateEducation()
// @Access  Private

// @Route   Post api/education/:id
// @Desc    Delete Education by ID
// @Action  deleteEducation()
// @Access  Private

// ----- Skills -----

// @Route   Post api/skills
// @Desc    Create Skills
// @Action  createSkills()
// @Access  Private

// @Route   GET api/skills
// @Desc    Read All Skills
// @Action  readAllSkills()
// @Access  Private

// @Route   GET api/skills/:id
// @Desc    Read Skills by ID
// @Action  readSkills()
// @Access  Private

// @Route   Post api/skills
// @Desc    Update Skills
// @Action  updateSkills()
// @Access  Private

// @Route   Post api/skills/:id
// @Desc    Delete Skills by ID
// @Action  deleteSkills()
// @Access  Private
