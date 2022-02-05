import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import HeroImage from '../../public/static/images/dominique-einhorn.jpg'

function Hero() {
  const router = useRouter()
  const { locale } = router
  const text = {
    headline: {
      'en-US': "I've scammed thousands of investors just like you.",
      fr: "Tous les jours, j'arnaque des milliers d'investisseurs.",
    },
    subheading: {
      'en-US': "Today, I'm going to show you how.",
      fr: "Aujourd'hui, je vous montre comment faire.",
    },
    cta: {
      'en-US': 'Learn my secrets',
      fr: 'Apprenez mes secrets',
    },
  }
  return (
    <section className="relative">
      {/* Dark background bg-slate-900 */}
      <div
        className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]"
        aria-hidden="true"
      />
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-32 pb-20 md:pt-36 md:pb-40">
          {/* Hero */}
          <div className="max-w-xl mx-auto space-y-16 md:max-w-none lg:flex lg:justify-between lg:items-center lg:space-x-16 xl:space-x-20 lg:space-y-0">
            {/* Hero content */}
            <div
              className="text-center lg:text-left lg:min-w-[30rem]"
              data-aos="fade-right"
            >
              {/* Hero Text */}
              <h1 className="mx-auto mb-4 lg:max-w-lg h1 font-playfair-display text-slate-100">
                {text.headline[locale]}
              </h1>
              <p className="mb-8 text-xl text-slate-400">
                {text.subheading[locale]}
              </p>
              {/* CTA */}
              <div className="max-w-xs mx-auto space-y-4 sm:max-w-none sm:flex sm:justify-center lg:justify-start sm:space-y-0 sm:space-x-4">
                <div>
                  <Link href="/" passHref>
                    <a className="w-full text-white bg-blue-600 btn hover:bg-blue-700 group">
                      {text.cta[locale]}{' '}
                      <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                        -&gt;
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* Hero image */}
            <div data-aos="fade-left">
              {/* Image */}
              <div className="flex justify-center items-right">
                <div className="relative">
                  <div
                    className="absolute inset-0 mt-2 ml-2 translate-x-4 translate-y-2 border-2 pointer-events-none border-slate-700 -z-10"
                    aria-hidden="true"
                  />
                  <div className="relative mx-auto md:max-w-none">
                    <Image
                      src={HeroImage}
                      alt="Dominique Einhorn"
                      width={450}
                      height={450}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
