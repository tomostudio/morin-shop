import { useState } from 'react'
import { createCheckout } from '@/helpers/shopify'
import handleItemCheckout from './handleItemCheckout'
import handleCart from './handleCart'
import useProductDetailState from './useProductDetailState'

const useProductDetail = (productDetail, slug, setQuantity) => {
  const [
    soldOut,
    product,
    setProduct,
    addToCart,
    setAddToCart,
    productCurrent,
    setProductCurrent,
    cart,
    setCart,
    maxQty,
    setMaxQty,
  ] = useProductDetailState(productDetail)

  const onCart = () => {
    handleCart(
      slug,
      product.shopifyProduct.handle,
      cart,
      setAddToCart,
      setProduct,
      setQuantity,
    )
  }

  return [
    product,
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