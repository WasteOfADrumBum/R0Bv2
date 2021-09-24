import { NavLink } from 'react-router-dom'
import React from 'react'

const MainNav = () => (
  <div className="navbar-nav me-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    <NavLink
      to="/crud"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      CRUD
    </NavLink>
    {/* <NavLink
      to="/external-api"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      External API
    </NavLink> */}
    <NavLink
      to="/creator"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Creator
    </NavLink>
    <NavLink
      to="/portfolio"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Portfolio
    </NavLink>
    <NavLink
      to="/resume"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      CV
    </NavLink>
    <NavLink
      to="/profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Profile
    </NavLink>
  </div>
)

export default MainNav
