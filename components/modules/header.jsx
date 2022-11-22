import Container from '@/components/modules/container'
import colors from '@/helpers/preset/colors'
import { MorinLogo, WaButton } from '../utils/svg'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import MorinTabsHome from '../utils/morinTabsHome'
import { useAppContext } from 'context/state'
import { ArrowButton, DefaultButton } from '../utils/buttons'

export default function Header({
  home = true,
  tabData = null,
  loadCategory = null,
}) {
  const appContext = useAppContext()

  return (
    <>
      <nav
        className={`${
          home ? 'bg-header fixed' : 'bg-white'
        } top-0 left-0 right-0 w-full z-50 flex flex-col rounded-b-3xl`}
      >
        <Container className={`relative h-[105px] lg:h-header`}>
          <div className="w-full flex justify-around items-center pt-8">
            <div className="w-full flex justify-start">
              <ArrowButton
                color={home ? colors.white : colors.morinBlue}
                destination="https://morin.id"
                arrowLeft
                border
                center={false}
                className={`${
                  home ? 'text-white' : 'text-morin-blue'
                } h-[33px]`}
              >
                Morinfood
              </ArrowButton>
            </div>
            {/* Morin Logo */}
            <DefaultButton
              destination="/"
              a11yText="Navigate to the home page"
              className="relative w-full"
            >
              <MorinLogo className="w-full h-[76px]" />
            </DefaultButton>
            <div className="w-full flex justify-end">
              <ArrowButton
                destination="/cart"
                color={home ? colors.white : colors.morinBlue}
                border
                cart
                center={false}
                className={`text-white ${home ? '' : 'bg-morin-blue'} ${appContext.quantity > 0 ? 'pl-1.5 pr-3' : 'px-3'} h-[33px]`}
              >
                {appContext.quantity > 0 && (
                  <span className="rounded-full bg-red-500 px-2 mr-2.5">
                    {appContext.quantity}
                  </span>
                )}
                My Cart
              </ArrowButton>
            </div>
          </div>
          {home ? (
            tabData.length > 0 &&
            useMediaQuery('(min-width: 1024px)') && (
              <div className="absolute w-full h-[45px] left-0 -bottom-[20px] flex justify-center">
                <MorinTabsHome tabData={tabData} loadCategory={loadCategory} />
              </div>
            )
          ) : (
            <></>
          )}
        </Container>
      </nav>
      <DefaultButton className="fixed z-10 bottom-0 right-0 w-[66px] h-fit mr-8 mb-8">
        <WaButton />
      </DefaultButton>
    </>
  )
}
