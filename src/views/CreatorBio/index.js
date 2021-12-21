import React from 'react'
import { CreatorProfile } from '../../components'
import './_creatorBio.scss'

const CreatorBio = () => (
  <div className="creator">
    <div className="creatorHdr m-0 m-auto mb-2 text-center text-uppercase">
      Developer
    </div>
    <div className="text-center mb-5">
      <i>Who Made This Awesome Application?</i>
    </div>
    <CreatorProfile />
  </div>
)

export default CreatorBio
