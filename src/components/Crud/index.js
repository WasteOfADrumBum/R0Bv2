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
      <div className="crudSnippetBrief my-5">
        <img
          src="/assets/images/crud.png"
          className="img-fluid m-auto"
          alt="..."
        />
        <div className="m-auto">
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
