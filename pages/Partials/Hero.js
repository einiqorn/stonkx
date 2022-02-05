import Image from 'next/image'
import Link from 'next/link'

import GithubPagesPrefix from '../../components/utils/GithubWorkaround'
import imageLoader from '../../components/utils/ImageLoader'

import HeroImage from '../../public/static/images/dominique-einhorn.jpg'

function Hero({ lang = 'en' }) {
  const text = {
    headline: {
      en: "I've scammed thousands of investors just like you.",
      fr: "Tous les jour, j'arnaque des milliers d'investisseurs.",
    },
    subheading: {
      en: "Today, I'm going to show you how.",
      fr: "Aujourd'hui, je vous montre comment faire.",
    },
    cta: {
      en: 'Learn my secrets',
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
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">
          {/* Hero */}
          <div className="max-w-xl mx-auto space-y-16 md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 md:space-y-0">
            {/* Hero content */}
            <div
              className="text-center md:text-left md:min-w-[30rem]"
              data-aos="fade-right"
            >
              {/* Hero Text */}
              <h1 className="mb-4 h1 font-playfair-display text-slate-100">
                {text.headline[lang]}
              </h1>
              <p className="mb-8 text-xl text-slate-400">
                {text.subheading[lang]}
              </p>
              {/* CTA */}
              <div className="max-w-xs mx-auto space-y-4 sm:max-w-none sm:flex sm:justify-center md:justify-start sm:space-y-0 sm:space-x-4">
                <div>
                  <Link href={`${GithubPagesPrefix()}/`} passHref>
                    <a className="w-full text-white bg-blue-600 btn hover:bg-blue-700 group">
                      {text.cta[lang]}{' '}
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
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div
                    className="absolute inset-0 mt-3 ml-3 translate-x-4 translate-y-4 border-2 pointer-events-none border-slate-700 -z-10"
                    aria-hidden="true"
                  />
                  <div className="relative mx-auto h-80 w-80 md:max-w-none md:w-96 md:h-96">
                    <Image
                      loader={imageLoader}
                      src={HeroImage}
                      alt="Dominique Einhorn"
                      layout="fill"
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
