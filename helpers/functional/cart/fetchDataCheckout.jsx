import client from '@/helpers/sanity/client'
import { fetchCheckout } from '@/helpers/shopify'

function extractIdFromGid(gid) {
  return gid?.match(/[^\/]+$/i)[0]
}

const fetchDataCheckout = (setLoading, setCart) => {
  fetchCheckout().then((response) => {
    client
      .fetch(
        `
            *[_type == "shopifyData"] {
              _id,
              slug
            }
            `,
      )
      .then((res) => {
        console.log(response)
        if (response?.lineItems) {
          response = response.lineItems.map((data) => {
            return {
              ...data,
              productSlug: res.find(
                (e) =>
                  e._id ===
                  `product-${extractIdFromGid(data.variant.product.id)}`,
              ).slug.current,
            }
          })
          setCart(response)
        }else {
          setCart([])
        }
        setLoading(false)
      })
  })
}

export default fetchDataCheckout
