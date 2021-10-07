import React from 'react'
import { useHistory } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory()
  const domain = process.env.REACT_APP_AUTH0_DOMAIN
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE

  // handle the event where Auth0 redirects users from the Auth0 Login page to App
  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname)
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithHistory
