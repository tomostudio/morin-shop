import { useEffect } from 'react'
import { GradientButton } from '@/components/utils/buttons'
import { CartLoading } from '@/components/utils/cart'
import CartCardMobile from './cardMobile'
import CartTitle from './title'

const CartMobile = ({
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
      sub += item.quantity * item.variant.price.amount
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
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col">
          {data.map((item, index) => (
            <CartCardMobile
              key={index}
              title={item.title}
              productSlug={item.productSlug}
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
          <div className="w-full flex justify-between text-morin-blue mt-6 py-3 px-4 shadow-cart rounded-3xl">
            <div className="flex flex-col">
              <span className="font-semibold">Sub-Total</span>
              <span className="text-mtitleSmall">
                IDR
                {` `}
                {Intl.NumberFormat('id-ID').format(subTotal())}
                ,-
              </span>
            </div>
            <GradientButton className="!w-auto px-6" onClick={onCheckout}>
              Checkout
            </GradientButton>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="w-full h-[50vh] flex justify-center items-center">
      <span className="font-semibold text-ctitleSmall">Cart is Empty</span>
    </div>
  )
}

export default CartMobile
