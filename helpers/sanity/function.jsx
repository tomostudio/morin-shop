import client from './client'

const getProductSanityDetail = async (slug) => {
  const response = await client.fetch(
    `
          *[_type == "shopifyData" && slug.current == "${slug}"] {
            ...,
            type->,
            getProduct {
              custom_link,
              linkStore-> {
                slug,
                type-> {
                  slug,
                }
              }
            }
          }
        `,
  )
  const [product] = response
  return product
}

export { getProductSanityDetail }
