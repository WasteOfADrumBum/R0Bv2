import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import CreateEducation from './CreateEducation'
import CreateEmployment from './CreateEmployment'
import CreateSkills from './CreateSkills'
import './_resumeCMS.scss'

const ResumeCMS = () => {
  const { user } = useAuth0()
  const { email } = user

  return (
    <>
      {' '}
      {email && email === 'jmsmall89@gmail.com' && (
        <div className="resumeCMS">
          <hr />
          <h3 className="text-center">Resume CMS</h3>
          <div className="resumeCMSFormContainer">
            <CreateEducation />
            <CreateEmployment />
            <CreateSkills />
          </div>
          <hr />
        </div>
      )}
    </>
  )
}

export default ResumeCMS
