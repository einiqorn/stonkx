import { useEffect } from 'react'
import { useRouter } from 'next/router'

import AOS from 'aos'

import '../styles/globals.scss'

function TopStonk({ Component }) {
  const router = useRouter()
  const location = router.pathname
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 500,
      easing: 'ease-out-cubic',
    })
  })

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'smooth'
    window.scroll({ top: 0 })
    document.body.className =
      'antialiased tracking-tight bg-white font-inter text-slate-800'
  }, [location.pathname])

  return <Component location={location} />
}

export default TopStonk
