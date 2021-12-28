import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './_banner.scss'

const AuthBtn = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <>
      {!isAuthenticated && (
        <div className="banner m-auto text-center w-100 text-info fs-6 fw-lighter fst-italic py-2 border border-info border-start-0 border-end-0">
          <i className="bi bi-info-circle-fill me-1" />
          Hey, there stranger! If you'd like to see my CRUD and UX/UI examples,
          take a look at my resume or view my portfolio of other projects then
          you'll need to log in.
        </div>
      )}
    </>
  )
}

export default AuthBtn
