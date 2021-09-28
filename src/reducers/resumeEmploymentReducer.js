import {
  GET_ALL_EMPLOYMENT,
  GET_ONE_EMPLOYMENT,
  UPDATE_EMPLOYMENT,
  DELETE_EMPLOYMENT,
  RESET_EMPLOYMENT,
  EMPLOYMENT_LOADING,
  EMPLOYMENT_FAIL,
  EMPLOYMENT_SUCCESS,
} from '../actions'

const resumeEmploymentReducer = (
  state = {
    allEmployment: [], // Pulls in all employment
    employment: null, // Pulls in Specific employment
    loading: false, // Has everything need been loaded
    success: {},
    error: {},
  },
  action,
) => {
  const { type, payload } = action
  switch (type) {
    case GET_ALL_EMPLOYMENT:
      return {
        ...state,
        allEmployment: payload,
        loading: true,
      }
    case GET_ONE_EMPLOYMENT:
      return {
        ...state,
        employment: payload,
        loading: true,
      }
    case UPDATE_EMPLOYMENT:
      return {
        ...state,
        employment: payload,
        loading: true,
      }
    case DELETE_EMPLOYMENT:
      return {
        ...state,
        allEmployment: payload,
        loading: false,
      }
    case RESET_EMPLOYMENT:
      return {
        ...state,
        employment: null,
        loading: false,
      }
    case EMPLOYMENT_LOADING:
      return {
        ...state,
        loading: true,
        employment: null,
        error: {},
      }
    case EMPLOYMENT_FAIL:
      return {
        ...state,
        error: payload,
        allEmployment: [],
        employment: null,
        loading: false,
      }
    case EMPLOYMENT_SUCCESS:
      return {
        ...state,
        employment: payload,
        allEmployment: [payload, ...state.allEmployment],
        loading: false,
      }
    default:
      return state
  }
}

export default resumeEmploymentReducer
