import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { PortfolioCMS, PortfolioRender } from '../../components'

const Portfolio = () => {
  const { isAuthenticated } = useAuth0()

  if (isAuthenticated) {
  }

  return (
    <>
      <h2 className="text-center">Portfolio</h2>
      {isAuthenticated && <PortfolioCMS />}
      <PortfolioRender />
    </>
  )
}

export default Portfolio
