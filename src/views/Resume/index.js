import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { ResumeCMS, ResumeRender, ScrollToTop } from '../../components'
import './_resume.scss'

const Resume = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <div className="resume">
      <div className="resumeHdr m-0 m-auto mb-2 text-center text-uppercase">
        Resume
      </div>
      {isAuthenticated && <ResumeCMS />}
      <ResumeRender />
      <ScrollToTop />
    </div>
  )
}

export default Resume
