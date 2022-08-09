import FancyLink from '@/components/utils/fancyLink'
import Container from '@/components/modules/container'
import MorinButton from '../utils/morinButton'
import colors from '@/helpers/preset/colors'
import { MorinLogo, WaButton } from '../utils/svg'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import MorinTabsHome from '../utils/morinTabsHome'
import { useEffect } from 'react'
import { shopifyClient } from '@/helpers/shopify'
import { useAppContext } from 'context/state'

export default function Header({
  home = true,
  tabData = null,
  loadCategory= null
}) {
  // const tabData = [
  //   {
  //     id: 'tab-2',
  //     title: 'Spreads',
  //     value: 'spreads',
  //     ariaText: 'Spreads',
  //   },
  //   {
  //     id: 'tab-3',
  //     title: 'Jams',
  //     value: 'jams',
  //     ariaText: 'Jams',
  //   },
  //   {
  //     id: 'tab-4',
  //     title: 'Toppings',
  //     value: 'toppings',
  //     ariaText: 'Toppings',
  //   },
  //   {
  //     id: 'tab-5',
  //     title: 'Fillings',
  //     value: 'fillings',
  //     ariaText: 'Fillings',
  //   },
  // ]
  const appContext = useAppContext()

  const fetchCheckout = () => {
    const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'))
    if (dataCheckout) {
      shopifyClient.checkout.fetch(dataCheckout.id).then((checkout) => {
        let jumlah = 0
        checkout.lineItems.forEach((data) => {
          jumlah += data.quantity
        })
        appContext.setQuantity(jumlah)
      })
    }
  }

  useEffect(() => {
    fetchCheckout()
  }, [])

  return (
    <>
      {home ? (
        <nav
          className={`fixed top-0 left-0 right-0 w-full z-50 flex flex-col no-select-all bg-header rounded-b-3xl`}
        >
          <header className={`sticky top-0 left-0 right-0 w-full z-2`}>
            <Container
              className={`h-[105px] lg:h-header relative pointer-events-auto`}
            >
              <div className="w-full flex justify-between items-center pt-10">
                <MorinButton
                  color={colors.white}
                  arrow="left"
                  border
                  className="text-white h-[33px]"
                >
                  Morinfood
                </MorinButton>
                {/* Morin Logo */}
                <FancyLink
                  destination="/"
                  a11yText="Navigate to the home page"
                  className="relative w-[105px] lg:w-[142px]"
                >
                  <MorinLogo className="w-full h-full" />
                </FancyLink>
                <MorinButton
                  destination="/cart"
                  color={colors.white}
                  border
                  cart
                  className="text-white h-[33px]"
                >
                  {appContext.quantity > 0 && (
                    <span className="rounded-full bg-red-500 px-2 mr-2.5">
                      {appContext.quantity}
                    </span>
                  )}
                  My Cart
                </MorinButton>
              </div>
              {tabData.length > 0 && useMediaQuery('(min-width: 1024px)') && (
                <div className="absolute w-full h-[45px] -bottom-[20px] flex justify-center items-center">
                  <MorinTabsHome
                    tabData={tabData}
                    loadCategory={loadCategory}
                  />
                </div>
              )}
            </Container>
          </header>
        </nav>
      ) : (
        <nav
          className={`fixed top-0 left-0 right-0 w-full z-50 flex flex-col no-select-all`}
        >
          <header className={`sticky top-0 left-0 right-0 w-full z-2`}>
            <Container className={`h-header relative pointer-events-auto`}>
              <div className="w-full flex justify-between items-center pt-10">
                <MorinButton
                  color={colors.morinBlue}
                  arrow="left"
                  border
                  className="h-[33px] text-morin-blue"
                >
                  Morinfood
                </MorinButton>
                {/* Morin Logo */}
                <FancyLink
                  destination="/"
                  a11yText="Navigate to the home page"
                  className="relative w-[105px] lg:w-[142px]"
                >
                  <MorinLogo className="w-full h-full" />
                </FancyLink>
                <MorinButton
                  destination="/cart"
                  color={colors.white}
                  cart
                  className="h-[33px] text-white bg-morin-blue"
                >
                  {appContext.quantity > 0 && (
                    <span className="rounded-full bg-red-500 px-2 mr-2.5">
                      {appContext.quantity}
                    </span>
                  )}
                  My Cart
                </MorinButton>
              </div>
            </Container>
          </header>
        </nav>
      )}
      <FancyLink className="fixed z-10 bottom-0 right-0 w-[66px] h-fit m-6">
        <WaButton />
      </FancyLink>
    </>
  )
}
