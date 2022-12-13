import { DefaultButton, IconButton } from '@/components/utils/buttons'
import { Minus, Plus, Trash } from '@/components/utils/svg'
import colors from '@/helpers/preset/colors'
import Image from 'next/image'

const CartCardMobile = ({
  title,
  productSlug,
  variantTitle,
  imageSrc,
  imageAlt,
  available,
  quantity,
  price,
  loadingId,
  itemId,
  loadingStatus,
  decQuantity,
  increQuantity,
  subTotal,
  removeItem,
}) => {
  return (
    <div
      className={`w-full first:mt-0 mt-3 flex rounded-2xl shadow-cart py-6 ${
        loadingId === itemId && loadingStatus
          ? 'opacity-50 pointer-events-none'
          : ''
      }`}
    >
      <div className={`flex items-center space-x-4 h-full px-4`}>
        <DefaultButton
          destination={`/products/${productSlug}`}
          className="relative w-[95px] min-h-[120px] h-full"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="contain"
          />
        </DefaultButton>
        <div className="h-full min-h-[120px] flex flex-col justify-between">
          <DefaultButton
            destination={`/products/${productSlug}`}
            className="flex flex-col text-morin-blue space-y-1"
          >
            <span className="text-default font-nutmeg">{title}</span>
            <div className="flex space-x-4">
              <span className="text-defaultSmall font-medium min-w-[2em]">
                {variantTitle}
              </span>
              <span className="font-semibold text-morin-blue">
                IDR {Intl.NumberFormat('en-US').format(price)}
                ,-
              </span>
            </div>
          </DefaultButton>
          <div className="flex gap-x-3">
            <div className="w-max min-w-[110px] flex justify-between items-center px-4 py-1 rounded-full border-2 text-morin-blue border-morin-blue">
              <DefaultButton
                onClick={() => {
                  decQuantity(itemId)
                  subTotal()
                }}
                className={!available ? '!pointer-events-none' : ''}
              >
                <Minus width={15} />
              </DefaultButton>
              <span className="font-medium leading-none pt-1">{quantity}</span>
              <DefaultButton
                onClick={() => {
                  increQuantity(itemId)
                  subTotal()
                }}
                className={!available ? '!pointer-events-none' : ''}
              >
                <Plus width={18} height={18} />
              </DefaultButton>
            </div>
            <IconButton
              onClick={() => removeItem(itemId)}
              className="border-2 border-morin-blue p-2 rounded-full"
              icon={<Trash />}
              color={colors.morinBlue}
              borderColor={colors.morinBlue}
              center={false}
              hover="white"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartCardMobile
