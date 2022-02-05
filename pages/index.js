import BasePage from '../components/BasePage'
import Hero from './Partials/Hero'
import Mobsponiqorns from './Partials/Mobsponiqorns'

export default function Home({ location, lang, setLang }) {
  return (
    <BasePage
      location={location}
      headerMode="dark"
      lang={lang}
      setLang={setLang}
    >
      <Hero lang={lang} />
      <Mobsponiqorns />
    </BasePage>
  )
}
