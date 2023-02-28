import { useAppContext } from 'context/state'
import { useState } from 'react'

const useProductListState = () => {
  const ctx = useAppContext()
  const [productAPI, setProductAPI] = useState([])
  const [loading, setLoading] = useState(true)

  let displayData = 8
  const [showButton, setShowButton] = useState(
    productAPI.filter((data) =>
      data.shopifyProduct.variants.every((e) => e.inventoryQuantity > 0),
    ).length <= displayData
      ? false
      : true,
  )
  const [dataProduct, setDataProduct] = useState(
    productAPI
      .filter((data) =>
        data.shopifyProduct.variants.every((e) => e.inventoryQuantity > 0),
      )
      .slice(0, displayData),
  )

  return [
    displayData,
    ctx.category,
    productAPI,
    setProductAPI,
    loading,
    setLoading,
    showButton,
    setShowButton,
    dataProduct,
    setDataProduct,
  ]
}

export default useProductListState
