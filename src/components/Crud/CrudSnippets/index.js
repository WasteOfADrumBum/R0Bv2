import React from 'react'
import CreateSnippet from './Create'
import ReadSnippet from './Read'
import UpdateSnippet from './Update'
import DeleteSnippet from './Delete'
import './_crudSnippets.scss'

const CrudSnippets = () => {
  return (
    <div className="crudSnippets">
      <div className="crudSnippetDesc my-5">
        <div>
          <h5 className="d-inline">Let's</h5>
          <h2 className="d-inline">
            <sub>Look</sub>
          </h2>
          <h4 className="accentColor d-inline ">@</h4>
          <br />
          <h3 className="d-inline">
            <sup>Some</sup>
          </h3>
          <h6 className="d-inline">
            <code className="accentColor">CRUD</code>
          </h6>
          <h4 className="d-inline">Snippets</h4>
        </div>
        <div className="text-left">
          Before having an oppourtunity to demo what a CRUD can do it's time to
          take a look at the code and break it down a bit into more snippets to
          understand what's going on.
        </div>
      </div>
      <div>
        <CreateSnippet />
        <ReadSnippet />
        <UpdateSnippet />
        <DeleteSnippet />
      </div>
    </div>
  )
}

export default CrudSnippets
