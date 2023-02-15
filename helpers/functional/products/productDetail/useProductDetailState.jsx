import { useState } from 'react'

const useProductDetailState = (productDetail) => {
  const [product, setProduct] = useState(productDetail)
  let soldOut = product.shopifyProduct.variants.every(
    (e) => e.inventoryQuantity === 0,
  )
  const [addToCart, setAddToCart] = useState(false)
  const [productCurrent, setProductCurrent] = useState(0)
  const [cart, setCart] = useState({
    index: !soldOut
      ? product.shopifyProduct.variants.findIndex(
          (e) =>
            e.id ===
            product.shopifyProduct.variants.filter(
              (e) => e.inventoryQuantity !== 0,
            )[0].id,
        )
      : null,
    qty: 1,
  })
  const [maxQty, setMaxQty] = useState(
    product.shopifyProduct.variants.filter((e) => e.inventoryQuantity !== 0)[0]
      ?.inventoryQuantity,
  )

  return [
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
  ]
}

export default useProductDetailState
