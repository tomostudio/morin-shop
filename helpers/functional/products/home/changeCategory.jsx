const changeCategory = (
  category,
  displayData,
  productAPI,
  setDataProduct,
  setShowButton,
) => {
  displayData = 8
  if (category === 'all') {
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
    let dataCategory = productAPI.filter(
      (data) =>
        data.type?.slug.current === category &&
        data.shopifyProduct.variants[0].title !== 'Default Title',
    )

    setDataProduct(
      dataCategory
        .filter(
          (data) => data.shopifyProduct.variants[0].title !== 'Default Title',
        )
        .slice(0, displayData),
    )

    if (dataCategory.length <= displayData) {
      setShowButton(false)
    } else {
      setShowButton(true)
    }
  }
}

export default changeCategory
