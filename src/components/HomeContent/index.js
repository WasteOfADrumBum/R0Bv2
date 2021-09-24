import React from 'react'
import { CardDeck } from '../../components'
import CodeSnippets from '../CodeSnippets/CodeSnippet'
import Features from '../Features'
import './_homeContent.scss'

const HomeContent = () => (
  <div className="homeContent">
    {/* Application Motivation */}
    <h2 className="my-5 text-center">The Motivation Behind This Application</h2>
    <p className="mb-5">
      This project exisits to show my passion for coding. It has been built with
      all my favorite libraries, languages and dependencies. I was motivated to
      put together a clean application that showcased the abilities of some of
      the most lucrative programming that's on the web today. I plan on
      periodically updating this page with fun new components and features to
      grow and develop my skillset in the information technology industry. As a
      web developer my abilities will only mature with my ability to learn and
      practice my skills when sharing them with the world.
    </p>
    {/* Primary Languges */}
    <p className="mb-5">
      <b>Languages:</b> I chose to use React.js as the foundation of the user
      interface, Auth0 for the Authentication and authorization platform as well
      as Bootstrap's CSS Framework for developing a responsive and mobile-first
      website.
    </p>
    <hr />
    <CardDeck />
    <hr />
    {/* JavaScript CodeStyle */}
    <h2 className="my-5 text-center">Code Style, What is it!?</h2>
    <p className="mb-5">
      The beauty of JavaScript Standard Style is that it's simple. No one wants
      to maintain multiple hundred-line style configuration files for every
      module/project you work on.
    </p>
    <div className="javascriptContainer">
      <h4 className="m-auto text-center text-uppercase">
        Why I Use JavaScript Standard Style
      </h4>
      <div className="text-left m-auto">
        <ul className="list-group">
          <li className="list-group-item">
            No configuration. Enforce consistent style in a project. It's easy,
            just drop it in.
          </li>
          <li className="list-group-item my-1">
            Automatically format code. Say goodbye to messy or inconsistent
            code.
          </li>
          <li className="list-group-item">
            Catch style issues & programmer errors early. Saving review time by
            eliminating back-and-forth between reviewer & contributor.
          </li>
        </ul>
      </div>
      <div className="m-auto text-center javascriptImg">
        <img
          src="/assets/images/standard-javascript.png"
          className="img-fluid "
          alt="..."
        />
      </div>
    </div>
    <div className="row my-4 javascriptBtn">
      <div className="col text-center">
        <button
          type="button"
          className="btn btn-outline-info"
          href="https://github.com/standard/standard"
        >
          JavaScript Standard Style
        </button>
      </div>
    </div>
    <hr />
    {/* Features */}
    <Features />
    <hr />
    {/* Code Snippets */}
    <CodeSnippets />
  </div>
)

export default HomeContent
