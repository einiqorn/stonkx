/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useEffect } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import Transition from '../utils/Transition'

/* TODO:
  * Set location prop on links
  * Create link items component:
    - Give it a mobile/desktop prop from which classNames are set, and;
    - Map to a locations object in each menu.
*/

function Dropdown({ children, title }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <li
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
      onFocus={() => setDropdownOpen(true)}
      onBlur={() => setDropdownOpen(false)}
    >
      <a
        className="flex items-center px-3 py-2 font-medium transition duration-150 ease-in-out text-slate-800 dark:text-slate-400 lg:px-5"
        href="#0"
        aria-expanded={dropdownOpen}
        onClick={(e) => e.preventDefault()}
      >
        {title}
        <svg
          className="w-3 h-3 ml-1 cursor-pointer fill-current text-slate-400 dark:text-slate-500 shrink-0"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
        </svg>
      </a>
      <Transition
        show={dropdownOpen}
        tag="ul"
        className="absolute right-0 w-40 py-2 ml-4 origin-top-right bg-white rounded shadow-lg top-full"
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        {children}
      </Transition>
    </li>
  )
}

// eslint-disable-next-line no-unused-vars
function Header({ location, headerMode }) {
  const router = useRouter()
  const { locale } = router
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [top, setTop] = useState(true)

  const trigger = useRef(null)
  const mobileNav = useRef(null)

  const text = {
    contact: {
      en: 'Contact',
      fr: 'Contact',
    },
  }
  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setMobileNavOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      // eslint-disable-next-line no-unused-expressions
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header
      className={`absolute w-full z-30 ${headerMode !== 'light' && 'dark'}`}
    >
      <div className="max-w-6xl px-5 mx-auto sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="pr-4">
            <Link href="/">
              <a className="block pb-1 text-2xl transition duration-150 ease-in-out">
                👍
              </a>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex flex-wrap items-center justify-start grow">
              <li>
                <Link href="/contact">
                  <a className="flex items-center px-3 py-2 font-medium transition duration-150 ease-in-out text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 lg:px-5">
                    {text.contact[locale]}
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="flex flex-wrap items-center justify-end grow">
              <Dropdown title="Language">
                <li>
                  <Link
                    href={router.pathname}
                    locale="en"
                    className="flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900"
                  >
                    <a className="flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900">
                      English
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={router.pathname} locale="fr">
                    <a className="flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900">
                      Français
                    </a>
                  </Link>
                </li>
              </Dropdown>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="flex md:hidden">
            {/* Hamburger button */}
            <button
              type="button"
              ref={trigger}
              className={`hamburger ${mobileNavOpen && 'active'}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-slate-900 dark:text-slate-100"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" />
                <rect y="11" width="24" height="2" />
                <rect y="18" width="24" height="2" />
              </svg>
            </button>

            {/* Mobile navigation */}
            <div ref={mobileNav}>
              <Transition
                show={mobileNavOpen}
                tag="nav"
                id="mobile-nav"
                className="absolute left-0 z-20 w-full h-screen pb-16 overflow-scroll bg-white top-full"
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
              >
                <ul className="px-5 py-2">
                  <li className="py-2 my-2 border-gray-200">
                    <span className="flex py-2 font-medium text-slate-800 hover:text-blue-600">
                      Pages
                    </span>
                    <ul className="pl-4">
                      <li>
                        <Link href="/contact">
                          <a
                            className="flex py-2 text-sm font-medium text-slate-600 hover:text-blue-600"
                            onClick={() => setMobileNavOpen(!mobileNavOpen)}
                          >
                            {text.contact[locale]}
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="py-2 my-2 border-t border-b border-gray-200">
                    <span className="flex py-2 font-medium text-slate-800 hover:text-blue-600">
                      Language
                    </span>
                    <ul className="pl-4">
                      <li>
                        <Link href={router.pathname} locale="en">
                          <a
                            className="flex py-2 text-sm font-medium text-slate-600 hover:text-blue-600"
                            onClick={() => setMobileNavOpen(!mobileNavOpen)}
                          >
                            English
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={router.pathname} locale="fr">
                          <a
                            className="flex py-2 text-sm font-medium text-slate-600 hover:text-blue-600"
                            onClick={() => setMobileNavOpen(!mobileNavOpen)}
                          >
                            Français
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
