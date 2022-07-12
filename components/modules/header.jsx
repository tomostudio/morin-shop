import FancyLink from '@/components/utils/fancyLink'
import Container from '@/components/modules/container'
import MorinButton from '../utils/morinButton'
import colors from '@/helpers/preset/colors'
import { MorinLogo, WaButton } from '../utils/svg'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import MorinTabs from '../utils/morinTabs'

export default function Header({ home = true }) {
  const tabData = [
    {
      id: 'tab-2',
      title: 'Spreads',
      value: 'spreads',
      ariaText: 'Spreads',
    },
    {
      id: 'tab-3',
      title: 'Jams',
      value: 'jams',
      ariaText: 'Jams',
    },
    {
      id: 'tab-4',
      title: 'Toppings',
      value: 'toppings',
      ariaText: 'Toppings',
    },
    {
      id: 'tab-5',
      title: 'Fillings',
      value: 'fillings',
      ariaText: 'Fillings',
    },
  ]

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
                  className="text-white h-[30px]"
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
                  className="text-white h-[30px]"
                >
                  My Cart
                </MorinButton>
              </div>
              {useMediaQuery('(min-width: 1024px)') && (
                <div className="absolute w-full h-[45px] -bottom-[20px] flex justify-center items-center">
                  <MorinTabs tabData={tabData} />
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
                  className="h-[30px] text-morin-blue"
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
                  className="h-[30px] text-white bg-morin-blue"
                >
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
