import Container from './container'
import FancyLink from '../utils/fancyLink'
import Image from 'next/image'
import MorinButton from '../utils/morinButton'
import colors from '@/helpers/preset/colors'

const Footer = ({ className }) => {
  return (
    <footer className={`w-full px-4 lg:px-8 max-w-screen-2xl ${className}`}>
      <Container
        className={`relative w-full h-auto flex flex-col lg:flex-row bg-morin-blue text-white rounded-t-3xl justify-between px-5 lg:px-10 py-7 lg:py-[60px] ${className}`}
      >
        {/* LEFT */}
        <MorinButton
          destination="https://morin.id"
          color={colors.white}
          arrow="left"
          showText
          className="text-white h-[30px]"
        >
          Back to Morinfood
        </MorinButton>

        {/* RIGHT */}
        <div className="flex flex-row-reverse lg:flex-col space-y-6">
          <div className="flex justify-end w-[60%] lg:w-auto items-end lg:items-start space-x-3">
            <FancyLink blank={true} className="flex">
              <Image
                src={`/ig-white.svg`}
                alt={'Instagram'}
                width={36}
                height={36}
              />
            </FancyLink>
            <FancyLink blank={true} className="flex">
              <Image
                src={`/tw-white.svg`}
                alt={'Twitter'}
                width={36}
                height={36}
              />
            </FancyLink>
            <FancyLink blank={true} className="flex">
              <Image
                src={`/fb-white.svg`}
                alt={'Facebook'}
                width={36}
                height={36}
              />
            </FancyLink>
          </div>
          <div className="flex flex-wrap w-full lg:w-auto text-[12px] lg:space-x-2">
            <span className="w-full lg:w-auto">© Morin Food 2021</span>
            <span className="hidden lg:block">|</span>
            <FancyLink destination="/confirmation">
              Confirmation
            </FancyLink>
            <span className="hidden lg:block">|</span>
            <FancyLink destination="/terms-conditions">
              Terms & Conditions
            </FancyLink>
            <span className="mx-1 lg:mx-0">|</span>
            <FancyLink destination="/privacy-policy">Privacy Policy</FancyLink>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
