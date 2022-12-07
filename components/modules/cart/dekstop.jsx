import Image from 'next/image'
import { Minus, Plus, Trash } from '@/components/utils/svg'
import { useEffect } from 'react'
import { DefaultButton, GradientButton } from '@/components/utils/buttons'
import { CartLoading } from '@/components/utils/cart'

const CartDesktop = ({
  data,
  decQuantity,
  increQuantity,
  onCheckout,
  removeItem,
  cartLoading,
  loading,
}) => {
  const subTotal = () => {
    let sub = 0
    data.forEach((item) => {
      sub += item.quantity * item.variant.price
    })
    return sub
  }

  useEffect(() => {
    subTotal()
  }, [])

  return loading ? (
    <CartLoading />
  ) : data.length > 0 ? (
    <>
      <div className="w-full max-w-4xl mt-3 flex flex-col space-y-4">
        <div className="w-full grid grid-cols-6 font-medium text-morin-blue">
          <span className="col-span-3 text-center">Product</span>
          <span>Quantity</span>
          <span className="col-span-2">Price</span>
        </div>
        <div className="w-full flex flex-col">
          {data.map((item, index) => (
            <div
              key={index}
              className={`w-full first:mt-0 mt-3 grid grid-cols-6 rounded-2xl shadow-cart py-4 ${
                cartLoading.id === item.id && cartLoading.status
                  ? 'opacity-50 pointer-events-none'
                  : ''
              }`}
            >
              <div
                className={`col-span-3 flex items-center space-x-10 h-full pl-8`}
              >
                <DefaultButton
                  destination=""
                  className="relative w-[128px] h-[128px]"
                >
                  <Image
                    src={item.variant.image.src}
                    alt={item.variant.image.altText}
                    layout="fill"
                    objectFit="contain"
                  />
                </DefaultButton>
                <DefaultButton
                  destination=""
                  className="flex flex-col text-morin-blue"
                >
                  <span className="text-ctitleSmall font-nutmeg">
                    {item.title}
                  </span>
                  <span className="font-medium mt-1">{item.variant.title}</span>
                </DefaultButton>
              </div>
              <div className="flex flex-col justify-center items-center pr-12">
                <div className="flex justify-between items-center px-4 py-2 rounded-full border-2 text-morin-blue border-morin-blue w-full">
                  <DefaultButton
                    onClick={() => {
                      decQuantity(item.id)
                      subTotal()
                    }}
                    className={
                      !item.variant.available ? '!pointer-events-none' : ''
                    }
                  >
                    <Minus width={15} />
                  </DefaultButton>
                  <span className="font-medium leading-none pt-1">
                    {item.quantity}
                  </span>
                  <DefaultButton
                    onClick={() => {
                      increQuantity(item.id)
                      subTotal()
                    }}
                    className={
                      !item.variant.available ? '!pointer-events-none' : ''
                    }
                  >
                    <Plus width={18} height={18} />
                  </DefaultButton>
                </div>
                {!item.variant.available && (
                  <span className="mt-1 block text-center font-medium text-defaultSmall text-morin-red">
                    OUT OF STOCK
                  </span>
                )}
              </div>
              <div className="flex items-center">
                <span className="font-medium text-morin-blue">
                  IDR {Intl.NumberFormat('en-US').format(item.variant.price)}
                  ,-
                </span>
              </div>
              <div className={`flex items-center justify-end pr-8`}>
                <DefaultButton
                  onClick={() => removeItem(item.id)}
                  className="border-2 border-morin-blue p-1.5 rounded-full"
                >
                  <Trash />
                </DefaultButton>
              </div>
            </div>
          ))}
          <div className="w-full grid grid-cols-6 font-semibold text-morin-blue mt-6">
            <div className="col-span-3" />
            <div>
              <span>Sub-Total</span>
            </div>
            <div className="col-span-2">
              <span>
                IDR
                {` `}
                {Intl.NumberFormat('en-US').format(subTotal())}
                ,-
              </span>
            </div>
          </div>
        </div>
      </div>
      <GradientButton className="mt-24" onClick={onCheckout}>
        Checkout
      </GradientButton>
    </>
  ) : (
    <div className="w-full h-[50vh] flex justify-center items-center">
      <span className="font-semibold text-ctitleSmall">Cart is Empty</span>
    </div>
  )
}

export default CartDesktop
