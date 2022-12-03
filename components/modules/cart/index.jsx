import { useMediaQuery } from '@/helpers/functional/checkMedia'
import CartDesktop from './dekstop'
import CartMobile from './mobile'

const CartComponent = ({ data, decQuantity, increQuantity, onCheckout, removeItem, cartLoading, loading }) => {
  return useMediaQuery('(min-width: 1024px)') ? (
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
    />
  )
}

export default CartComponent
