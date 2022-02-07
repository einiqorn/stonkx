import BasePage from '../partials/BasePage'
import Hero from '../partials/Hero'
import Mobsponiqorns from '../partials/Mobsponiqorns'

export default function Home({ location }) {
  return (
    <BasePage location={location} headerMode="dark">
      <Hero />
      <Mobsponiqorns />
    </BasePage>
  )
}
