import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { ResumeCMS, ResumeRender, ScrollToTop } from '../../components'

const Resume = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <h2 className="text-center">Resume</h2>
      {isAuthenticated && <ResumeCMS />}
      <ResumeRender />
      <ScrollToTop />
    </>
  )
}

export default Resume
