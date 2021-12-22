import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { PortfolioCMS, PortfolioRender, ScrollToTop } from '../../components'
import './_portfolio.scss'

const Portfolio = () => {
  const { isAuthenticated } = useAuth0()

  if (isAuthenticated) {
  }

  return (
    <div className="portfolio">
      <div className="portfolioHdr m-0 m-auto mb-2 text-center text-uppercase">
        Portfolio
      </div>
      <div className="text-center mb-5">
        <i>
          Here's a few projects I've worked on. Some of these are behind admin
          walls, but feel free to reach out to me for details.
        </i>
      </div>
      {isAuthenticated && <PortfolioCMS />}
      <PortfolioRender />
      <ScrollToTop />
    </div>
  )
}

export default Portfolio
