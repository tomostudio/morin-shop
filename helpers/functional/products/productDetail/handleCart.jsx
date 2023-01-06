import { createCheckout } from '@/helpers/shopify'
import handleItemCheckout from './handleItemCheckout'

const handleCart = (
  slug,
  handle,
  cart,
  setAddToCart,
  setProduct,
  setQuantity,
) => {
  setAddToCart(true)
  const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'))
  if (dataCheckout) {
    handleItemCheckout(
      slug,
      handle,
      cart,
      dataCheckout,
      setAddToCart,
      setProduct,
      setQuantity,
    )
  } else {
    createCheckout().then((checkout) => {
      const data = {
        id: checkout.id,
      }
      localStorage.setItem('dataCheckout', JSON.stringify(data))

      handleItemCheckout(
        slug,
        handle,
        cart,
        data,
        setAddToCart,
        setProduct,
        setQuantity,
      )
    })
  }
}

export default handleCart
