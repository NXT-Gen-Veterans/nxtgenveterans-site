import "assets/index.css"
import { ComponentType, ReactElement, useEffect, useRef } from 'react'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import { useLocation } from "react-router-dom"

type LayoutWrapperProps = {
  ComponentPage: ComponentType<object>
}

function LayoutWrapper({ ComponentPage }: LayoutWrapperProps): ReactElement {
  const {pathname} = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);

  // Reset scroll position on navigation
  useEffect(() => {
    window.scrollTo(0,0);
    if (pageRef.current) pageRef.current.scrollTop = 0;
  }, [pathname])

  return (
    <div ref={pageRef} className="relative font-inter h-dvh overflow-y-scroll">
      <Navbar />
      <div className=" pt-[4.5rem] lg:pt-24">
        <ComponentPage />
        <Footer /> 
      </div>
    </div>
  )
}

LayoutWrapper.propTypes = {}

export default LayoutWrapper
