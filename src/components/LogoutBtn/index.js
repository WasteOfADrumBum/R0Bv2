import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './_logoutBtn.scss'

const LogoutBtn = () => {
  const { logout } = useAuth0()
  return (
    <button
      className="logoutBtn btn btn-danger btn-block btn-sm"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  )
}

export default LogoutBtn
