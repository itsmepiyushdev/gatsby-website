import { Link } from 'gatsby'
import React, { useState } from 'react'

const Header = () => {
const [isToggleOpen, setIsToggleOpen] = useState(false)
  return (
    <>
        <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <Link to="/"
              id="website_logo"
              aria-label="My Website Logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
               
            >
              <svg className="_1nrsgum" width="91" height="24" fill="#663399" viewBox="0 0 106 28"><g><path d="M14,0C6.3,0,0,6.3,0,14s6.3,14,14,14s14-6.3,14-14S21.7,0,14,0z M6.2,21.8c-2.1-2.1-3.2-4.9-3.2-7.6L13.9,25 C11.1,24.9,8.3,23.9,6.2,21.8z M16.4,24.7L3.3,11.6C4.4,6.7,8.8,3,14,3c3.7,0,6.9,1.8,8.9,4.5l-1.5,1.3C19.7,6.5,17,5,14,5 c-3.9,0-7.2,2.5-8.5,6L17,22.5c2.9-1,5.1-3.5,5.8-6.5H18v-2h7C25,19.2,21.3,23.6,16.4,24.7z"></path></g><g fill="#000"><path d="M62.9,12h2.8v10h-2.8v-1.3c-1,1.5-2.3,1.6-3.1,1.6c-3.1,0-5.1-2.4-5.1-5.3c0-3,2-5.3,4.9-5.3c0.8,0,2.3,0.1,3.2,1.6V12z M57.7,17c0,1.6,1.1,2.8,2.8,2.8c1.6,0,2.8-1.2,2.8-2.8c0-1.6-1.1-2.8-2.8-2.8C58.9,14.2,57.7,15.4,57.7,17z"></path><path d="M71.2,14.4V22h-2.8v-7.6h-1.1V12h1.1V8.6h2.8V12h1.9v2.4H71.2z"></path><path d="M79.7,14.4c-0.7-0.6-1.3-0.7-1.6-0.7c-0.7,0-1.1,0.3-1.1,0.8c0,0.3,0.1,0.6,0.9,0.9l0.7,0.2c0.8,0.3,2,0.6,2.5,1.4 c0.3,0.4,0.5,1,0.5,1.7c0,0.9-0.3,1.8-1.1,2.5c-0.8,0.7-1.8,1.1-3,1.1c-2.1,0-3.2-1-3.9-1.7l1.5-1.7c0.6,0.6,1.4,1.2,2.2,1.2 c0.8,0,1.4-0.4,1.4-1.1c0-0.6-0.5-0.9-0.9-1l-0.6-0.2c-0.7-0.3-1.5-0.6-2.1-1.2c-0.5-0.5-0.8-1.1-0.8-1.9c0-1,0.5-1.8,1-2.3 c0.8-0.6,1.8-0.7,2.6-0.7c0.7,0,1.9,0.1,3.2,1.1L79.7,14.4z"></path><path d="M85.8,13.3c1-1.4,2.4-1.6,3.2-1.6c2.9,0,4.9,2.3,4.9,5.3c0,3-2,5.3-5,5.3c-0.6,0-2.1-0.1-3.2-1.6V22H83V5.2h2.8V13.3z M85.5,17c0,1.6,1.1,2.8,2.8,2.8c1.6,0,2.8-1.2,2.8-2.8c0-1.6-1.1-2.8-2.8-2.8C86.6,14.2,85.5,15.4,85.5,17z"></path><path d="M98.5,20.5L93.7,12H97l3.1,5.7l2.8-5.7h3.2l-8,15.3h-3.2L98.5,20.5z"></path><path d="M54,13.7h-2.8c0,0-4.2,0-4.2,0v2.8h3.7c-0.6,1.9-2,3.2-4.6,3.2c-2.9,0-5-2.4-5-5.3S43.1,9,46,9c1.6,0,3.2,0.8,4.2,2.1 l2.3-1.5C51,7.5,48.6,6.3,46,6.3c-4.4,0-8,3.6-8,8.1s3.4,8.1,8,8.1s8-3.6,8-8.1C54.1,14.1,54,13.9,54,13.7z"></path></g></svg>
              Gatsby Website Logo
            </Link>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <Link to="/"
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-orange-500 focus:bg-orange-50 focus:outline-none focus-visible:outline-none lg:px-8"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-orange-600 focus:bg-orange-50 focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/features"
                >
                  <span>Features</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link 
                  to="/pricing"
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-orange-500 focus:bg-orange-50 focus:outline-none focus-visible:outline-none lg:px-8"
                  
                >
                  <span>Pricing</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link to="/about"
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-orange-500 focus:bg-orange-50 focus:outline-none focus-visible:outline-none lg:px-8"
                >
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header