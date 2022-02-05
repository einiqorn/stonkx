import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import AOS from 'aos'

import '../styles/globals.scss'

function TopStonk({ Component }) {
  const [lang, setLang] = useState(null)
  const router = useRouter()
  const location = router.pathname

  // Attempt to detect language
  const hasWindow = typeof window !== 'undefined'
  if (hasWindow && !lang) {
    setLang(navigator.language.slice(0, 2) === 'fr' ? 'fr' : 'en')
  }

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

  return <Component location={location} lang={lang} setLang={setLang} />
}

export default TopStonk
