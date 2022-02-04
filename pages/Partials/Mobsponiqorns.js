import Image from 'next/image'

import imageLoader from '../../components/utils/ImageLoader'

import MobcastLogo from '../../public/static/images/mobsponiqorns/mobcast.png'
import CXLogo from '../../public/static/images/mobsponiqorns/challengerx.png'
import FormationLogo from '../../public/static/images/mobsponiqorns/formationgg.png'
import UniqornLogo from '../../public/static/images/mobsponiqorns/uniqorn.png'
import PowerclickLogo from '../../public/static/images/mobsponiqorns/powerclickcom.png'

function Logo({ logo, width, height, altText }) {
  return (
    <div
      className="mx-16 my-4 md:m-8 brightness-200"
      data-aos="fade-up"
      data-aos-anchor="[data-aos-id-mobsponiscorns]"
      data-aos-delay="100"
    >
      <Image
        loader={imageLoader}
        src={logo}
        width={width}
        height={height}
        alt={altText}
      />
    </div>
  )
}

function Mobsponiqorns() {
  return (
    <section className="flex justify-center">
      <div className="px-4 sm:px-6">
        <div className="py-8 md:pt-12 md:pb-14">
          <div
            className="flex flex-wrap items-center justify-center -m-4 md:-m-8"
            data-aos-id-mobsponiscorns
          >
            <Logo
              logo={PowerclickLogo}
              width="200"
              height="31"
              altText="Powerclick.com"
            />
            <Logo
              logo={UniqornLogo}
              altText="Uniqorn"
              width="160"
              height="26"
            />
            <Logo logo={CXLogo} width="250" height="40" alt="ChallengerX" />
            <Logo
              logo={MobcastLogo}
              width="165"
              height="18"
              alt="Mobcast"
              className="px-8"
            />
            <Logo
              logo={FormationLogo}
              width="135"
              height="30"
              alt="Formation"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mobsponiqorns
