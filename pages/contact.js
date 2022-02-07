import dynamic from 'next/dynamic'

import BasePage from '../components/BasePage'
import ContactHero from './Partials/ContactHero'
import Mobsponiqorns from './Partials/Mobsponiqorns'

const ContactForm = dynamic(() => import('./Partials/ContactForm'))

export default function Home({ location }) {
  return (
    <BasePage location={location} headerMode="dark">
      <ContactHero />
      <ContactForm />
      <Mobsponiqorns />
    </BasePage>
  )
}
