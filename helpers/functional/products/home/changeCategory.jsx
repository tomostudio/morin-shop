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
        .filter((data) =>
          data.shopifyProduct.variants.every((e) => e.inventoryQuantity > 0),
        )
        .slice(0, displayData),
    )

    if (
      productAPI.filter((data) =>
        data.shopifyProduct.variants.every((e) => e.inventoryQuantity > 0),
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
        data.shopifyProduct.variants.every((e) => e.inventoryQuantity > 0),
    )

    setDataProduct(
      dataCategory
        .filter((data) =>
          data.shopifyProduct.variants.every((e) => e.inventoryQuantity > 0),
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
