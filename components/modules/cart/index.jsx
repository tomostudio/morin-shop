import { useMediaQuery } from '@/helpers/functional/checkMedia'
import CartDesktop from './desktop'
import CartMobile from './mobile'

const CartComponent = ({ data, decQuantity, increQuantity, onCheckout, removeItem, cartLoading, loading }) => {
  return useMediaQuery('(min-width: 640px)') ? (
    <CartDesktop
      data={data}
      decQuantity={decQuantity}
      increQuantity={increQuantity}
      onCheckout={onCheckout}
      removeItem={removeItem}
      cartLoading={cartLoading}
      loading={loading}
    />
  ) : (
    <CartMobile
      data={data}
      decQuantity={decQuantity}
      increQuantity={increQuantity}
      onCheckout={onCheckout}
      removeItem={removeItem}
      cartLoading={cartLoading}
      loading={loading}
    />
  )
}

export default CartComponent
