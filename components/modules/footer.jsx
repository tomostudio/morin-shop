import Container from './container'
import FancyLink from '../utils/fancyLink'
import Image from 'next/image'
import MorinButton from '../utils/morinButton'
import colors from '@/helpers/preset/colors'

const Footer = ({ className }) => {
  const footerLink = `block w-fit text-white text-defaultSmall leading-none lg:text-default`
  return (
    <footer className="lg:px-8">
      <Container
        className={`relative w-full h-auto flex bg-morin-blue text-white rounded-t-3xl justify-between px-10 py-[60px] ${className}`}
      >
        {/* LEFT */}
        <MorinButton
          color={colors.white}
          arrow="left"
          className="text-white h-[30px]"
        >
          Back to Morinfood
        </MorinButton>

        {/* RIGHT */}
        <div className="flex flex-col space-y-6">
          <div className="flex justify-end space-x-3">
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
          <div className="flex space-x-2">
            <span>© Morin Food 2021</span>
            <span>|</span>
            <FancyLink destination="/terms-conditions">
              Terms & Conditions
            </FancyLink>
            <span>|</span>
            <FancyLink destination="/privacy-policy">Privacy Policy</FancyLink>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
