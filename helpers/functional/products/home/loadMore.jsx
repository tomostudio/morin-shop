const loadMore = (
  category,
  productAPI,
  dataProduct,
  setDataProduct,
  setShowButton,
) => {
  const dataIncrease = 8
  if (category === 'all') {
    displayData += dataIncrease
    setDataProduct(
      productAPI
        .filter(
          (data) => data.shopifyProduct.variants[0].title !== 'Default Title',
        )
        .slice(0, displayData),
    )

    if (
      productAPI.filter(
        (data) => data.shopifyProduct.variants[0].title !== 'Default Title',
      ).length <= displayData
    ) {
      setShowButton(false)
    } else {
      setShowButton(true)
    }
  } else {
    displayData += dataIncrease
    setDataProduct(
      dataProduct
        .filter(
          (data) => data.shopifyProduct.variants[0].title !== 'Default Title',
        )
        .slice(0, displayData),
    )

    if (
      dataProduct.filter(
        (data) => data.shopifyProduct.variants[0].title !== 'Default Title',
      ).length <= displayData
    ) {
      setShowButton(false)
    } else {
      setShowButton(true)
    }
  }
}

export default loadMore
