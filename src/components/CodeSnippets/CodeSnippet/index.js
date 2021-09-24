import React from 'react'
import Auth0Snippets from '../Auth0Snippet'
import ReactSnippets from '../ReactSnippet'
import BootstrapSnippets from '../BootstrapSnippet'
import '../_codeSnippets.scss'

const CodeSnippets = () => {
  return (
    <div className="codeSnippet">
      <div className="codeSnippetDesc my-5">
        <div>
          <h5 className="d-inline">Let's</h5>
          <h2 className="d-inline">
            <sub>Look</sub>
          </h2>
          <h4 className="accentColor d-inline">@</h4>
          <br />
          <h3 className="d-inline">
            <sup>Some</sup>
          </h3>
          <h6 className="d-inline">
            <code className="accentColor">Code</code>
          </h6>
          <h4 className="d-inline">Snippets</h4>
        </div>
        <div className="text-left">
          As a company you want to enable your developers to use open source
          software, and as a developer you want the flexibility of using both
          whole components and re-using files or partial code snippets
          originating from open source projects. Below I'm going to go over a
          few snippets of code showing the work behind the curtain.
        </div>
      </div>
      <div>
        <ReactSnippets />
        <Auth0Snippets />
        <BootstrapSnippets />
      </div>
    </div>
  )
}

export default CodeSnippets
