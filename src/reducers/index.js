import { combineReducers } from 'redux'
import resumeEmploymentReducer from './resumeEmploymentReducer'
import resumeEducationReducer from './resumeEducationReducer'
import resumeSkillsReducer from './resumeSkillsReducer'
import portfolioReducer from './portfolioReducer'

const rootReducer = combineReducers({
  employment: resumeEmploymentReducer,
  education: resumeEducationReducer,
  skills: resumeSkillsReducer,
  portfolio: portfolioReducer,
})

export default rootReducer
