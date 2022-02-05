import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Transition from './utils/Transition'

/* TODO:
  * Set location prop on links
  * Create link items component:
    - Give it a mobile/desktop prop from which classNames are set, and;
    - Map to a locations object in each menu.
*/

// eslint-disable-next-line no-unused-vars
function Header({ location, headerMode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [top, setTop] = useState(true)

  const trigger = useRef(null)
  const mobileNav = useRef(null)

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
                <Link href="/">
                  <a className="flex items-center px-3 py-2 font-medium transition duration-150 ease-in-out text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 lg:px-5">
                    Stuff
                  </a>
                </Link>
              </li>
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
                  <li>
                    <Link href="/">
                      <a className="flex py-2 font-medium text-slate-800 hover:text-blue-600">
                        Stuff
                      </a>
                    </Link>
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
