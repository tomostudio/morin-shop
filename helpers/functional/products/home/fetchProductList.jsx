import client from '@/helpers/sanity/client'

const fetchProductList = (
  displayData,
  setProductAPI,
  setDataProduct,
  setLoading,
) => {
  client
    .fetch(
      `
          *[_type == "shopifyData"] {
            ...,
            type->
          }
          `,
    )
    .then((response) => {
      setProductAPI(
        response.filter((data) =>
          data.shopifyProduct.variants.every((e) => e.inventoryQuantity > 0),
        ),
      )
      setDataProduct(
        response
          .filter((data) =>
            data.shopifyProduct.variants.every((e) => e.inventoryQuantity > 0),
          )
          .slice(0, displayData),
      )
      setLoading(false)
    })
    .catch(console.error)
}

export default fetchProductList
