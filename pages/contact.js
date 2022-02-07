import dynamic from 'next/dynamic'

import BasePage from '../partials/BasePage'
import ContactHero from '../partials/ContactHero'
import Mobsponiqorns from '../partials/Mobsponiqorns'

const ContactForm = dynamic(() => import('../partials/ContactForm'))

export default function Home({ location }) {
  return (
    <BasePage location={location} headerMode="dark">
      <ContactHero />
      <ContactForm />
      <Mobsponiqorns />
    </BasePage>
  )
}
