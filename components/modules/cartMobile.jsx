import FancyLink from '../utils/fancyLink'
import Image from 'next/image'
import { Minus, Plus, Trash } from '@/components/utils/svg'

const CartMobile = ({ data, decQuantity, increQuantity, onCheckout }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full border-y-2 border-morin-blue">
        {data.map((item, index) => (
          <div
            className={`${index > 0 ? 'mb-6' : 'my-6'} mx-4 w-full flex`}
            key={index}
          >
            <div className="relative mt-4 max-w-[75px] w-full h-[79px]">
              <Image
                src={item.variant.image.src}
                alt={item.variant.image.altText}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex flex-col w-full ml-6 text-morin-blue">
              <span className="text-default font-nutmeg">{item.title}</span>
              <span className="font-medium text-[12px]">
                {item.variant.title}
              </span>
              <span className="font-semibold text-[12px]">
                IDR {Intl.NumberFormat('en-US').format(item.variant.price)},-
              </span>
              <div className="flex w-full my-3">
                <div className="flex justify-between items-center px-4 pt-1 pb-0.5 rounded-full border-2 border-morin-blue w-24">
                  <FancyLink
                    onClick={() => decQuantity(item.id)}
                    className="pb-1"
                  >
                    <Minus width={10} />
                  </FancyLink>
                  <input
                    className="w-full text-center font-medium text-[12px] pointer-events-none"
                    value={item.quantity}
                    readOnly
                  />
                  <FancyLink onClick={() => increQuantity(item.id)}>
                    <Plus width={13} height={13} />
                  </FancyLink>
                </div>
                <div className="w-fit ml-3 text-center">
                  <FancyLink className="border-2 border-morin-blue p-1.5 rounded-full">
                    <Trash />
                  </FancyLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-between items-center mt-5">
        <div className="flex flex-col text-morin-blue">
          <span className="font-semibold text-[12px]">Sub-Total</span>
          <span className="text-[22px]">
            IDR{' '}
            {Intl.NumberFormat('en-US').format(
              data[0].variant.price * data[0].quantity,
            )}
            ,-
          </span>
        </div>
        <FancyLink
          onClick={onCheckout}
          className="w-24 h-fit py-2.5 rounded-full bg-header shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] font-semibold text-white"
        >
          Checkout
        </FancyLink>
      </div>
    </div>
  )
}

export default CartMobile
