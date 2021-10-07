import {
  GET_ALL_PORTFOLIO,
  GET_ONE_PORTFOLIO,
  UPDATE_PORTFOLIO,
  DELETE_PORTFOLIO,
  RESET_PORTFOLIO,
  PORTFOLIO_LOADING,
  PORTFOLIO_FAIL,
  PORTFOLIO_SUCCESS,
} from '../actions'

const resumePortfolioReducer = (
  state = {
    portfolio: [], // Pulls in all porjects
    porject: null, // Pulls in Specific porject
    loading: false, // Has everything need been loaded
    success: {},
    error: {},
  },
  action,
) => {
  const { type, payload } = action
  switch (type) {
    case GET_ALL_PORTFOLIO:
      return {
        ...state,
        portfolio: payload,
        loading: true,
      }
    case GET_ONE_PORTFOLIO:
      return {
        ...state,
        porject: payload,
        loading: true,
      }
    case UPDATE_PORTFOLIO:
      return {
        ...state,
        porject: payload,
        loading: true,
      }
    case DELETE_PORTFOLIO:
      return {
        ...state,
        portfolio: payload,
        loading: true,
      }
    case RESET_PORTFOLIO:
      return {
        ...state,
        porject: null,
        loading: false,
      }
    case PORTFOLIO_LOADING:
      return {
        ...state,
        loading: true,
        porject: null,
        error: {},
      }
    case PORTFOLIO_FAIL:
      return {
        ...state,
        error: payload,
        portfolio: [],
        porject: null,
        loading: false,
      }
    case PORTFOLIO_SUCCESS:
      return {
        ...state,
        porject: payload,
        portfolio: [payload, ...state.portfolio],
        loading: false,
      }
    default:
      return state
  }
}

export default resumePortfolioReducer
