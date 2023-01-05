import Container from './container';
import Image from 'next/image';
import colors from '@/helpers/preset/colors';
import { ArrowButton, DefaultButton } from '../utils/buttons';

const Footer = ({ className }) => {
  return (
    <footer className={`w-full px-4 lg:px-8 max-w-screen-2xl ${className}`}>
      <Container
        className={`relative w-full h-auto grid grid-rows-2 grid-cols-2 bg-morin-blue text-white rounded-t-3xl justify-between px-5 lg:px-10 py-7 lg:pt-14 lg:pb-6 ${
          className ? className : ''
        }`}
      >
        {/* LEFT */}
        <ArrowButton
          destination='https://morin.id'
          color={colors.white}
          arrowLeft
          center={false}
          className={`row-start-1 lg:col-start-1`}
        >
          Back to Morinfood
        </ArrowButton>

        {/* RIGHT */}
        <div className='row-start-1 col-start-2 flex justify-end self-end items-end space-x-3 '>
          <DefaultButton blank={true} className='flex'>
            <Image
              src={`/ig-white.svg`}
              alt={'Instagram'}
              width={36}
              height={36}
            />
          </DefaultButton>
          <DefaultButton blank={true} className='flex'>
            <Image
              src={`/tw-white.svg`}
              alt={'Twitter'}
              width={36}
              height={36}
            />
          </DefaultButton>
          <DefaultButton blank={true} className='flex'>
            <Image
              src={`/fb-white.svg`}
              alt={'Facebook'}
              width={36}
              height={36}
            />
          </DefaultButton>
        </div>
        {/* CREDITS */}
        <div className=' font-medium row-start-2 col-start-1 col-end-3 flex flex-col md:flex-row justify-start md:justify-end w-full md:w-auto text-[12px] pr-3 md:pr-0 md:space-x-2 mt-5 md:mt-10'>
          <span className='w-full md:w-auto text-center md:text-right'>© Morin Food 2021</span>
          <span className='hidden md:block'>|</span>
          <div className='flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-2'>
            <DefaultButton destination='/payment-confirmation'>
              Confirm Payment
            </DefaultButton>
            <span className='hidden md:block'>|</span>
            <DefaultButton destination='/terms-conditions'>
              Terms & Conditions
            </DefaultButton>
            <span className='hidden md:block'>|</span>
            <DefaultButton destination='/privacy-policy'>
              Privacy Policy
            </DefaultButton>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
