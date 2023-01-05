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
        className={`${
          home ? 'bg-header fixed' : 'bg-white'
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
                bgColor={home ? 'bg-transparent' : `bg-morin-blue`}
                cart
                center={false}
                mobileText={false}
                className={`min-h-[2.25rem] ${
                  appContext.quantity > 0 ? 'pl-1' : ''
                }`}
                quantity={
                  appContext.quantity > 0 && (
                    <div className='h-full py-[2px] mr-1.5 md:mr-2'>
                      <div className='h-full flex justify-center items-center pt-[2px] rounded-full min-w-[27px] bg-red-500 px-2.5 !text-white'>
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
          {/* {home ? (
            tabData.length > 0 && (
              <div className='absolute w-full h-[45px] left-0 -bottom-[20px] flex justify-center'>
                <HomeTabsDesktop
                  tabData={tabData}
                  onChangeCategory={onChangeCategory}
                />
              </div>
            )
          ) : (
            <></>
          )} */}
        </Container>
      </nav>
      <DefaultButton className='fixed z-10 bottom-0 right-0 w-[66px] h-fit mr-8 mb-8'>
        <WaButton />
      </DefaultButton>
    </>
  );
}
