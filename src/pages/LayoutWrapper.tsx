import { ComponentType, ReactElement, useEffect, useRef } from 'react'
import { useLocation } from "react-router-dom"

import { useGlobalStore } from 'store';

import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import NewsLetter from "components/NewsLetter/NewsLetter"

import "assets/index.css"

type LayoutWrapperProps = {
  ComponentPage: ComponentType<object>
}

function LayoutWrapper({ ComponentPage }: LayoutWrapperProps): ReactElement {
  const {pathname} = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);
  const {setPageScrolled, isPageScrolled} = useGlobalStore();

  // Reset scroll position on navigation
  useEffect(() => {
    window.scrollTo(0,0);
    if (pageRef.current) pageRef.current.scrollTop = 0;
  }, [pathname])

  function handleScroll() {
    if (pageRef.current) {
      if (pageRef.current.scrollTop === 0 && isPageScrolled === true) setPageScrolled(false);
      if (pageRef.current.scrollTop !== 0 && isPageScrolled === false) setPageScrolled(true);
    }
  }

  return (
    <div ref={pageRef} onScroll={handleScroll} className="relative font-inter h-dvh overflow-y-scroll">
      <Navbar />
      <div className="">
        <ComponentPage />
        {pathname == "/resources" ? "" : <NewsLetter />}
        <Footer /> 
      </div>
    </div>
  )
}

LayoutWrapper.propTypes = {}

export default LayoutWrapper
