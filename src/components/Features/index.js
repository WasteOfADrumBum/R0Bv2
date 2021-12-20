import React from 'react'
import './_features.scss'

const Features = () => {
  return (
    <>
      <h2 className="mt-5 text-center">Check Out These Features</h2>
      <div className="p-3 component features">
        <div className="mernStack">
          <div className="mernStackImg m-auto">
            <img
              src="/assets/images/mern-stack.png"
              className="p-5 img-fluid"
              alt="..."
            />
          </div>
          <div className="mernStackDesc text-left m-auto">
            <h3 className="mernStackHdr">
              The <span className="mongoDB">M</span>.
              <span className="express">E</span>.
              <span className="react">R</span>.<span className="node">N</span>.
              Stack ↓
            </h3>
            <ul>
              <li>
                <b className="mongoDB">MongoDB</b>
                <b>:</b> The document-based open source database
              </li>
              <li>
                <b className="express">Express</b>
                <b>:</b> The Fast, unopinionated, minimalist framework for
                Node.js
              </li>
              <li>
                <b className="react">React</b>
                <b>:</b> The front-end JavaScript library for building user
                interfaces
              </li>
              <li>
                <b className="node">Node.js</b>
                <b>:</b> The JavaScript runtime built on Chrome’s V8 JavaScript
                engine. Node.js brings JavaScript to the server
              </li>
            </ul>
          </div>
        </div>
        <div className="pb-3 text-left row">
          <div className="col">
            <b>React</b> is an open-source JavaScript frontend framework for
            building an intuitive and interactive user interface. It is widely
            adopted and a top choice among developers because of its great
            performance and simplicity in the rapid development of Single-Page
            Applications.
          </div>
        </div>
        <div className="pb-3 text-left row">
          <div className="col">
            <b>MongoDB</b> is a schema-less NoSQL database that can receive and
            store data in JSON-like documents. It takes away the idea of
            thinking and visualizing a database table in rows and columns. It
            allows you to be more productive by building JavaScript applications
            in a JSON format, making it not strange to any JavaScript developer.
            It supports arrays and nested objects values and allows for flexible
            and dynamic schemas. It is often used with
            <b> Mongoose</b>, an Object Data Modeling (ODM) library, that helps
            to manage relationships between data and provides schema
            validations.
          </div>
        </div>
        {/* <div className="pb-3 text-left row">
          <div className="col">
            <b>TypeScript</b>, as described on its official website, is a
            superset of JavaScript that compiles down to plain JavaScript. It
            was designed and developed to help improve the productivity of
            developers when building large and complex programs by adding extra
            features that ensure the successful development of awesome
            applications with fewer bugs.
          </div>
        </div> */}
        <div className="pb-3 text-left row">
          <div className="col">
            <b>Express:</b> Express is a fast and lightweight web framework for
            Node.js. Express is an essential part of the MERN stack.
          </div>
        </div>
        <div className="pb-3 text-left row">
          <div className="col">
            <b>Redux:</b> Redux helps you write applications that behave
            consistently, run in different environments (client, server, and
            native), and are easy to test. Centralizing your application's state
            and logic enables powerful capabilities like undo/redo, state
            persistence, and much more. The Redux DevTools make it easy to trace
            when, where, why, and how your application's state changed. Redux's
            architecture lets you log changes, use "time-travel debugging", and
            even send complete error reports to a server. Redux works with any
            UI layer, and has a large ecosystem of addons to fit your needs.
          </div>
        </div>

        <div className="pb-5 text-center row">
          <div className="col">
            <i>© Modern Full-Stack Development - Olususi Oluyemi</i>
          </div>
        </div>
      </div>
    </>
  )
}
export default Features
