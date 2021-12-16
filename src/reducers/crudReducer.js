import {
  GET_ALL_CRUD,
  GET_ONE_CRUD,
  DELETE_CRUD,
  RESET_CRUD,
  CRUD_LOADING,
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
    case GET_ALL_CRUD:
      return {
        ...state,
        allCrud: payload,
        loading: false,
      }
    case GET_ONE_CRUD:
      return {
        ...state,
        crud: payload,
        loading: false,
      }
    case DELETE_CRUD:
      return {
        ...state,
        allCrud: payload,
        loading: false,
      }
    case RESET_CRUD:
      return {
        ...state,
        crud: null,
        loading: false,
      }
    case CRUD_LOADING:
      return {
        ...state,
        loading: true,
        crud: null,
        error: {},
      }
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

export default crudReducer
