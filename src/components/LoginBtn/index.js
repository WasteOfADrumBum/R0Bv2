import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './_loginBtn.scss'

const LoginBtn = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <button
      className="loginBtn btn btn-primary btn-block btn-sm"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  )
}

export default LoginBtn
