import { ArrowRight } from '../svg'
import DefaultButton from './DefaultButton'

const MoreButton = ({ children, ...others }) => {
  return (
    <DefaultButton
      className="relative flex flex-col items-center space-y-4"
      {...others}
    >
      <div className="rotate-90 border-2 inline-block rounded-full border-morin-blue py-2.5 px-3">
        <ArrowRight color={colors.morinBlue} className="w-5" stroke={3} />
      </div>
      <span className="w-20 font-semibold text-morin-blue">{children}</span>
    </DefaultButton>
  )
}

export default MoreButton