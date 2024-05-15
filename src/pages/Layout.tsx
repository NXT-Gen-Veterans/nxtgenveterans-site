import { Outlet } from 'react-router-dom'
import "assets/index.css"
import { ReactElement } from 'react'
import Navbar from 'components/Navbar/Navbar'

function Layout(): ReactElement {

  return (
    <div className="relative font-inter h-dvh overflow-clip">
      <Navbar />
      <div className="overflow-y-scroll h-full">
        <Outlet />
      </div>
    </div>
  )
}

Layout.propTypes = {}

export default Layout
