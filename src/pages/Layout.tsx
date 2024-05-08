import { Outlet } from 'react-router-dom'
import "assets/index.css"
import { ReactElement } from 'react'

function Layout(): ReactElement {

  return (
    <div>
      <div>
        <h1>Layout</h1>
      </div>
      <Outlet />
    </div>
  )
}

Layout.propTypes = {}

export default Layout
