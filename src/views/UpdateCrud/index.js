import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import UpdateCrud from '../../components/Crud/Update'

const UpdateCrudView = () => {
  const { isAuthenticated, user } = useAuth0()
  const { email } = user

  return (
    <>
      <h2 className="text-center">Update Crud</h2>
      {isAuthenticated && email && email === 'jmsmall89@gmail.com' && (
        <UpdateCrud />
      )}
    </>
  )
}

export default UpdateCrudView
