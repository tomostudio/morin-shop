import client from '@/helpers/sanity/client'

const fetchProductList = (displayData, setProductAPI, setDataProduct, setLoading) => {
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
      setProductAPI(response)
      setDataProduct(
        response
          .filter(
            (data) => data.shopifyProduct.variants[0].title !== 'Default Title',
          )
          .slice(0, displayData),
      )
      setLoading(false)
    })
    .catch(console.error)
}

export default fetchProductList
