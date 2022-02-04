import BasePage from '../components/BasePage'
import Hero from './Partials/Hero'
import Mobsponiqorns from './Partials/Mobsponiqorns'

export default function Home({ location, lang }) {
  return (
    <BasePage location={location} headerMode="dark">
      <Hero lang={lang} />
      <Mobsponiqorns />
    </BasePage>
  )
}
