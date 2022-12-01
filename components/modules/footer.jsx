import Container from './container'
import Image from 'next/image'
import colors from '@/helpers/preset/colors'
import { ArrowButton, DefaultButton } from '../utils/buttons'

const Footer = ({ className }) => {
  return (
    <footer className={`w-full px-4 lg:px-8 max-w-screen-2xl ${className}`}>
      <Container
        className={`relative w-full h-auto flex flex-col lg:flex-row bg-morin-blue text-white rounded-t-3xl justify-between px-5 lg:px-10 py-7 lg:py-[60px] ${className}`}
      >
        {/* LEFT */}
        <ArrowButton
          destination="https://morin.id"
          color={colors.white}
          arrowLeft
          center={false}
          className="text-white h-[30px]"
        >
          Back to Morinfood
        </ArrowButton>

        {/* RIGHT */}
        <div className="flex flex-row-reverse lg:flex-col space-y-6">
          <div className="flex justify-end w-[60%] lg:w-auto items-end lg:items-start space-x-3">
            <DefaultButton blank={true} className="flex">
              <Image
                src={`/ig-white.svg`}
                alt={'Instagram'}
                width={36}
                height={36}
              />
            </DefaultButton>
            <DefaultButton blank={true} className="flex">
              <Image
                src={`/tw-white.svg`}
                alt={'Twitter'}
                width={36}
                height={36}
              />
            </DefaultButton>
            <DefaultButton blank={true} className="flex">
              <Image
                src={`/fb-white.svg`}
                alt={'Facebook'}
                width={36}
                height={36}
              />
            </DefaultButton>
          </div>
          <div className="flex flex-wrap w-full lg:w-auto text-[12px] lg:space-x-2">
            <span className="w-full lg:w-auto">© Morin Food 2021</span>
            <span className="hidden lg:block">|</span>
            <DefaultButton destination="/confirm-payment">
              Confirm Payment
            </DefaultButton>
            <span className="hidden lg:block">|</span>
            <DefaultButton destination="/terms-conditions">
              Terms & Conditions
            </DefaultButton>
            <span className="mx-1 lg:mx-0">|</span>
            <DefaultButton destination="/privacy-policy">Privacy Policy</DefaultButton>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
