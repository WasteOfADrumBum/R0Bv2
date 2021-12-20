import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { BrowserRouter as Router } from 'react-router-dom'
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'grapesjs/dist/css/grapes.min.css'
import './index.css'

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root'),
)
