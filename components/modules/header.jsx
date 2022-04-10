import FancyLink from '@/components/utils/fancyLink'
import Container from '@/components/modules/container'
import MorinButton from '../utils/morinButton'
import colors from '@/helpers/preset/colors'
import { MorinLogo } from '../utils/svg'

export default function Header({ home = true }) {
  return home ? (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 flex flex-col no-select-all bg-header rounded-b-3xl`}
    >
      <header className={`sticky top-0 left-0 right-0 w-full z-2`}>
        <Container className={`h-header relative pointer-events-auto`}>
          <div className="w-full flex justify-between items-center pt-10">
            <MorinButton
              color={colors.white}
              arrow="left"
              border
              className="text-white h-[30px]"
            >
              See All Products
            </MorinButton>
            {/* Morin Logo */}
            <FancyLink
              destination="/editorial/under-construction"
              a11yText="Navigate to the home page"
              className="relative w-[87px] lg:w-[142px]"
            >
              <MorinLogo className="w-full h-full" />
            </FancyLink>
            <MorinButton
              color={colors.white}
              border
              className="text-white h-[30px]"
            >
              My Cart
            </MorinButton>
          </div>
          <div className="absolute w-full h-[45px] -bottom-[20px] flex justify-center items-center">
            <div className="h-full font-semibold setflex-center-row bg-white rounded-full px-2 space-x-2 shadow-[2px_2px_4px_0px_rgba(0,0,0,0.1)]">
              <FancyLink
                className="bg-morin-blue text-white rounded-full pt-2 pb-0.5 px-4"
                destination="/"
              >
                All
              </FancyLink>
              <FancyLink
                className="text-black rounded-full pt-2 pb-0.5 px-4"
                destination="/spreads"
              >
                Spreads
              </FancyLink>
              <FancyLink
                className="text-black rounded-full pt-2 pb-0.5 px-4"
                destination="/jams"
              >
                Jams
              </FancyLink>
              <FancyLink
                className="text-black rounded-full pt-2 pb-0.5 px-4"
                destination="/toppings"
              >
                Toppings
              </FancyLink>
              <FancyLink
                className="text-black rounded-full pt-2 pb-0.5 px-4"
                destination="/fillings"
              >
                Fillings
              </FancyLink>
            </div>
          </div>
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
              destination="/editorial/under-construction"
              a11yText="Navigate to the home page"
              className="relative w-[87px] lg:w-[142px]"
            >
              <MorinLogo className="w-full h-full" />
            </FancyLink>
            <MorinButton
              color={colors.morinBlue}
              className="h-[30px] text-white bg-morin-blue"
            >
              My Cart
            </MorinButton>
          </div>
        </Container>
      </header>
    </nav>
  )
}
