import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './_profile.scss'

const Profile = () => {
  const { user } = useAuth0()
  const { name, picture, email, email_verified } = user

  return (
    <div className="profile">
      <img
        src={picture}
        alt="Profile"
        className="profilePicture rounded-circle img-fluid mb-3 mb-md-0"
      />
      <div className="hdr">
        <h2 className="name">{name}</h2>
        <p className="email lead text-muted">
          {email}
          {email_verified ? (
            <sup className="verified p-1">
              <i className="far fa-check-square"></i>
            </sup>
          ) : (
            <p className="unverified text-end">
              Please Verify Your Email Address
            </p>
          )}
        </p>
      </div>

      <pre className="infoDump col-12 text-light bg-dark p-4 my-4">
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  )
}

export default Profile
