import React from 'react'
import { Crud, ScrollToTop } from '../../components'
import './_crud.scss'

const CRUD = () => (
  <div className="crud">
    <div className="crudHdr m-0 m-auto mb-2 text-center text-uppercase">
      CRUD
    </div>
    <div className="text-center mb-5">
      <i>Let's Checkout This MERN-Stack CRUD Example</i>
    </div>
    <Crud />
    <ScrollToTop />
  </div>
)

export default CRUD
