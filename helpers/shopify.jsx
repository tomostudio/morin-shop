import Client from 'shopify-buy'

// Initializing a client to return content in the store's primary language
const shopifyClient = Client.buildClient({
  domain: 'checkout.morin.id',
  storefrontAccessToken: '9ebaee1f02c350903a0e6e6fca776f9d',
})

const parseShopifyResponse = (response) => JSON.parse(JSON.stringify(response))

const getProductDetail = async (id) => {
  const response = await shopifyClient.product.fetch(id)
  return parseShopifyResponse(response)
}

const createCheckout = async () => {
  const response = await shopifyClient.checkout.create()
  return parseShopifyResponse(response)
}

const addItemCheckout = async (id, item) => {
  try {
    const response = await shopifyClient.checkout.addLineItems(id, item)
    return parseShopifyResponse(response)
  } catch (_) {
    const checkout = await createCheckout()
    const data = {
      id: checkout.id,
    }
    localStorage.setItem('dataCheckout', JSON.stringify(data))
    const response = await shopifyClient.checkout.addLineItems(
      checkout.id,
      item,
    )
    return parseShopifyResponse(response)
  }
}

const updateItemCheckout = async (id, item) => {
  const response = await shopifyClient.checkout.updateLineItems(id, item)
  return parseShopifyResponse(response)
}

const removeItemCheckout = async (id, item) => {
  const response = await shopifyClient.checkout.removeLineItems(id, item)
  return parseShopifyResponse(response)
}

const fetchCheckout = async () => {
  const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'))
  if (dataCheckout) {
    let response = await shopifyClient.checkout.fetch(dataCheckout.id)
    response = parseShopifyResponse(response)
    if (response?.completedAt) {
      localStorage.removeItem('dataCheckout')
      return false
    } else {
      let jumlah = 0
      response?.lineItems.forEach((data) => {
        jumlah += data.quantity
      })
      return {
        lineItems: response?.lineItems,
        webUrl: response?.webUrl,
        jumlah,
      }
    }
  } else {
    createCheckout().then((checkout) => {
      const data = {
        id: checkout.id,
      }
      localStorage.setItem('dataCheckout', JSON.stringify(data))
    })
  }
}

export {
  fetchCheckout,
  getProductDetail,
  createCheckout,
  addItemCheckout,
  updateItemCheckout,
  removeItemCheckout,
}
