import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const PortfolioCMS = () => {
  const { user } = useAuth0()
  const { email } = user
  return (
    <>
      {' '}
      {email && email === 'jmsmall89@gmail.com' && (
        <>
          <hr />
          <h3 className="text-center">Porfolio CMS</h3>
          <hr />
        </>
      )}
    </>
  )
}

export default PortfolioCMS
