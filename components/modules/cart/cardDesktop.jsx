import { DefaultButton, IconButton } from '@/components/utils/buttons'
import { Minus, Plus, Trash } from '@/components/utils/svg'
import colors from '@/helpers/preset/colors'
import Image from 'next/image'

const CartCardDesktop = ({
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
      className={`w-full first:mt-0 mt-3 grid grid-cols-6 rounded-2xl shadow-cart py-4 transition-opacity text-default ${
        loadingId === itemId && loadingStatus
          ? 'opacity-50 pointer-events-none'
          : ''
      }`}
    >
      <div className={`col-span-3 flex items-center space-x-5 lg:space-x-10 h-full pl-6 lg:pl-8`}>
        <DefaultButton destination={`/products/${productSlug}`} className="relative w-[128px] h-[128px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="contain"
          />
        </DefaultButton>
        <DefaultButton destination={`/products/${productSlug}`} className="flex flex-col text-morin-blue">
          <span className="text-ctitleSmall font-nutmeg">{title}</span>
          <span className="font-medium mt-1">{variantTitle}</span>
        </DefaultButton>
      </div>
      <div className="flex items-center pr-4 lg:pr-12 min-w-[90px]">
        <div className="flex justify-between items-center px-3 py-2 rounded-full border-2 text-morin-blue border-morin-blue w-full flex-grow-0 max-w-[110px] ">
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
        {!available && (
          <span className="mt-1 block text-center font-medium text-defaultSmall text-morin-red">
            OUT OF STOCK
          </span>
        )}
      </div>
      <div className="flex items-center">
        <span className="font-medium text-morin-blue">
          IDR {Intl.NumberFormat('id-ID').format(price.amount)}
          ,-
        </span>
      </div>
      <div className={`flex items-center justify-end pr-8`}>
        <IconButton
          onClick={() => removeItem(itemId)}
          className="border-2 border-morin-blue flex justify-center items-center rounded-full aspect-1"
          icon={<Trash />}
          color={colors.morinBlue}
          borderColor={colors.morinBlue}
          center={false}
          hover="white"
        />
      </div>
    </div>
  )
}

export default CartCardDesktop
