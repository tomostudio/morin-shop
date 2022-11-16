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
  loadCategory = null,
}) {
  const appContext = useAppContext()

  const fetchCheckout = () => {
    const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'))
    if (dataCheckout) {
      shopifyClient.checkout.fetch(dataCheckout.id).then((checkout) => {
        let jumlah = 0
        checkout?.lineItems.forEach((data) => {
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
      <nav
        className={`${
          home ? 'bg-header fixed' : 'bg-white'
        } top-0 left-0 right-0 w-full z-50 flex flex-col rounded-b-3xl`}
      >
        <Container className={`relative h-[105px] lg:h-header`}>
          <div className="w-full flex justify-around items-center pt-8">
            <div className="w-full flex justify-start">
              <MorinButton
                color={home ? colors.white : colors.morinBlue}
                destination="https://morin.id"
                arrow="left"
                border
                className={`${
                  home ? 'text-white' : 'text-morin-blue'
                } h-[33px]`}
              >
                Morinfood
              </MorinButton>
            </div>
            {/* Morin Logo */}
            <FancyLink
              destination="/"
              a11yText="Navigate to the home page"
              className="relative w-full"
            >
              <MorinLogo className="w-full h-[76px]" />
            </FancyLink>
            <div className="w-full flex justify-end">
              <MorinButton
                destination="/cart"
                color={home ? colors.white : colors.morinBlue}
                border
                cart
                className={`text-white ${home ? '' : 'bg-morin-blue'} h-[33px]`}
              >
                {appContext.quantity > 0 && (
                  <span className="rounded-full bg-red-500 px-2 mr-2.5">
                    {appContext.quantity}
                  </span>
                )}
                My Cart
              </MorinButton>
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
      <FancyLink className="fixed z-10 bottom-0 right-0 w-[66px] h-fit mr-8 mb-8">
        <WaButton />
      </FancyLink>
    </>
  )
}
