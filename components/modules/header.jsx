import Container from '@/components/modules/container';
import colors from '@/helpers/preset/colors';
import { MorinLogo, WaButton } from '../utils/svg';
import { useMediaQuery } from '@/helpers/functional/checkMedia';
import { useAppContext } from 'context/state';
import { ArrowButton, DefaultButton } from '../utils/buttons';
import { HomeTabsDesktop } from '../utils/tabs';

export default function Header({
  home = true,
  tabData = null,
  onChangeCategory = null,
}) {
  const appContext = useAppContext();

  return (
    <>
      <nav
        className={`fixed ${
          home ? 'bg-header ' : 'bg-transparent'
        } top-0 left-0 right-0 w-full z-50 flex flex-col rounded-b-3xl`}
      >
        <Container className={`relative h-[105px] lg:h-header`}>
          <div className='w-full flex justify-around items-center pt-8'>
            <div className='w-full flex justify-start'>
              <ArrowButton
                color={home ? colors.white : colors.morinBlue}
                destination='https://morin.id'
                arrowLeft
                borderColor={home ? colors.white : colors.morinBlue}
                center={false}
                bgColor={'bg-white'}
                hover={home ? 'blue' : 'white'}
                mobileText={false}
                className={'min-h-[2.25rem]'}
              >
                morin.id
              </ArrowButton>
            </div>
            {/* Morin Logo */}
            <div className=''>
              <DefaultButton
                destination='/'
                a11yText='Navigate to the home page'
                className='relative w-full'
              >
                <MorinLogo className='w-auto h-[56px] lg:h-[76px]' />
              </DefaultButton>
            </div>
            <div className='w-full flex justify-end'>
              <ArrowButton
                destination='/cart'
                color={colors.white}
                hover='blue'
                borderColor={home ? colors.white : colors.morinBlue}
                bgColor={home ? 'bg-white' : `bg-morin-blue`}
                cart
                center={false}
                mobileText={false}
                className={`min-h-[2.25rem] ${
                  appContext.quantity > 0 ? 'pl-1 md:pl-[3px]' : ''
                }`}
                quantity={
                  appContext.quantity > 0 && (
                    <div className='h-full py-[1px] md:py-[2px] mr-1.5 md:mr-2'>
                      <div className='h-full flex justify-center items-center pt-[3px] rounded-full min-w-[22px] md:min-w-[25px] bg-red-500 px-1.5 md:px-1.5 !text-white'>
                        {appContext.quantity}
                      </div>
                    </div>
                  )
                }
              >
                My Cart
              </ArrowButton>
            </div>
          </div>
        </Container>
      </nav>
      <DefaultButton className='fixed z-10 bottom-0 right-0 w-[66px] h-fit mr-8 mb-8'>
        <WaButton />
      </DefaultButton>
    </>
  );
}
