import { useState } from 'react'
import { createCheckout } from '@/helpers/shopify'
import handleItemCheckout from './handleItemCheckout'

const useProductDetail = (variants, handle, slug, setProduct, setQuantity) => {
  let soldOut = variants.every(
    (e) => e.inventoryQuantity === 0,
  )
  const [addToCart, setAddToCart] = useState(false)
  const [productCurrent, setProductCurrent] = useState(
    !soldOut
      ? variants.findIndex(
          (e) =>
            e.id === variants.filter((e) => e.inventoryQuantity !== 0)[0].id,
        )
      : null,
  )
  const [cart, setCart] = useState({
    index: !soldOut
      ? variants.findIndex(
          (e) =>
            e.id === variants.filter((e) => e.inventoryQuantity !== 0)[0].id,
        )
      : null,
    qty: 1,
  })
  const [maxQty, setMaxQty] = useState(
    variants.filter((e) => e.inventoryQuantity !== 0)[0]?.inventoryQuantity,
  )

  const onCart = () => {
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
          dataCheckout,
          setAddToCart,
          setProduct,
          setQuantity,
        )
      })
    }
  }

  return [
    soldOut,
    addToCart,
    onCart,
    productCurrent,
    setProductCurrent,
    cart,
    setCart,
    maxQty,
    setMaxQty,
  ]
}

export default useProductDetail
