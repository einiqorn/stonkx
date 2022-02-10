import { useRouter } from 'next/router'

export default function ContactHero() {
  const router = useRouter()
  const { locale } = router
  const text = {
    heroHeading: {
      en: 'Want to get in touch?',
      fr: 'Vous voulez nous parler ?',
    },
    heroSubHeading: {
      en: 'Fill in the form below and speak your mind.',
      fr: 'Utilisez ce formulaire pour nous dire ce que vous pensez.',
    },
  }
  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 pointer-events-none bg-slate-900 -z-10"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 h1 font-playfair-display text-slate-100">
              {text.heroHeading[locale]}
            </h1>
            <p className="mb-8 text-xl text-slate-400">
              {text.heroSubHeading[locale]}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
