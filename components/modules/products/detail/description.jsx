import { ArrowButton } from '@/components/utils/buttons'
import colors from '@/helpers/preset/colors'

const PDDescription = ({ getProduct, description }) => {
  return (
    <div className="flex flex-col md:max-w-md space-y-5 md:space-y-8">
      {description && (
        <p className="font-medium text-[12px] md:text-default">{description}</p>
      )}
      {getProduct.custom_link
        ? getProduct.linkProduct && (
            <ArrowButton
              destination={getProduct.linkProduct}
              targetBlank
              color={colors.morinBlue}
              borderColor={colors.morinBlue}
              hover="white"
              arrowRight
              center={false}
            >
              View Products Details
            </ArrowButton>
          )
        : getProduct.linkStore && (
            <ArrowButton
              destination={`https://morin.id/products/${getProduct.linkStore.type.slug.current}/${getProduct.linkStore.slug.current}`}
              targetBlank
              color={colors.morinBlue}
              borderColor={colors.morinBlue}
              hover="white"
              arrowRight
              center={false}
            >
              View Products Details
            </ArrowButton>
          )}
    </div>
  )
}

export default PDDescription
