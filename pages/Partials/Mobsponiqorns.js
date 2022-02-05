import Image from 'next/image'

import MobcastLogo from '../../public/static/images/mobsponiqorns/mobcast.png'
import CXSportLogo from '../../public/static/images/mobsponiqorns/challengerx.png'
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
      <Image src={logo} width={width} height={height} alt={altText} />
    </div>
  )
}

function Mobsponiqorns() {
  return (
    <section className="flex justify-center">
      <div className="px-4 sm:px-6">
        <div className="py-8 lg:pt-12 lg:pb-14">
          <div
            className="flex flex-wrap items-center justify-center"
            data-aos-id-mobsponiscorns
          >
            <Logo
              logo={PowerclickLogo}
              altText="Powerclick.com"
              width="200"
              height="31"
            />
            <Logo
              logo={UniqornLogo}
              altText="Uniqorn"
              width="160"
              height="26"
            />
            <Logo
              logo={CXSportLogo}
              altText="ChallengerX"
              width="250"
              height="40"
            />
            <Logo
              logo={MobcastLogo}
              altText="Mobcast"
              width="165"
              height="18"
            />
            <Logo
              logo={FormationLogo}
              altText="Formation"
              width="135"
              height="30"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mobsponiqorns
