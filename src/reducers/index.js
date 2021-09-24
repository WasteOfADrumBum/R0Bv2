import { combineReducers } from 'redux'
import resumeEmploymentReducer from './resumeEmploymentReducer'
import resumeEducationReducer from './resumeEducationReducer'
import resumeSkillsReducer from './resumeSkillsReducer'

const rootReducer = combineReducers({
  employment: resumeEmploymentReducer,
  education: resumeEducationReducer,
  skills: resumeSkillsReducer,
})

export default rootReducer
