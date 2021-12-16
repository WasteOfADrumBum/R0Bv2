import { combineReducers } from 'redux'
import resumeEmploymentReducer from './resumeEmploymentReducer'
import resumeEducationReducer from './resumeEducationReducer'
import resumeSkillsReducer from './resumeSkillsReducer'
import portfolioReducer from './portfolioReducer'
import crudReducer from './crudReducer'

const rootReducer = combineReducers({
  employment: resumeEmploymentReducer,
  education: resumeEducationReducer,
  skills: resumeSkillsReducer,
  portfolio: portfolioReducer,
  crud: crudReducer,
})

export default rootReducer
