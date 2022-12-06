import { ArrowButton } from '@/components/utils/buttons'
import colors from '@/helpers/preset/colors'

const PDDescription = ({ typeSlug, productSlug, description }) => {
  return (
    <div className="flex flex-col md:max-w-md">
      <p className="font-medium text-[12px] md:text-default">{description}</p>
      <ArrowButton
        destination={`https://morin.id/products/${typeSlug}/${productSlug}`}
        targetBlank
        color={colors.morinBlue}
        borderColor={colors.morinBlue}
        hover="white"
        arrowRight
        center={false}
        className="mt-5 md:mt-8"
      >
        View Products Details
      </ArrowButton>
    </div>
  )
}

export default PDDescription
