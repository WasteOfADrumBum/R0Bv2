import React from 'react'
import { License } from '../../components'

const Footer = () => (
  <>
    <div className="container">
      <License />
    </div>
    <footer className="bg-light p-3 mb-2 text-center">
      <p>
        The R0B project is provided to you by{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.JoshuaMSmall.com"
        >
          Joshua M. Small
        </a>
      </p>
    </footer>
  </>
)

export default Footer
