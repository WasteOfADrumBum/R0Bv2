import {
  GET_ALL_EDUCATION,
  GET_ONE_EDUCATION,
  UPDATE_EDUCATION,
  DELETE_EDUCATION,
  RESET_EDUCATION,
  EDUCATION_LOADING,
  EDUCATION_FAIL,
  EDUCATION_SUCCESS,
} from '../actions'

const resumeEducationReducer = (
  state = {
    allEducation: [], // Pulls in all education
    education: null, // Pulls in Specific education
    loading: false, // Has everything need been loaded
    success: {},
    error: {},
  },
  action,
) => {
  const { type, payload } = action
  switch (type) {
    case GET_ALL_EDUCATION:
      return {
        ...state,
        allEducation: payload,
        loading: false,
      }
    case GET_ONE_EDUCATION:
      return {
        ...state,
        education: payload,
        loading: false,
      }
    case UPDATE_EDUCATION:
      return {
        ...state,
        education: payload,
        loading: true,
      }
    case DELETE_EDUCATION:
      return {
        ...state,
        allEducation: payload,
        loading: false,
      }
    case RESET_EDUCATION:
      return {
        ...state,
        education: null,
        loading: false,
      }
    case EDUCATION_LOADING:
      return {
        ...state,
        loading: true,
        education: null,
        error: {},
      }
    case EDUCATION_FAIL:
      return {
        ...state,
        error: payload,
        allEducation: [],
        education: null,
        loading: false,
      }
    case EDUCATION_SUCCESS:
      return {
        ...state,
        success: payload,
      }
    default:
      return state
  }
}

export default resumeEducationReducer
