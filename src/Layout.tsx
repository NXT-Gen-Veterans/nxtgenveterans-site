// import React from 'react'
// import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import "assets/index.css"
import { ReactElement } from 'react'

function Layout(): ReactElement {

  return (
    <div>
      <div>Layout</div>
      <Outlet />
    </div>
  )
}

Layout.propTypes = {}

export default Layout
