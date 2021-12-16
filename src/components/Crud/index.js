import React from 'react'
import CodeSnippets from './CrudSnippets/index.js'
import CrudInput from './Input/index.js'
import CrudDisplay from './Display/index.js'
import './_crud.scss'

const Crud = () => {
  return (
    <div className="crud">
      <h2 className="text-center my-5">
        Let's Checkout This MERN-Stack CRUD Example
      </h2>
      <p>
        CRUD is an acronym that comes from the world of computer programming and
        refers to the four functions that are considered necessary to implement
        a persistent storage application: create, read, update and delete.
        Persistent storage refers to any data storage device that retains power
        after the device is powered off, such as a hard disk or a solid-state
        drive. In contrast, random access memory and internal caching are two
        examples of volatile memory - they contain data that will be erased when
        they lose power.
      </p>
      <i>© Sumo Logic</i>
      <div className="crudSnippetBrief row my-5">
        <div className="col-md-6 p-5">
          <div className="d-grid fs-1 text-center text-info">
            <div className="g-col-3">
              <i className="bi bi-pencil" />
            </div>
            <div className="g-col-3">
              <i className="bi bi-book" />
            </div>
            <div className="g-col-3">
              <i className="bi bi-arrow-clockwise" />
            </div>
            <div className="g-col-3">
              <i className="bi bi-trash" />
            </div>
          </div>
          <div className="d-grid text-uppercase text-center">
            <div className="g-col-3">Create</div>
            <div className="g-col-3">Read</div>
            <div className="g-col-3">Update</div>
            <div className="g-col-3">Delete</div>
          </div>
          <div className="d-grid">
            <div className="g-col-12">
              <hr className="text-info w-100 border border-2 border-info opacity-100" />
            </div>
          </div>
          <div className="d-grid fs-1 fw-bolder text-uppercase text-center">
            <div className="g-col-3">C</div>
            <div className="g-col-3">R</div>
            <div className="g-col-3">U</div>
            <div className="g-col-3">D</div>
          </div>
        </div>
        <div className="col-md-6 m-auto">
          <p>
            This CRUD example's data base is being hosted by MongoDB. Try out
            the demo below and see how easy it is to <i>create</i> a new task,
            <i>read</i> your to-do list as well as <i>update</i> and{' '}
            <i>delete</i>.
          </p>
        </div>
      </div>
      {/* Code Snippets */}
      <CodeSnippets />
      <br />
      {/* CDN */}
      <CrudInput />
      {/* List */}
      <CrudDisplay />
    </div>
  )
}
export default Crud
