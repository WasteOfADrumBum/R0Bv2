import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Grapes, GreenSock, MUI, ScrollToTop } from '../../components'
import './_uxui.scss'

const UXUI = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <div className="uxui">
      {isAuthenticated && (
        <>
          <GreenSock />
          <hr />
          <Grapes />
          <hr />
          <MUI />
          <ScrollToTop />
        </>
      )}
    </div>
  )
}

export default UXUI
