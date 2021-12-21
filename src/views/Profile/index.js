import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { ReactCountryFlagComponent } from '../../components'
import './_profile.scss'

const Profile = () => {
  const { user } = useAuth0()
  const { name, picture, email, email_verified, locale } = user

  return (
    <div className="profile">
      <div className="profileHdr m-0 m-auto mb-2 text-center text-uppercase">
        Profile
      </div>
      <div className="profileContainer">
        <div className="hdr">
          {/* Profile Picture */}
          <img
            src={picture}
            alt="Profile"
            className="profilePicture rounded-circle img-fluid mb-3 mb-md-0"
          />
          {/* Name */}
          <h2 className="name m-0 p-0">{name}</h2>
          {/* Email */}
          <p className="location lead text-muted m-0 p-0">
            <ReactCountryFlagComponent countryCode={locale} />
          </p>
          {/* Email */}
          <p className="email lead text-muted m-0 p-0">
            <i className="far fa-envelope" /> {email}
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

        <div className="infoDumpWrap">
          <img
            src="./assets/images/laptop.png"
            alt="phone"
            className="phoneImg img-fluid p-0 m-0"
          />
          <pre className="infoDump col-12">{JSON.stringify(user, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}

export default Profile
