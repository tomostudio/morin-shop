import { useEffect } from 'react'
import {  GradientButton } from '@/components/utils/buttons'
import { CartLoading } from '@/components/utils/cart'
import CartCard from './card'
import CartTitle from './title'

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
    console.log(loading)
  }, [])

  return loading ? (
    <CartLoading />
  ) : data.length > 0 ? (
    <>
      <div className="w-full max-w-4xl mt-3 flex flex-col space-y-4">
        <CartTitle />
        <div className="w-full flex flex-col">
          {data.map((item, index) => (
            <CartCard
              key={index}
              title={item.title}
              variantTitle={item.variant.title}
              imageSrc={item.variant.image.src}
              imageAlt={item.variant.image.altText}
              available={item.variant.available}
              quantity={item.quantity}
              price={item.variant.price}
              loadingId={cartLoading.id}
              itemId={item.id}
              loadingStatus={cartLoading.status}
              decQuantity={decQuantity}
              increQuantity={increQuantity}
              subTotal={subTotal}
              removeItem={removeItem}
            />
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
