import BasePage from '../components/BasePage'
import Hero from './Partials/Hero'
import Mobsponiqorns from './Partials/Mobsponiqorns'

export default function Home({ location }) {
  return (
    <BasePage location={location} headerMode="dark">
      <Hero />
      <Mobsponiqorns />
    </BasePage>
  )
}
