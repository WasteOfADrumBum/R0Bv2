import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import UpdateEmployment from '../../components/ResumeCMS/UpdateEmployment'

const UpdateEmploymentView = () => {
  const { isAuthenticated, user } = useAuth0()
  const { email } = user

  return (
    <>
      <h2 className="text-center">Update Employment</h2>
      {isAuthenticated && email && email === 'jmsmall89@gmail.com' && (
        <UpdateEmployment />
      )}
    </>
  )
}

export default UpdateEmploymentView
