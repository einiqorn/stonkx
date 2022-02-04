import BasePage from '../components/BasePage'
import Hero from './Partials/Hero'

export default function Home({ location }) {
  return (
    <BasePage location={location} headerMode="dark">
      <Hero />
    </BasePage>
  )
}
