import { ComponentType, ReactElement, useEffect, useRef } from 'react'
import { useLocation } from "react-router-dom"

import { RouteType, useGlobalStore } from 'store';

import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import NewsLetter from "components/NewsLetter/NewsLetter"

import "assets/index.css"

import { ThemeProvider, useMediaQuery } from "@mui/material";
import { globalTheme } from './themes';

type LayoutWrapperProps = {
  ComponentPage: ComponentType<object>
}

function LayoutWrapper({ ComponentPage }: LayoutWrapperProps): ReactElement {
  const {pathname} = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);
  const {setPageScrolled, isPageScrolled, navTabValue, setNavTabValue, setScreenValue} = useGlobalStore(state => state);
  const largeScreen = useMediaQuery("(min-width:1024px)");
  const tabletScreen = useMediaQuery("(min-width:768px)");


  // Reset scroll position on navigation
  useEffect(() => {
    window.scrollTo(0,0);
    if (pageRef.current) pageRef.current.scrollTop = 0;
  }, [pathname])

  // Change nav tab value on route change
  useEffect(() => {
    setNavTabValue(
      pathname === "/" ?
      "home"
      : (["home", "about", "contact", "bootcamp", "resources"] as RouteType[]).filter(route => (
        pathname.includes(route)
      ))[0]
    )
  }, [pathname, setNavTabValue])

  // Set the viewport width globally
  useEffect(() => {
    if (largeScreen) { setScreenValue("lg") }
    else if (tabletScreen) { setScreenValue("md") }
    else { setScreenValue("sm") }
  }, [largeScreen, tabletScreen, setScreenValue])

  // Handle page scroll state for navbar aesthetic effects
  function handleScroll() {
    if (pageRef.current) {
      if (pageRef.current.scrollTop === 0 && isPageScrolled === true) setPageScrolled(false);
      if (pageRef.current.scrollTop !== 0 && isPageScrolled === false) setPageScrolled(true);
    }
  }

  return (
    <ThemeProvider theme={globalTheme}>
      <div ref={pageRef} onScroll={handleScroll} className="relative font-inter h-dvh overflow-y-scroll">
        <Navbar />
        <div
          role="tabpanel"
          id={`${navTabValue}-panel`}
          aria-labelledby={`${navTabValue}-tab`}
        >
          <ComponentPage />
          {pathname == "/resources" ? "" : <NewsLetter />}
          <Footer /> 
        </div>
      </div>
    </ThemeProvider>
  )
}

export default LayoutWrapper;
